var $vue_methods = {
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
        this.$http.get('daily/allJson/' + rowDate + '/' + this.halakah_id, function (data) {
            this.selected_day_daily = data.selected_day_daily;
            this.students = data.students;
            this.daily = data.daily;
            this.daily_memorize = data.daily_memorize;
            this.daily_behavior = data.daily_behavior;
            this.teacher = data.teacher;
            this.halakah = data.halakah;
            this.halakah_type = data.halakah_type;
            this.minimum_memorize = data.minimum_memorize;
            this.school = data.school;
        }.bind(this));
        setTimeout(reloadMaterializeDOM(), 2000);
    },

    findDailyMemorizeByDateTypeStudent: function ($memorizeDate, $memorize_type_id, $student_id) {
        var a_point = this.findMemorizeType($memorize_type_id).max_point;

        var student_daily = _.findWhere(this.daily, {st_id: $student_id, h_date: date_to_no($memorizeDate)}) || {};
        return _.findWhere(this.daily_memorize, {memorize_type_id: $memorize_type_id, daily_id: student_daily.id}) || {
                id: null, daily_id: null, memorize_type_id: $memorize_type_id,
                start_sora: null, start_aya: null, end_sora: null, end_aya: null,
                errors_count: 0, hesitations_count: 0,
                points: a_point, notes: null, is_not_memorized: false,
                applyToAllStudents: false, halakah_id: this.halakah.AutoNo, h_date: this.selected_date
            };

        //if (!student_daily.daily_memorize) return memorize;

    },

    findStudent: function (student_id) {
        return _.findWhere(this.students, {st_no: student_id}) || {};
    },

    openMemorizeModal: function ($memorize_type_id, student_id) {
        this.selected_student_info = this.findStudent(student_id);
        this.current_memorize_type_id = $memorize_type_id;
        this.previous_daily_memorize = {};
        this.new_daily_memorize = this.findDailyMemorizeByDateTypeStudent(this.selected_date, $memorize_type_id, student_id);
        //this.$set('new_daily_memorize.my_class', this.mark(this.new_daily_memorize.points,$memorize_type_id).mark_class);
        this.$setWithoutBind('old_daily_memorize', this.new_daily_memorize);

        this.daily.forEach(function (daily) {
            if (date_to_no(this.selected_date) != daily.h_date && daily.st_id == student_id) {
                this.daily_memorize.forEach(function (memorize) {
                    if ($memorize_type_id == memorize.memorize_type_id && memorize.daily_id == daily.id) {
                        //console.info(daily.h_date + ' ' + $memorize_type_id);
                        this.previous_date = rawToFormattedDate(daily.h_date);
                    }
                }.bind(this));
            } else if (date_to_no(this.selected_date) == daily.h_date && daily.st_id == student_id) {
                this.current_daily_id = daily.id;
            }
        }.bind(this));


        if (this.previous_date) {
            this.previous_daily_memorize = this.findDailyMemorizeByDateTypeStudent(this.previous_date, $memorize_type_id, student_id);
        }

        if (!this.previous_daily_memorize.id && !this.new_daily_memorize.id) {
            this.getPreviousMemorize(date_to_no(this.selected_date), $memorize_type_id, this.selected_student_info.st_no)
        } else {
            this.prepareNewDayMemorization();
        }

        setTimeout(reloadMaterializeDOM, 1000);
        this.new_daily_memorize.end_aya = !this.new_daily_memorize.end_aya ? this.new_daily_memorize.start_aya : this.new_daily_memorize.end_aya;
        $('#daily_memorize_store').openModal({dismissible: false});
    },


    studentTotalBehaviors: function ($daily_id) {
        return _.size(_.where(this.daily_behavior, {daily_id: $daily_id})) || null;
    },

    openBehaviorIndexModal: function (student_id) {
        this.selected_student_info = this.findStudent(student_id);

        var daily = _.findWhere(this.daily, {st_id: student_id, h_date: date_to_no(this.selected_date)}) || {};
        this.current_daily_id = daily.id;
        //console.log(this.studentTotalBehaviors(daily.id));
        //this.selected_student_behaviors = _.where(this.daily_behavior, {daily_id: daily.id}) || {};

        if (this.studentTotalBehaviors(this.current_daily_id)) {
            $('#modal_behavior_index').openModal();
        } else {
            this.openBehaviorStoreModal();
        }
    },

    openBehaviorStoreModal: function (daily_behavior_id) {
        if (daily_behavior_id) {

            var behavior = _.findWhere(this.daily_behavior, {id: daily_behavior_id}) || {};
            this.new_daily_behavior = behavior;
            this.$set('new_daily_behavior.is_positive', this.findBehaviorType(behavior.behavior_type_id).is_positive);
            this.$setWithoutBind('old_daily_behavior', this.new_daily_behavior);

        } else {
            this.new_daily_behavior = {
                "id": null,
                "daily_id": this.current_daily_id,
                "behavior_type_id": null,
                "points": 0,
                "notes": null,
                "is_positive": 1
            };
        }
        $('#modal_behavior_index').closeModal();
        $('#modal_behavior_store').openModal({dismissible: false});
    },

    prepareNewDayMemorization: function () {
//إذا كان يوم جديد فيتم تجهيز بيانات اليوم كبداية التسميع
        if (!this.new_daily_memorize.id && this.previous_daily_memorize.id) {
            this.new_daily_memorize.daily_id = this.current_daily_id;
            //إذا كانت نتيجة اليوم السابق هي حافظ
            if (!this.previous_daily_memorize.is_not_memorized) {
                //console.log(this.new_daily_memorize.start_sora);
                var $last_aya = this.previous_daily_memorize.end_aya >= this.quran[this.previous_daily_memorize.end_sora - 1].a;
                this.new_daily_memorize.start_sora = $last_aya ? this.previous_daily_memorize.end_sora - 1 : this.previous_daily_memorize.end_sora;
                this.new_daily_memorize.start_aya = $last_aya ? 1 : this.previous_daily_memorize.end_aya + 1;

                this.new_daily_memorize.end_sora = $last_aya ? this.previous_daily_memorize.end_sora - 1 : this.previous_daily_memorize.end_sora;

                //إذا كانت آخر سورة هي الناس
                this.new_daily_memorize.start_sora = (this.new_daily_memorize.start_sora >= 114) ? 114 : this.new_daily_memorize.start_sora;
                this.new_daily_memorize.end_sora = (this.new_daily_memorize.end_sora >= 114) ? 114 : this.new_daily_memorize.end_sora;
                this.new_daily_memorize.start_sora = (this.new_daily_memorize.start_sora <= 1) ? 1 : this.new_daily_memorize.start_sora;
                this.new_daily_memorize.end_sora = (this.new_daily_memorize.end_sora <= 1) ? 1 : this.new_daily_memorize.end_sora;
                //console.log(this.new_daily_memorize.start_sora);
                //إذا كان لم يحفظ في اليوم السابق
            } else {
                this.new_daily_memorize.start_sora = this.previous_daily_memorize.start_sora;
                this.new_daily_memorize.start_aya = this.previous_daily_memorize.start_aya;

                this.new_daily_memorize.end_sora = this.previous_daily_memorize.end_sora;
                this.new_daily_memorize.end_aya = this.previous_daily_memorize.end_aya;
            }
        }
        this.getAyatCount();
    },

    getPreviousMemorize: function (h_date, memorize_type_id, student_id) {
        this.$http.get('daily_memorize/getMemorizeData/' + h_date + '/' + memorize_type_id + '/' + student_id, function (data) {
            this.previous_daily_memorize = data;
            this.prepareNewDayMemorization();
        }.bind(this));
    },

    getAyatCount: function () {
        //console.log(this.new_daily_memorize.start_sora);
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
            return this.mark(this.new_daily_memorize);
    },

    findMemorizeType: function ($memorize_type_id) {
        return _.findWhere(this.memorize_types, {id: $memorize_type_id}) || {};
    },

    findBehaviorType: function ($behavior_type_id) {
        return _.findWhere(this.behavior_types, {id: $behavior_type_id}) || {};
    },

    mark: function ($points, $memorize_type_id) {
        //console.log($points);
        var memorize_type = this.findMemorizeType($memorize_type_id);
        var a_point = memorize_type.a_point;
        var b_point = memorize_type.b_point;
        var c_point = memorize_type.c_point;
        var mark_label = '';
        var mark_class = 'success';
        switch (true) {
            case ($points >= a_point):
                mark_label = 'ممتاز';
                mark_class = 'success';
                break;
            case ($points >= b_point):
                mark_label = 'جيد جدا';
                mark_class = 'info';
                break;
            case ($points >= c_point):
                mark_label = 'جيد';
                mark_class = 'warning';
                break;
            case ($points >= 0):
                mark_label = 'لم يحفظ';
                mark_class = 'danger';
                break;
        }

        return {
            mark_class: mark_class,
            mark_label: mark_label
        };
    },

    studentBehaviorsPoints: function ($student_no, $positive_or_negative) {
        var student_daily = _.findWhere(this.daily, {st_id: $student_no, h_date: date_to_no(this.selected_date)}) || {};
        var totalBehaviorsPoints = 0;
        //if (!student_daily.daily_behavior) return false;
        this.daily_behavior.forEach(function (behavior) {
            if ($positive_or_negative == this.findBehaviorType(behavior.behavior_type_id).is_positive && behavior.daily_id == student_daily.id) {
                totalBehaviorsPoints += parseFloat(behavior.points);
            }
        }.bind(this));

        return totalBehaviorsPoints.toFixed(2) || false;
    },

    studentMemorizeData: function ($student, $memorize_type_id) {
        var student_daily = _.findWhere(this.daily, {st_id: $student.st_no, h_date: date_to_no(this.selected_date)}) || {};
        //console.info(student_daily);
        var memorize = getDataFromObject(_.findWhere(this.daily_memorize, {memorize_type_id: $memorize_type_id, daily_id: student_daily.id}));
        memorize.my_class = _.size(memorize) ? this.mark(memorize.points, $memorize_type_id).mark_class : 'default text-muted';
        memorize.points = _.size(memorize) ? memorize.points : 0;
        return memorize;
    },

    changeLocalData: function ($type_of_change, $array_name) {
        //var student = _.findWhere(this.students, {st_no: this.selected_student_info.st_no}) || {};
        //var daily = _.findWhere(student.daily, {id: this['new_' + $array_name].daily_id}) || {};
        if ($type_of_change == 'store') {
            this[$array_name].push(this['new_' + $array_name]);

        } else if ($type_of_change == 'destroy') {
            this[$array_name].forEach(function (item, i) {
                if (item.id == this['new_' + $array_name].id) {
                    //console.log(item);
                    this[$array_name].splice(i, 1);
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
                        this.daily_memorize.push(this.new_daily_memorize);
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
                        this.changeLocalData('destroy', 'daily_memorize');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            }.bind(this)
        });
    },

    destroyBehavior: function (behavior_id) {
        this.new_daily_behavior = _.findWhere(this.daily_behavior, {id: behavior_id}) || {};
        var _behavior_id = behavior_id ? behavior_id : this.new_daily_behavior.id;
        this.msg_title = 'تأكيد الحذف';
        this.msg_body = 'هل تريد حذف السلوك الحالي ؟';
        $('#msg_modal').openModal({
            dismissible: false,
            complete: function () {
                this.$http.delete('daily_behavior/destroy/' + _behavior_id, null,
                    function (data) {
                        reactToAjaxSuccess(data);
                        this.changeLocalData('destroy', 'daily_behavior');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            }.bind(this)
        });
    },

    storeBehavior: function () {
        //update
        if (this.new_daily_behavior.id) {
            this.$http.put('daily_behavior/update/', this.new_daily_behavior,
                function (data) {
                    reactToAjaxSuccess(data);
                    $('#modal_behavior_store').closeModal();
                    //console.log('fgh'+this.selected_student_info);
                    //this.openBehaviorIndexModal(this.selected_student_info.st_no);
                    $('#modal_behavior_index').openModal();
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });

        } else {
            //new

            this.$http.post('daily_behavior/store/', this.new_daily_behavior,
                function (data) {
                    this.new_daily_behavior.id = data.data.id;
                    this.daily_behavior.push(this.new_daily_behavior);
                    reactToAjaxSuccess(data);
                    $('#modal_behavior_store').closeModal();
                    this.openBehaviorIndexModal(this.selected_student_info.st_no);
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
        }
    },

    prepareNewDailyForHalakah: function () {
        this.selected_day_daily = true;
        //this.selected_day_daily = true;
        this.$http.post('daily/prepareForHalakah/', {'h_date': date_to_no(this.selected_date), 'StHalaqah': this.halakah_id},
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

        var memorize_type = this.findMemorizeType(this.current_memorize_type_id);
        var max_point = memorize_type.max_point;
        var not_accepted_errors = memorize_type.not_accepted_errors;
        var not_accepted_hesitations = memorize_type.not_accepted_hesitations;

        var one_error_point = parseFloat(max_point) / parseInt(not_accepted_errors);
        var one_hesitation_point = parseFloat(max_point) / parseInt(not_accepted_hesitations);

        this.new_daily_memorize.points = (
            parseFloat(max_point) -
            (parseFloat(this.new_daily_memorize.errors_count) * one_error_point ) -
            (parseFloat(this.new_daily_memorize.hesitations_count) * one_hesitation_point)
        );
        //console.log(this.new_daily_memorize.points);
        //console.info(getCharCountJs(this.new_daily_memorize.start_sora, this.new_daily_memorize.start_aya, this.new_daily_memorize.end_sora, this.new_daily_memorize.end_aya));

        if (this.new_daily_memorize.points < 0) {
            this.new_daily_memorize.points = 0;
            this.new_daily_memorize.is_not_memorized = 1;
        } else {
            this.new_daily_memorize.is_not_memorized = 0;
        }

        //this.$set('new_daily_memorize.my_class', this.mark(this.new_daily_memorize.points,this.current_memorize_type_id).mark_class);

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