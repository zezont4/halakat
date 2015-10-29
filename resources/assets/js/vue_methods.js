var $vue_methods = {
    mark: function (my_class) {
        switch (true) {
            case (my_class == 'success'):
                return 'ممتاز';
            case (my_class == 'info'):
                return 'جيد جدا';
            case (my_class == 'warning'):
                return 'جيد';
            case (my_class == 'danger'):
                return 'لم يحفظ';
        }
    },

    getBasicData: function () {
        this.$http.get('daily/basic_data/', function (data) {
            this.behavior_types = data.behavior_types;
            this.memorize_types = data.memorize_types;
        }.bind(this));
    },

    fillSoraAndAyahList: function () {
        var x = 0;
        this.errors_max_count = [];
        while (x < 11) {
            this.errors_max_count.push({'value': x, 'text': x});
            x++;
        }
        this.quran_id_and_name = [{value: '', text: 'حدد السورة'}];
        this.quran_id_and_ayat = [{value: '', text: 'حدد الآية'}];
        this.quran.forEach(function (sora) {
            this.quran_id_and_name.push({value: sora.n, text: sora.t});
            this.quran_id_and_ayat.push({value: sora.n, text: sora.a});
        }.bind(this));
    },

    getAllStudentsData: function () {
        this.students.splice(0);
        this.summaries.splice(0);
        this.selected_day_daily = true;
        var rowDate = date_to_no(this.selected_date);
        if (!rowDate) return false;
        this.$http.get('daily/allJson/' + rowDate + '/215', function (data) {
            this.selected_day_daily = data.selected_day_daily;
            this.students = data.students;
            this.teacher = data.teacher;
            this.halakah = data.halakah;
            this.school = data.school;
        }.bind(this));
        setTimeout(reloadMaterializeDOM(), 2000);
    },

    extractSelectedMemorizeToArray: function (memorizeDate, memorizeTypeID, student) {
        var a_point = this.findMemorizeType(memorizeTypeID).a_point;

        var student_daily = _.findWhere(student.daily, {h_date: date_to_no(memorizeDate)}) || {};
        var memorize = _.findWhere(student_daily.daily_memorize, {memorize_type_id: memorizeTypeID, daily_id: student_daily.id}) || {
                id: null, daily_id: null, memorize_type_id: memorizeTypeID,
                start_sora: null, start_aya: null, end_sora: null, end_aya: null,
                errors_count: 0, hesitations_count: 0,
                points: a_point, notes: null, is_not_memorized: false,
                applyToAllStudents: false, halakah_id: this.halakah.AutoNo, h_date: this.selected_date
            };

        if (!student_daily.daily_memorize) return memorize;

        return memorize;
    },

    findStudent: function (studentID) {
        return _.findWhere(this.students, {st_no: studentID}) || {};
    },

    openMemorizeModal: function (memorizeTypeID, studentID) {
        this.selected_student_info = this.findStudent(studentID);
        this.current_memorize_type_id = memorizeTypeID;
        this.previous_daily_memorize = {};
        this.new_daily_memorize = this.extractSelectedMemorizeToArray(this.selected_date, memorizeTypeID, this.selected_student_info);
        this.$set('new_daily_memorize.my_class', this.pointClass(this.new_daily_memorize));
        this.$setWithoutBind('old_daily_memorize', this.new_daily_memorize);

        this.selected_student_info.daily.forEach(function (daily) {
            if (date_to_no(this.selected_date) != daily.h_date) {
                daily.daily_memorize.forEach(function (memorize) {
                    if (memorizeTypeID == memorize.memorize_type_id) {
                        this.previous_date = rawToFormattedDate(daily.h_date);
                    }
                }.bind(this));
            } else if (date_to_no(this.selected_date) == daily.h_date) {
                this.current_daily_id = daily.id;
            }
        }.bind(this));


        if (this.previous_date) {
            this.previous_daily_memorize = this.extractSelectedMemorizeToArray(this.previous_date, memorizeTypeID, this.selected_student_info);
        }

        if (!this.previous_daily_memorize.id && !this.new_daily_memorize.id) {
            this.getPreviousMemorize(date_to_no(this.selected_date), memorizeTypeID, this.selected_student_info.st_no)
        } else {
            this.prepareNewDayMemorization();
        }

        setTimeout(reloadMaterializeDOM, 1000);
        this.new_daily_memorize.end_aya = !this.new_daily_memorize.end_aya ? this.new_daily_memorize.start_aya : this.new_daily_memorize.end_aya;
        $('#daily_memorize_store').openModal({dismissible: false});
    },


    openBehaviorIndexModal: function (studentID) {
        var student = this.findStudent(studentID);
        this.selected_student_info = student;

        var daily = _.findWhere(student.daily, {h_date: date_to_no(this.selected_date)}) || {};
        this.current_daily_id = daily.id;
        this.selected_student_behaviors = daily.daily_behavior;

        if (this.selected_student_behaviors.length) {
            $('#modal_behavior_index').openModal();
        } else {
            this.openBehaviorStoreModal();
        }
    },

    openBehaviorStoreModal: function (daily_behavior_id) {
        if (daily_behavior_id) {

            var behavior = _.findWhere(this.selected_student_behaviors, {id: daily_behavior_id}) || {};
            this.new_daily_behavior = behavior;
            this.$set('new_daily_behavior.behavior_type', this.findBehavior(behavior.behavior_id).behavior_type);
            this.$setWithoutBind('old_daily_behavior', this.new_daily_behavior);

        } else {
            this.new_daily_behavior = {
                "id": null,
                "daily_id": this.current_daily_id,
                "behavior_id": null,
                "points": 0,
                "notes": null,
                "behavior_type": 1
            };
        }
        $('#modal_behavior_index').closeModal();
        $('#modal_behavior_store').openModal({dismissible: false});
    },

    prepareNewDayMemorization: function () {
//إذا كان يوم جديد فيتم تجهيز بيانات اليوم كبداية التسميع
        if (!this.new_daily_memorize.id && this.previous_daily_memorize.id) {
            this.new_daily_memorize.daily_id = this.current_daily_id;
            if (!this.previous_daily_memorize.is_not_memorized) {
                var $last_aya = this.previous_daily_memorize.end_aya >= this.quran[this.previous_daily_memorize.end_sora - 1].a;
                this.new_daily_memorize.start_sora = $last_aya ? this.previous_daily_memorize.end_sora + 1 : this.previous_daily_memorize.end_sora;
                this.new_daily_memorize.start_aya = $last_aya ? 1 : this.previous_daily_memorize.end_aya + 1;

                this.new_daily_memorize.end_sora = $last_aya ? this.previous_daily_memorize.end_sora + 1 : this.previous_daily_memorize.end_sora;

                //إذا كانت آخر سورة هي الناس
                this.new_daily_memorize.start_sora = this.new_daily_memorize.start_sora == 114 ? 114 : this.new_daily_memorize.start_sora;
            } else {
                this.new_daily_memorize.start_sora = this.previous_daily_memorize.start_sora;
                this.new_daily_memorize.start_aya = this.previous_daily_memorize.start_aya;

                this.new_daily_memorize.end_sora = this.previous_daily_memorize.end_sora;
                this.new_daily_memorize.end_aya = this.previous_daily_memorize.end_aya;
            }
        }
        this.getAyatCount();
    },

    getPreviousMemorize: function (h_date, memorizeTypeID, studentID) {
        this.$http.get('daily_memorize/getMemorizeData/' + h_date + '/' + memorizeTypeID + '/' + studentID, function (data) {
            this.previous_daily_memorize = data;
            this.prepareNewDayMemorization();
        }.bind(this));
    },

    getAyatCount: function () {
        if (this.new_daily_memorize.start_sora) {
            this.sora_1_ayat = this.quran[this.new_daily_memorize.start_sora - 1].a;
            var x = 1;
            this.sora_1_ayat_array = ([{value: '', text: 'حدد الآية'}]);
            while (x <= this.sora_1_ayat) {
                this.sora_1_ayat_array.push({value: x, text: x});
                x++;
            }
        }
        if (this.new_daily_memorize.end_sora) {
            this.sora_2_ayat = this.quran[this.new_daily_memorize.end_sora - 1].a;
            var y = 1;
            this.sora_2_ayat_array = ([{value: '', text: 'حدد الآية'}]);
            while (y <= this.sora_2_ayat) {
                this.sora_2_ayat_array.push({value: y, text: y});
                y++;
            }
        }
    },

    modelClass: function () {
        if (this.new_daily_memorize.id > 0)
            return this.pointClass(this.new_daily_memorize);
    },

    findMemorizeType: function (memorizeTypeID) {
        return _.findWhere(this.memorize_types, {id: memorizeTypeID}) || {};
    },

    findBehavior: function (behavior_id) {
        return _.findWhere(this.behavior_types, {id: behavior_id}) || {};
    },

    pointClass: function (st_memorize) {
        var a_point = this.findMemorizeType(st_memorize.memorize_type_id).a_point;
        var b_point = (a_point / 3) * 2;

        var st_points = st_memorize.points;
        if (st_memorize.is_not_memorized == 0) {
            switch (true) {
                case (st_points >= a_point):
                    return 'success';
                case (st_points >= b_point):
                    return 'info';
                case (st_points < b_point):
                    return 'warning';
            }
        }
        return 'danger';
    },

    studentBehaviorsPoints: function (student, behaviorTypeID) {
        var student_daily = _.findWhere(student.daily, {h_date: date_to_no(this.selected_date)}) || {};

        var totalBehaviorsPoints = 0;
        if (!student_daily.daily_behavior) return false;

        student_daily.daily_behavior.forEach(function (behavior) {
            var singleBehavior = this.findBehavior(behavior.behavior_id);
            if ((behaviorTypeID) == singleBehavior.behavior_type) {
                totalBehaviorsPoints += parseFloat(behavior.points);
            }
        }.bind(this));

        return totalBehaviorsPoints || false;

    },

    studentMemorizeData: function (student, memorizeTypeID) {
        var student_daily = _.findWhere(student.daily, {h_date: date_to_no(this.selected_date)}) || {};
        var memorize = getDataFromObject(_.findWhere(student_daily.daily_memorize, {memorize_type_id: memorizeTypeID, daily_id: student_daily.id}));
        memorize.my_class = _.size(memorize) ? this.pointClass(memorize) : 'default text-muted';
        memorize.points = _.size(memorize) ? memorize.points : 0;
        return memorize;
    },

    changeLocalMemorize: function (typeOfChange) {
        var student = _.findWhere(this.students, {st_no: this.selected_student_info.st_no}) || {};
        var daily = _.findWhere(student.daily, {id: this.new_daily_memorize.daily_id}) || {};
        if (typeOfChange == 'store') {

            daily.daily_memorize.push(this.new_daily_memorize);

        } else if (typeOfChange == 'destroy') {

            daily.daily_memorize.forEach(function (memorize, i) {
                if (daily_memorize.id == this.new_daily_memorize.id) {
                    daily.daily_memorize.splice(i, 1);
                }
            }.bind(this));
        }
    },

    changeLocalBehavior: function (typeOfChange) {
        var student = _.findWhere(this.students, {st_no: this.selected_student_info.st_no}) || {};
        var daily = _.findWhere(student.daily, {id: this.new_daily_behavior.daily_id}) || {};
        if (typeOfChange == 'store') {
            daily.daily_behavior.push(this.new_daily_behavior);

        } else if (typeOfChange == 'destroy') {

            daily.daily_behavior.forEach(function (daily_behavior, i) {
                if (daily_behavior.id == this.new_daily_behavior.id) {
                    daily.daily_behavior.splice(i, 1);
                }
            }.bind(this));
        }
    },

    setSortType: function () {
        if (this.sort_type == 'stFullName4') this.sort_order = 1;
        if (this.sort_type == 'finalPoints') this.sort_order = -1;
    },

    prepareNewMemorizeBeforeSaving: function () {
        this.new_daily_memorize.is_not_memorized = this.new_daily_memorize.is_not_memorized ? this.new_daily_memorize.is_not_memorized : 0;
        this.new_daily_memorize.errors_count = this.new_daily_memorize.errors_count ? this.new_daily_memorize.errors_count : 0;
        this.new_daily_memorize.hesitations_count = this.new_daily_memorize.hesitations_count ? this.new_daily_memorize.hesitations_count : 0;
    },

    storeMemorize: function () {
        this.prepareNewMemorizeBeforeSaving();

        if (this.new_daily_memorize.id) {

            this.$http.put('daily_memorize/update/', this.new_daily_memorize,
                function (data) {
                    $('#daily_memorize_store').closeModal();
                    reactToAjaxSuccess(data);
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });

        } else {

            this.new_daily_memorize.daily_id = this.current_daily_id;
            this.new_daily_memorize.memorize_type_id = this.current_memorize_type_id;

            this.$http.post('daily_memorize/store/', this.new_daily_memorize,
                function (data) {
                    if (data.data.id == 'Refresh') {
                        this.getAllStudentsData();
                    } else {
                        this.new_daily_memorize.id = data.data.id;
                        this.changeLocalMemorize('store');
                    }
                    $('#daily_memorize_store').closeModal();
                    reactToAjaxSuccess(data);
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
        }
    },

    destroyMemorize: function () {
        this.msg_title = 'تأكيد الحذف';
        this.msg_body = 'هل تريد حذف بيانات الحفظ الحالية؟';
        $('#msg_modal').openModal({
            dismissible: false,
            complete: function () {
                this.$http.delete('daily_memorize/destroy/' + this.new_daily_memorize.id, null,
                    function (data) {
                        $('#daily_memorize_store').closeModal();
                        reactToAjaxSuccess(data);
                        this.changeLocalMemorize('destroy');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            }.bind(this)
        });
    },

    destroyBehavior: function (behavior_id) {
        this.new_daily_behavior = _.findWhere(this.selected_student_behaviors, {id: behavior_id}) || {};
        var _behavior_id = behavior_id ? behavior_id : this.new_daily_behavior.id;
        this.msg_title = 'تأكيد الحذف';
        this.msg_body = 'هل تريد حذف السلوك الحالي ؟';
        $('#msg_modal').openModal({
            dismissible: false,
            complete: function () {
                this.$http.delete('daily_behavior/destroy/' + _behavior_id, null,
                    function (data) {
                        reactToAjaxSuccess(data);
                        this.changeLocalBehavior('destroy');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            }.bind(this)
        });
    },

    storeBehavior: function () {
        if (this.new_daily_behavior.id) {
            this.$http.put('daily_behavior/update/', this.new_daily_behavior,
                function (data) {
                    reactToAjaxSuccess(data);
                    $('#modal_behavior_store').closeModal();
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });

        } else {

            this.$http.post('daily_behavior/store/', this.new_daily_behavior,
                function (data) {
                    this.new_daily_behavior.id = data.data.id;
                    this.changeLocalBehavior('store');
                    reactToAjaxSuccess(data);
                    $('#modal_behavior_store').closeModal();
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
        }
    },

    prepareNewDailyForHalakah: function () {
        this.$http.post('daily/prepareForHalakah/', {'h_date': date_to_no(this.selected_date), 'StHalaqah': 215},
            function (data) {
                reactToAjaxSuccess(data);
                this.getAllStudentsData();
            }.bind(this))
            .error(function (data, status, request) {
                reactToAjaxError(data, status, request);
            });
    },

    randomPhrase: function () {
        return _.sample(random_phrases);
    },

    calculatePoints: function () {

        //max points for selected memorize type
        var a_point = parseFloat(this.findMemorizeType(this.current_memorize_type_id).a_point);

        this.new_daily_memorize.points = parseFloat(a_point) - parseFloat(this.new_daily_memorize.errors_count) - (parseFloat(this.new_daily_memorize.hesitations_count) / 2);

        console.info(getCharCountJs(this.new_daily_memorize.start_sora, this.new_daily_memorize.start_aya, this.new_daily_memorize.end_sora, this.new_daily_memorize.end_aya));

        if (this.new_daily_memorize.points <= 0) {
            this.new_daily_memorize.points = 0;
            this.new_daily_memorize.is_not_memorized = 1;
        } else {
            this.new_daily_memorize.is_not_memorized = 0;
        }
        this.$set('new_daily_memorize.my_class', this.pointClass(this.new_daily_memorize));

        //this.new_daily_memorize.my_class = this.pointClass(this.new_daily_memorize);
        //console.log(this.new_daily_memorize.start_sora);
        //console.log(this.new_daily_memorize.start_aya);
        //console.log(this.new_daily_memorize.end_sora);
        //console.log(this.new_daily_memorize.end_aya);

    },
    close_modal: function () {
        $('#msg_modal').closeModal();
    },

    $setWithoutBind: function (destination, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                var string_key = destination + '.' + key;
                this.$set(string_key, source[key]);
            }
        }
    }
};