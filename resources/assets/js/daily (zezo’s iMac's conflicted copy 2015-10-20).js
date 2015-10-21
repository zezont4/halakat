var content = new Vue({
    el: '#content',
    data: myData,
    ready: function () {
        /*var g_date = '20150620'; console.log('Selected Gregorian date : ' + g_date); var todayHijriDateArray = zezo_get_hijri_date(g_date); this.todayHijriDate = todayHijriDateArray; console.log('Converted from g to (H array) : ' + this.days.todayHijriDate); for (var i = 0; i < 5; i++) { var rowTodayHijriDate = get_row_hijri_date(todayHijriDateArray); console.log('converted from (H array) to (H row) : ' + rowTodayHijriDate); var g_date = get_g_date(rowTodayHijriDate); console.log('convert (H row) to (G row) : ' + g_date); var day_no = get_g_date(rowTodayHijriDate, 'yes'); console.log('get day No from H date : ' + day_no); var addDays = add_days(g_date, -7); console.log('Add days to (G date) : ' + addDays); }*/
        this.getDataFromDB();
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

    computed: {
        summaries: function () {
            var data = [];
            this.allJson.students.forEach(function (student) {
                var selectedDailyData = this.singleDailyData(student, this.allJson.selectedDate);
                var dailyId, dailyHDate, dailyStatus,
                    goodBehaviorsPoints, badBehaviorsPoints, totalBehaviors,
                    memorize1Points, memorize2Points, memorize3Points, totalMemorize,
                    memorize1Class, memorize2Class, memorize3Class,
                    finalPoints;
                if (selectedDailyData.id) {

                    //Daily
                    dailyId = selectedDailyData.id;
                    dailyHDate = selectedDailyData.h_date;
                    dailyStatus = selectedDailyData.status;

                    //Behaviors
                    goodBehaviorsPoints = parseFloat(this.studentBehaviorsPoints(student, 1)) || 0;
                    badBehaviorsPoints = parseFloat(this.studentBehaviorsPoints(student, 2)) || 0;

                    totalBehaviors = parseFloat(goodBehaviorsPoints) - parseFloat(badBehaviorsPoints);

                    //Memorize
                    memorize1Points = parseFloat(this.studentMemorizeData(student, 1).points) || 0;
                    memorize2Points = parseFloat(this.studentMemorizeData(student, 2).points) || 0;
                    memorize3Points = parseFloat(this.studentMemorizeData(student, 3).points) || 0;

                    totalMemorize = parseFloat(memorize1Points) + parseFloat(memorize2Points) + parseFloat(memorize3Points);

                    memorize1Class = this.studentMemorizeData(student, 1).myClass;
                    memorize2Class = this.studentMemorizeData(student, 2).myClass;
                    memorize3Class = this.studentMemorizeData(student, 3).myClass;

                    finalPoints = totalBehaviors + totalMemorize;

                }
                data.push({
                    st_no: student.st_no,
                    stFullName4: student.stFullName4,
                    stFullName3: student.stFullName3,
                    FatherMobileNo: student.FatherMobileNo,
                    dailyId: dailyId || null,
                    dailyHDate: dailyHDate || null,
                    dailyStatus: dailyStatus || null,
                    goodBehaviorsPoints: goodBehaviorsPoints ? parseFloat(goodBehaviorsPoints.toFixed(2)) : 0,
                    badBehaviorsPoints: badBehaviorsPoints ? parseFloat(badBehaviorsPoints.toFixed(2)) : 0,

                    totalBehaviors: totalBehaviors ? parseFloat(totalBehaviors.toFixed(2)) : 0,

                    memorize1Points: memorize1Points ? parseFloat(memorize1Points.toFixed(2)) : 0,
                    memorize2Points: memorize2Points ? parseFloat(memorize2Points.toFixed(2)) : 0,
                    memorize3Points: memorize3Points ? parseFloat(memorize3Points.toFixed(2)) : 0,

                    totalMemorize: totalMemorize ? parseFloat(totalMemorize.toFixed(2)) : 0,

                    memorize1Class: memorize1Class || 'default text-muted',
                    memorize2Class: memorize2Class || 'default text-muted',
                    memorize3Class: memorize3Class || 'default text-muted',

                    finalPoints: finalPoints ? parseFloat(finalPoints.toFixed(2)) : 0

                });
            }.bind(this));

            return data;
        }
    },

    methods: {
        degree: function (myClass) {
            switch (true) {
                case (myClass == 'success'):
                    return 'ممتاز';
                case (myClass == 'info'):
                    return 'جيد جدا';
                case (myClass == 'warning'):
                    return 'جيد';
                case (myClass == 'danger'):
                    return 'لم يحفظ';
            }
        },

        getDataFromDB: function () {
            this.summaries.splice(0);
            //console.log(this.allJson.SelectedDayDaily);
            this.allJson.SelectedDayDaily = true;
            //console.log(this.allJson.SelectedDayDaily);
            var rowDate = date_to_no(this.allJson.selectedDate);
            if (!rowDate) return false;
            this.$http.get('daily/allJson/' + rowDate + '/' + halakah.Hname, function (data) {
                this.allJson = data;
                //console.log(this.allJson.SelectedDayDaily);
            }.bind(this));
            setTimeout(reloadMaterializeDOM(), 2000);
        },

        extractSelectedMemorizeToArray: function (memorizeDate, memorizeTypeID, student) {
            var memorize = {
                id: null, daily_id: null, method_id: null,
                start_sora: null, start_aya: null, end_sora: null, end_aya: null,
                errors_count: null, hesitations_count: null,
                points: null, notes: null, is_not_memorized: null, memorize_type: null
            };
            var selectedDailyData = this.singleDailyData(student, memorizeDate);
            if (!selectedDailyData.memorize) return memorize;
            selectedDailyData.memorize.forEach(function (st_memorize) {
                var methods = this.singleMethodData(st_memorize.method_id);
                if (methods.memorize_type) {
                    if (memorizeTypeID == methods.memorize_type.id) {
                        memorize = st_memorize;
                        memorize.daily_id = selectedDailyData.id;
                        memorize.memorize_type = memorizeTypeID;
                    }
                }
            }.bind(this));
            return memorize;
        },

        findStudentById: function (studentID) {
            var student = {};
            this.allJson.students.forEach(function (st) {
                if (st.st_no == studentID) {
                    student = st;
                    return false;
                }
            });
            return student;
        },

        openMemorizeForm: function (memorizeTypeID, studentID) {
            var student = this.findStudentById(studentID);
            this.CurrentMemorizeTypeID = memorizeTypeID;
            //this.CurrentStudentID = studentID;
            this.selectedStudentInfo = {stFullName4: student.stFullName4, stFullName3: student.stFullName3, st_no: student.st_no};
            this.newMemorize = {};
            this.previousMemorize = {};
            this.newMemorize = this.extractSelectedMemorizeToArray(this.allJson.selectedDate, memorizeTypeID, student);
            student.daily.forEach(function (daily) {
                //console.info(JSON.stringify(daily, null, "  "));
                if (date_to_no(this.allJson.selectedDate) != daily.h_date) {
                    daily.memorize.forEach(function (memorize) {
                        if (memorizeTypeID == memorize.method_id) {
                            this.allJson.previousDate = rawToFormattedDate(daily.h_date);
                        }
                    }.bind(this));
                } else if (date_to_no(this.allJson.selectedDate) == daily.h_date) {
                    this.CurrentDailyId = daily.id;
                }
            }.bind(this));


            if (this.allJson.previousDate) {
                this.previousMemorize = this.extractSelectedMemorizeToArray(this.allJson.previousDate, memorizeTypeID, student);
            }
            if (!this.previousMemorize.id) {
                this.getPreviousMemorize(date_to_no(this.allJson.selectedDate), memorizeTypeID, student.st_no)
            } else {
                this.prepareNewDayMemorization();
            }

            setTimeout(reloadMaterializeDOM, 1000);
            $('#modal1').openModal();

        },

        prepareNewDayMemorization: function () {
//إذا كان يوم جديد فيتم تجهيز بيانات اليوم كبداية التسميع
            if (!this.newMemorize.id && this.previousMemorize.id) {
                this.newMemorize.daily_id = this.CurrentDailyId;
                if (!this.previousMemorize.is_not_memorized) {
                    //console.log(this.previousMemorize.is_not_memorized);
                    $last_aya = this.previousMemorize.end_aya >= this.quran[this.previousMemorize.end_sora - 1].a;
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
            //console.info(JSON.stringify(this.previousMemorize, null, "  "));
        },

        getPreviousMemorize: function (h_date, memorizeTypeID, studentID) {
            this.$http.get('memorize/getMemorizeData/' + h_date + '/' + memorizeTypeID + '/' + studentID, function (data) {
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

        singleMethodData: function (method_id) {
            var selectedMethod = '';
            this.allJson.methods.forEach(function (method) {
                if (method_id == method.id) {
                    selectedMethod = method;
                    return false;
                }
            });
            return selectedMethod;
        },

        singleMemorizeData: function (memorizeTypeID) {
            var selectedMemorize = '';
            this.allJson.memorizeTypes.forEach(function (memorize) {
                if (memorizeTypeID == memorize.id) {
                    selectedMemorize = memorize;
                    return false;
                }
            });
            return selectedMemorize;
        },

        singleBehaviorData: function (behavior_id) {
            var behaviors = '';
            this.allJson.allBehaviors.forEach(function (behavior) {
                if (behavior_id == behavior.id) {
                    behaviors = behavior;
                    return false;
                }
            });
            return behaviors;
        },

        pointClass: function (st_memorize) {
            var methods = this.singleMethodData(st_memorize.method_id);

            var a_point = methods.memorize_type.a_point;
            var b_point = (a_point / 3) * 2;
            //var c_point = (a_point / 3);

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
                    daily.index = index;
                    selectedDaily = daily;
                    return false;
                }
            });
            return selectedDaily;
        },

        studentBehaviorsPoints: function (student, behaviorTypeID) {
            var selectedDailyIndex = this.singleDailyData(student, this.allJson.selectedDate);
            var totalBehaviorsPoints = 0;
            if (!selectedDailyIndex.behavior) return false;

            selectedDailyIndex.behavior.forEach(function (behavior) {
                var singleBehavior = this.singleBehaviorData(behavior.behavior_id);
                if ((behaviorTypeID) == singleBehavior.bahavior_type) {
                    totalBehaviorsPoints += parseFloat(behavior.points);
                }
            }.bind(this));
            if (totalBehaviorsPoints) return totalBehaviorsPoints;

            return false;
        },

        studentMemorizeData: function (student, memorizeTypeID) {
            var memorize = {};
            var selectedDailyData = this.singleDailyData(student, this.allJson.selectedDate);
            if (selectedDailyData.memorize) {
                selectedDailyData.memorize.forEach(function (st_memorize) {
                    var singleMethod = this.singleMethodData(st_memorize.method_id);
                    if (memorizeTypeID == singleMethod.memorize_type_id) {
                        st_memorize.myClass = this.pointClass(st_memorize);
                        memorize = st_memorize;
                        return false;
                    }
                }.bind(this));
            }
            if (!memorize.myClass) memorize.myClass = 'default text-muted';
            if (!memorize.points) memorize.points = 0;
            return memorize;

        },

        changeLocalMemorize: function (typeOfChange) {
            //typeOfChange  'update','store','destroy'
            this.allJson.students.forEach(function (student) {
                if (student.st_no == this.selectedStudentInfo.st_no) {
                    student.daily.forEach(function (daily) {
                        if (daily.id == this.newMemorize.daily_id) {

                            if (typeOfChange == 'store') {
                                daily.memorize.push(this.newMemorize);

                            } else if (typeOfChange == 'update') {
                                for (var i2 = 0; i2 < daily.memorize.length; i2++) {
                                    if (daily.memorize[i2].id == this.newMemorize.id) {
                                        daily.memorize.splice(i2, 1, this.newMemorize);
                                    }
                                }

                            } else if (typeOfChange == 'destroy') {
                                for (var i3 = 0; i3 < daily.memorize.length; i3++) {
                                    if (daily.memorize[i3].id == this.newMemorize.id) {
                                        daily.memorize.splice(i3, 1);
                                    }
                                }
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

        makeAjaxRequest: function ($url, $requestData) {
            this.ajaxRespondData = null;
            this.$http.post($url, $requestData,
                function (data) {
                    reactToAjaxSuccess(data);
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                })
        },

        prepareNewMemorizeBeforeSaving: function () {
            this.newMemorize.is_not_memorized = this.newMemorize.is_not_memorized ? this.newMemorize.is_not_memorized : 0;
            this.newMemorize.errors_count = this.newMemorize.errors_count ? this.newMemorize.errors_count : 0;
            this.newMemorize.hesitations_count = this.newMemorize.hesitations_count ? this.newMemorize.hesitations_count : 0;
        },

        storeMemorize: function () {
            this.prepareNewMemorizeBeforeSaving();
            if (this.newMemorize.id) {
                //Update memorization
                this.newMemorize.points = 5 - this.newMemorize.errors_count;
                this.$http.put('memorize/update/', this.newMemorize,
                    function (data) {
                        reactToAjaxSuccess(data);
                        this.changeLocalMemorize('update');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            } else {
                //create a new memorization
                this.newMemorize.daily_id = this.CurrentDailyId;
                this.newMemorize.method_id = this.CurrentMemorizeTypeID;
                this.newMemorize.points = 5 - this.newMemorize.errors_count;
                this.$http.post('memorize/store/', this.newMemorize,
                    function (data) {
                        reactToAjaxSuccess(data);
                        this.newMemorize.id = data.data.id;
                        this.changeLocalMemorize('store');
                    }.bind(this))
                    .error(function (data, status, request) {
                        reactToAjaxError(data, status, request);
                    });
            }
            //console.info(JSON.stringify(this.newMemorize, null, "  "));
        },

        destroyMemorize: function () {
            this.$http.delete('memorize/destroy/' + this.newMemorize.id, null,
                function (data) {
                    reactToAjaxSuccess(data);
                    this.changeLocalMemorize('destroy');
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
            //this.makeAjaxRequest('memorize/destroy/' + this.newMemorize.id, null);
        },

        prepareNewDailyForHalakah: function () {
            //this.makeAjaxRequest('daily/prepareForHalakah/', {'h_date': date_to_no(this.allJson.selectedDate), 'StHalaqah': halakah.Hname});
            this.$http.post('daily/prepareForHalakah/', {'h_date': date_to_no(this.allJson.selectedDate), 'StHalaqah': halakah.Hname},
                function (data) {
                    reactToAjaxSuccess(data);
                    this.getDataFromDB();
                }.bind(this))
                .error(function (data, status, request) {
                    reactToAjaxError(data, status, request);
                });
        },

        randomPhrase: function () {
            return randomPhrase[Math.floor((Math.random() * randomPhrase.length-1) + 1)];
        }


        //Filters
    },

    filters: {
        multiFilter: function (summaries) {
            return summaries.filter(function (summaries) {
                switch (true) {
                    case (this.searchType === 'name'):
                        if (!this.search) return summaries;
                        return summaries.stFullName4.search(this.search) >= 0;
                    case (this.searchType === 'points'):
                        if (!this.search) return summaries;
                        return summaries.finalPoints >= this.search;
                    case (this.searchType === 'degree'):
                        if (!this.degreeType) return summaries;
                        return summaries.memorize1Class.search(this.degreeType) >= 0
                            || summaries.memorize2Class.search(this.degreeType) >= 0
                            || summaries.memorize3Class.search(this.degreeType) >= 0;
                }
            }.bind(this));
        }
    }
});