var $vue_methods = {
    degree: function (my_class) {
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

    getMemorizeAndBehaviorTypes: function () {
        this.$http.get('daily/memorize_and_behavior_types/', function (data) {
            this.behavior_types = data.behavior_types;
            this.memorize_types = data.memorize_types;
        }.bind(this));
    },
    fillSoraAndAyahList: function () {
        var x = 1;
        this.errorsMaxCount = ([{'value': 0, 'text': 0}]);
        while (x < 21) {
            this.errorsMaxCount.push({'value': x, 'text': x});
            x++;
        }
        this.quranIdAndName = [{value: '', text: 'حدد السورة'}];
        this.quranIdAndAyat = [{value: '', text: 'حدد الآية'}];
        this.quran.forEach(function (sora) {
            this.quranIdAndName.push({value: sora.n, text: sora.t});
            this.quranIdAndAyat.push({value: sora.n, text: sora.a});
        }.bind(this));
    },

    getAllStudentsData: function () {
        this.students.splice(0);
        this.summaries.splice(0);
        this.SelectedDayDaily = true;
        var rowDate = date_to_no(this.selectedDate);
        if (!rowDate) return false;
        this.$http.get('daily/allJson/' + rowDate + '/215', function (data) {
            this.SelectedDayDaily = data.SelectedDayDaily;
            this.students = data.students;
            this.teacher = data.teacher;
            this.halakah = data.halakah;
            this.school = data.school;
        }.bind(this));
        setTimeout(reloadMaterializeDOM(), 2000);
    },

    extractSelectedMemorizeToArray: function (memorizeDate, memorizeTypeID, student) {
        var a_point = this.singleMemorizeData(memorizeTypeID).a_point;
        var memorize = {
            id: null, daily_id: null, memorize_type_id: memorizeTypeID,
            start_sora: null, start_aya: null, end_sora: null, end_aya: null,
            errors_count: 0, hesitations_count: 0,
            points: a_point, notes: null, is_not_memorized: false,
            applyToAllStudents: false, halakah_id: this.halakah.AutoNo, h_date: this.selectedDate
        };
        var selectedDailyData = this.singleDailyData(student, memorizeDate);

        if (!selectedDailyData.daily_memorize) return memorize;
        selectedDailyData.daily_memorize.forEach(function (st_memorize) {
            if (memorizeTypeID == st_memorize.memorize_type_id) {
                memorize = st_memorize;
                memorize.daily_id = selectedDailyData.id;
                memorize.memorize_type_id = memorizeTypeID;
            }
            //}
        }.bind(this));
        return memorize;
    },

    findStudentById: function (studentID) {
        var student = {};
        this.students.forEach(function (st) {
            if (st.st_no == studentID) {
                student = st;
                return false;
            }
        });
        return student;
    },

    openMemorizeModal: function (memorizeTypeID, studentID) {
        var student = this.findStudentById(studentID);
        this.CurrentMemorizeTypeID = memorizeTypeID;
        this.selectedStudentInfo = student;
        this.previousMemorize = {};
        this.newMemorize = this.extractSelectedMemorizeToArray(this.selectedDate, memorizeTypeID, student);
        this.$set('newMemorize.my_class', this.pointClass(this.newMemorize));
        this.$setWithoutBind('old_memorize', this.newMemorize);
        //this.newMemorize.my_class = this.pointClass(this.newMemorize);

        //console.info(this.newMemorize);
        student.daily.forEach(function (daily) {
            if (date_to_no(this.selectedDate) != daily.h_date) {
                daily.daily_memorize.forEach(function (memorize) {
                    if (memorizeTypeID == memorize.memorize_type_id) {
                        this.previousDate = rawToFormattedDate(daily.h_date);
                    }
                }.bind(this));
            } else if (date_to_no(this.selectedDate) == daily.h_date) {
                this.CurrentDailyId = daily.id;
            }
        }.bind(this));


        if (this.previousDate) {
            this.previousMemorize = this.extractSelectedMemorizeToArray(this.previousDate, memorizeTypeID, student);
        }

        if (!this.previousMemorize.id && !this.newMemorize.id) {
            this.getPreviousMemorize(date_to_no(this.selectedDate), memorizeTypeID, student.st_no)
        } else {
            this.prepareNewDayMemorization();
        }

        setTimeout(reloadMaterializeDOM, 1000);
        this.newMemorize.end_aya = !this.newMemorize.end_aya ? this.newMemorize.start_aya : this.newMemorize.end_aya;
        //this.newMemorize.my_class = this.pointClass(this.newMemorize);
        $('#daily_memorize_store').openModal({dismissible: false});
    },


    openBehaviorIndexModal: function (studentID) {
        var student = this.findStudentById(studentID);
        this.selectedStudentInfo = student;
        student.daily.forEach(function (daily) {
            if (date_to_no(this.selectedDate) == daily.h_date) {
                this.CurrentDailyId = daily.id;
                this.selectedStudentBehaviors = daily.daily_behavior;
            }
        }.bind(this));
        if (this.selectedStudentBehaviors.length) {
            $('#modal_behavior_index').openModal();
        } else {
            this.openBehaviorStoreModal();
        }
        //console.log(this.new_daily_behavior);
    },

    openBehaviorStoreModal: function (daily_behavior_id) {
        if (daily_behavior_id) {
            this.selectedStudentBehaviors.forEach(function (behavior) {
                if (daily_behavior_id == behavior.id) {
                    this.new_daily_behavior = behavior;
                    this.$set('new_daily_behavior.behavior_type', this.singleBehaviorData(behavior.behavior_id).behavior_type);
                    this.$setWithoutBind('old_daily_behavior', this.new_daily_behavior);
                }
            }.bind(this));
        } else {
            this.new_daily_behavior = {
                "id": null,
                "daily_id": this.CurrentDailyId,
                "behavior_id": null,
                "points": 0,
                "notes": null,
                "behavior_type": 1
            };
        }
        $('#modal_behavior_index').closeModal();
        $('#modal_behavior_store').openModal({dismissible: false});
        //console.info(this.new_daily_behavior);
    },

    prepareNewDayMemorization: function () {
//إذا كان يوم جديد فيتم تجهيز بيانات اليوم كبداية التسميع
        if (!this.newMemorize.id && this.previousMemorize.id) {
            this.newMemorize.daily_id = this.CurrentDailyId;
            if (!this.previousMemorize.is_not_memorized) {
                var $last_aya = this.previousMemorize.end_aya >= this.quran[this.previousMemorize.end_sora - 1].a;
                this.newMemorize.start_sora = $last_aya ? this.previousMemorize.end_sora + 1 : this.previousMemorize.end_sora;
                this.newMemorize.start_aya = $last_aya ? 1 : this.previousMemorize.end_aya + 1;

                this.newMemorize.end_sora = $last_aya ? this.previousMemorize.end_sora + 1 : this.previousMemorize.end_sora;

                //إذا كانت آخر سورة هي الناس
                this.newMemorize.start_sora = this.newMemorize.start_sora == 114 ? 114 : this.newMemorize.start_sora;
            } else {
                this.newMemorize.start_sora = this.previousMemorize.start_sora;
                this.newMemorize.start_aya = this.previousMemorize.start_aya;

                this.newMemorize.end_sora = this.previousMemorize.end_sora;
                this.newMemorize.end_aya = this.previousMemorize.end_aya;
            }
        }
        this.getAyatCount();
    },

    getPreviousMemorize: function (h_date, memorizeTypeID, studentID) {
        this.$http.get('daily_memorize/getMemorizeData/' + h_date + '/' + memorizeTypeID + '/' + studentID, function (data) {
            this.previousMemorize = data;
            this.prepareNewDayMemorization();
        }.bind(this));
    },

    getAyatCount: function () {
        if (this.newMemorize.start_sora) {
            this.sora1Ayat = this.quran[this.newMemorize.start_sora - 1].a;
            var x = 1;
            this.sora1AyatArray = ([{value: '', text: 'حدد الآية'}]);
            while (x <= this.sora1Ayat) {
                this.sora1AyatArray.push({value: x, text: x});
                x++;
            }
        }
        if (this.newMemorize.end_sora) {
            this.sora2Ayat = this.quran[this.newMemorize.end_sora - 1].a;
            var y = 1;
            this.sora2AyatArray = ([{value: '', text: 'حدد الآية'}]);
            while (y <= this.sora2Ayat) {
                this.sora2AyatArray.push({value: y, text: y});
                y++;
            }
        }
    },

    modelClass: function () {
        if (this.newMemorize.id > 0)
            return this.pointClass(this.newMemorize);
    },

    singleMemorizeData: function (memorizeTypeID) {
        var selectedMemorize = '';
        this.memorize_types.forEach(function (memorize) {
            if (memorizeTypeID == memorize.id) {
                selectedMemorize = memorize;
                return false;
            }
        });
        return selectedMemorize;
    },

    singleBehaviorData: function (behavior_id) {
        var tmp_behavior = {};
        this.behavior_types.forEach(function (behavior) {
            if (behavior_id == behavior.id) {
                tmp_behavior.type = behavior.behavior_type == 1 ? 'إيجابي' : 'سلبي';
                tmp_behavior.behavior_type = behavior.behavior_type;
                tmp_behavior.name = behavior.name;
                tmp_behavior.points = behavior.points;
            }
        });
        return tmp_behavior;
    },

    pointClass: function (st_memorize) {
        var a_point = this.singleMemorizeData(st_memorize.memorize_type_id).a_point;
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

    singleDailyData: function (student, Date) {
        if (!student.daily.length) return {};
        var rowDate = date_to_no(Date);
        var selectedDaily = {};
        student.daily.forEach(function (daily, index) {
            if (daily.h_date == rowDate) {

                selectedDaily = daily;
                return false;
            }
        });
        return selectedDaily;
    },

    studentBehaviorsPoints: function (student, behaviorTypeID) {
        var selectedDailyIndex = this.singleDailyData(student, this.selectedDate);
        var totalBehaviorsPoints = 0;
        if (!selectedDailyIndex.daily_behavior) return false;

        selectedDailyIndex.daily_behavior.forEach(function (behavior) {
            var singleBehavior = this.singleBehaviorData(behavior.behavior_id);
            //console.info('singleBehavior :' + singleBehavior);
            if ((behaviorTypeID) == singleBehavior.behavior_type) {
                totalBehaviorsPoints += parseFloat(behavior.points);
            }
        }.bind(this));
        if (totalBehaviorsPoints) return totalBehaviorsPoints;

        return false;
    },

    studentMemorizeData: function (student, memorizeTypeID) {
        var memorize = {};
        var selectedDailyData = this.singleDailyData(student, this.selectedDate);
        if (selectedDailyData.daily_memorize) {
            selectedDailyData.daily_memorize.forEach(function (st_memorize) {

                if (memorizeTypeID == st_memorize.memorize_type_id) {

                    memorize.my_class = this.pointClass(st_memorize);
                    memorize.points = st_memorize.points;
                    return false;
                }
            }.bind(this));
        }
        if (!memorize.my_class) memorize.my_class = 'default text-muted';
        if (!memorize.points) memorize.points = 0;
        return memorize;

    },

    changeLocalMemorize: function (typeOfChange) {
        this.students.forEach(function (student) {
            if (student.st_no == this.selectedStudentInfo.st_no) {
                student.daily.forEach(function (daily) {
                    if (daily.id == this.newMemorize.daily_id) {

                        if (typeOfChange == 'store') {

                            daily.daily_memorize.push(this.newMemorize);

                        } else if (typeOfChange == 'destroy') {

                            for (var i3 = 0; i3 < daily.daily_memorize.length; i3++) {
                                if (daily.daily_memorize[i3].id == this.newMemorize.id) {
                                    daily.daily_memorize.splice(i3, 1);
                                }
                            }

                        }
                    }
                }.bind(this));
            }
        }.bind(this));

    },
    changeLocalBehavior: function (typeOfChange) {
        this.students.forEach(function (student,f1) {
            if (student.st_no == this.selectedStudentInfo.st_no) {
                student.daily.forEach(function (daily,f2) {
                    if (daily.id == this.new_daily_behavior.daily_id) {

                        if (typeOfChange == 'store') {
                            daily.daily_behavior.push(this.new_daily_behavior);

                        } else if (typeOfChange == 'destroy') {

                            daily.daily_behavior.forEach(function (daily_behavior, f3) {
                                if (daily_behavior.id == this.new_daily_behavior.id) {
                                    daily.daily_behavior.splice(f3, 1);
                                }
                            }.bind(this));
                            //for (var x = 0; x < daily.daily_behavior.length; x++) {
                            //    if (daily.daily_behavior[x].id == this.new_daily_behavior.id) {
                            //        daily.daily_behavior.splice(x, 1);
                            //    }
                            //}
                        }
                    }
                }.bind(this));
            }
        }.bind(this));

    },
    setSortType: function () {
        if (this.sortType == 'stFullName4') this.sortOrder = 1;
        if (this.sortType == 'finalPoints') this.sortOrder = -1;
    },

    /*makeAjaxRequest: function ($url, $requestData) {
     this.ajaxRespondData = null;
     this.$http.post($url, $requestData,
     function (data) {
     reactToAjaxSuccess(data);
     }.bind(this))
     .error(function (data, status, request) {
     reactToAjaxError(data, status, request);
     })
     },*/

    prepareNewMemorizeBeforeSaving: function () {
        this.newMemorize.is_not_memorized = this.newMemorize.is_not_memorized ? this.newMemorize.is_not_memorized : 0;
        this.newMemorize.errors_count = this.newMemorize.errors_count ? this.newMemorize.errors_count : 0;
        this.newMemorize.hesitations_count = this.newMemorize.hesitations_count ? this.newMemorize.hesitations_count : 0;
    },

    storeMemorize: function () {
        this.prepareNewMemorizeBeforeSaving();

        if (this.newMemorize.id) {

            this.$http.put('daily_memorize/update/', this.newMemorize,
                function (data) {
                    $('#daily_memorize_store').closeModal();
                    reactToAjaxSuccess(data);
                    //this.changeLocalMemorize('update');
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
        } else {

            this.newMemorize.daily_id = this.CurrentDailyId;
            this.newMemorize.memorize_type_id = this.CurrentMemorizeTypeID;

            this.$http.post('daily_memorize/store/', this.newMemorize,
                function (data) {

                    if (data.data.id == 'Refresh') {
                        this.students.splice(0);
                        this.summaries.splice(0);
                        this.getAllStudentsData();

                    } else {
                        this.newMemorize.id = data.data.id;
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
                this.$http.delete('daily_memorize/destroy/' + this.newMemorize.id, null,
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
        this.selectedStudentBehaviors.forEach(function (behavior) {
            if (behavior_id == behavior.id) {
                this.new_daily_behavior = behavior;
            }
        }.bind(this));
        var _behavior_id = behavior_id ? behavior_id : this.new_daily_behavior.id;
        this.msg_title = 'تأكيد الحذف';
        this.msg_body = 'هل تريد حذف السلوك الحالي ؟';
        $('#msg_modal').openModal({
            dismissible: false,
            complete: function () {
                this.$http.delete('daily_behavior/destroy/' + _behavior_id, null,
                    function (data) {
                        reactToAjaxSuccess(data);
                        //$('#modal_behavior_store').closeModal();
                        this.changeLocalBehavior('destroy');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            }.bind(this)
        });
    },

    storeBehavior: function () {
        //this.prepareNewMemorizeBeforeSaving();

        if (this.new_daily_behavior.id) {

            this.$http.put('daily_behavior/update/', this.new_daily_behavior,
                function (data) {
                    reactToAjaxSuccess(data);
                    $('#modal_behavior_store').closeModal();
                    //this.changeLocalBehavior('update');
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });

        } else {

            //this.new_daily_behavior.daily_id = this.CurrentDailyId;
            //this.new_daily_behavior.behavior_type_id = this.CurrentMemorizeTypeID;

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
        this.$http.post('daily/prepareForHalakah/', {'h_date': date_to_no(this.selectedDate), 'StHalaqah': 215},
            function (data) {
                reactToAjaxSuccess(data);
                this.getAllStudentsData();
            }.bind(this))
            .error(function (data, status, request) {
                reactToAjaxError(data, status, request);
            });
    },

    randomPhrase: function () {
        return randomPhrase[Math.floor((Math.random() * randomPhrase.length - 1) + 1)];
    },

    calculatePoints: function () {
        var a_point = parseFloat(this.singleMemorizeData(this.CurrentMemorizeTypeID).a_point);
        this.newMemorize.points = parseFloat(a_point) - parseFloat(this.newMemorize.errors_count) - (parseFloat(this.newMemorize.hesitations_count) / 2);
        if (this.newMemorize.points <= 0) {
            this.newMemorize.points = 0;
            this.newMemorize.is_not_memorized = 1;
        } else {
            this.newMemorize.is_not_memorized = 0;
        }
        this.newMemorize.my_class = this.pointClass(this.newMemorize);
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