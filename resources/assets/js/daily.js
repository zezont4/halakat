var content = new Vue({

    el: '#content',

    data: $vue_data,

    methods: $vue_methods,

    filters: {
        multiFilter: function (summaries) {
            var result = summaries.filter(function (summaries) {
                switch (true) {
                    case (this.search_type === 'name'):
                        if (!this.search) return summaries;
                        return summaries.stFullName4.search(this.search) >= 0;
                    case (this.search_type === 'points'):
                        if (!this.search) return summaries;
                        return summaries.finalPoints >= this.search;
                    case (this.search_type === 'mark'):
                        if (!this.mark_type) return summaries;
                        return summaries.memorize1Class.search(this.mark_type) >= 0
                            || summaries.memorize2Class.search(this.mark_type) >= 0
                            || summaries.memorize3Class.search(this.mark_type) >= 0;
                }
            }.bind(this));
            if (result.length) {
                this.show_no_result_found_msg = false;
                return result;
            }
            this.show_no_result_found_msg = true;
        }
    },
    ready: function () {
        //alert('sdf');
        /*var g_date = '20150620'; console.log('Selected Gregorian date : ' + g_date); var todayHijriDateArray = zezo_get_hijri_date(g_date); this.todayHijriDate = todayHijriDateArray; console.log('Converted from g to (H array) : ' + this.days.todayHijriDate); for (var i = 0; i < 5; i++) { var rowTodayHijriDate = get_row_hijri_date(todayHijriDateArray); console.log('converted from (H array) to (H row) : ' + rowTodayHijriDate); var g_date = get_g_date(rowTodayHijriDate); console.log('convert (H row) to (G row) : ' + g_date); var day_no = get_g_date(rowTodayHijriDate, 'yes'); console.log('get day No from H date : ' + day_no); var addDays = add_days(g_date, -7); console.log('Add days to (G date) : ' + addDays); }*/
        this.getAllStudentsData();
        this.getBasicData();
        this.fillSoraAndAyahList();
    },

    computed: {
        summaries: function () {
            var data = [];
            this.students.forEach(function (student, i) {
                //var student_daily = this.findDailyByDate(student, this.selected_date);
                var student_daily = _.findWhere(student.daily,{h_date:date_to_no(this.selected_date)})||{};
                var dailyId, dailyHDate, attendance_status,
                    goodBehaviorsPoints, badBehaviorsPoints, totalBehaviors,
                    memorize1Points, memorize2Points, memorize3Points, totalMemorize,
                    memorize1Class, memorize2Class, memorize3Class,
                    finalPoints;
                if (student_daily.id) {

                    //Daily
                    dailyId = student_daily.id;
                    dailyHDate = student_daily.h_date;
                    attendance_status = student_daily.attendance_status;

                    //Behaviors
                    goodBehaviorsPoints = parseFloat(this.studentBehaviorsPoints(student, 1)) || 0;
                    badBehaviorsPoints = parseFloat(this.studentBehaviorsPoints(student, 0)) || 0;

                    totalBehaviors = parseFloat(goodBehaviorsPoints) - parseFloat(badBehaviorsPoints);

                    this.students[i].totalBehaviors = totalBehaviors;

                    //Memorize
                    memorize1Points = parseFloat(this.studentMemorizeData(student, 1).points) || 0;
                    memorize2Points = parseFloat(this.studentMemorizeData(student, 2).points) || 0;
                    memorize3Points = parseFloat(this.studentMemorizeData(student, 3).points) || 0;

                    totalMemorize = parseFloat(memorize1Points) + parseFloat(memorize2Points) + parseFloat(memorize3Points);

                    memorize1Class = this.studentMemorizeData(student, 1).my_class;
                    memorize2Class = this.studentMemorizeData(student, 2).my_class;
                    memorize3Class = this.studentMemorizeData(student, 3).my_class;

                    finalPoints = totalBehaviors + totalMemorize;

                }
                data.push({
                    st_no: student.st_no,
                    stFullName4: student.stFullName4,
                    stFullName3: student.stFullName3,
                    FatherMobileNo: student.FatherMobileNo,
                    dailyId: dailyId || null,
                    dailyHDate: dailyHDate || null,
                    attendance_status: attendance_status || null,
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
    }
});