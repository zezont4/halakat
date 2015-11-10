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
                        return summaries.st_full_name_4.search(this.search) >= 0;
                    case (this.search_type === 'points'):
                        if (!this.search) return summaries;
                        return summaries.final_points >= this.search;
                    case (this.search_type === 'mark'):
                        if (!this.mark_type) return summaries;
                        return summaries.memorize_1_class.search(this.mark_type) >= 0
                            || summaries.memorize_2_class.search(this.mark_type) >= 0
                            || summaries.memorize_3_class.search(this.mark_type) >= 0;
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
        /*var g_date = '20150620'; console.log('Selected Gregorian date : ' + g_date); var todayHijriDateArray = zezo_get_hijri_date(g_date); this.todayHijriDate = todayHijriDateArray; console.log('Converted from g to (H array) : ' + this.days.todayHijriDate); for (var i = 0; i < 5; i++) { var rowTodayHijriDate = get_row_hijri_date(todayHijriDateArray); console.log('converted from (H array) to (H row) : ' + rowTodayHijriDate); var g_date = get_g_date(rowTodayHijriDate); console.log('convert (H row) to (G row) : ' + g_date); var day_no = get_g_date(rowTodayHijriDate, 'yes'); console.log('get day No from H date : ' + day_no); var addDays = add_days(g_date, -7); console.log('Add days to (G date) : ' + addDays); }*/
        this.getAllStudentsData();
        this.getBasicData();
        this.fillSoraAndAyahList();
    },

    computed: {
        mark_class: function () {
            return this.mark(this.new_daily_memorize.points, this.new_daily_memorize.memorize_type_id).mark_class;
        },

        mark_label: function () {
            return this.mark(this.new_daily_memorize.points, this.new_daily_memorize.memorize_type_id).mark_label;
        },

        total_behavior_points_for_student: function () {
            return this.studentBehaviorsPoints(this.selected_student_info.st_no, 1) - this.studentBehaviorsPoints(this.selected_student_info.st_no, 0);
        },

        summaries: function () {
            var data = [];
            this.students.forEach(function (student, i) {
                var student_daily = _.findWhere(this.daily, {st_id: student.st_no, h_date: date_to_no(this.selected_date)}) || {};

                var daily_id, daily_h_date, attendance_status,
                    good_behaviors_points, bad_behaviors_points, total_behaviors,
                    memorize_1_Points, memorize_2_Points, memorize_3_Points, total_memorize, total_behaviors_class,
                    memorize_1_class, memorize_2_class, memorize_3_class,
                    memorize_1_is_not_memorized, memorize_2_is_not_memorized, memorize_3_is_not_memorized,
                    final_points;
                if (student_daily.id) {

                    /*Daily*/
                    daily_id = student_daily.id;
                    daily_h_date = student_daily.h_date;
                    attendance_status = student_daily.attendance_status;

                    /*Behaviors*/
                    good_behaviors_points = parseFloat(this.studentBehaviorsPoints(student.st_no, 1)) || 0;
                    bad_behaviors_points = parseFloat(this.studentBehaviorsPoints(student.st_no, 0)) || 0;

                    total_behaviors = parseFloat(good_behaviors_points) - parseFloat(bad_behaviors_points);

                    if (parseFloat(total_behaviors) == 0) {
                        total_behaviors_class = 'default';
                    } else if (parseFloat(total_behaviors) > 0) {
                        total_behaviors_class = 'success';
                    } else if (parseFloat(total_behaviors) < 0) {
                        total_behaviors_class = 'danger';
                    }

                    this.students[i].total_behaviors = total_behaviors;

                    /*Memorize*/
                    memorize_1_Points = parseFloat(this.studentMemorizeData(student, 1).points) || 0;
                    memorize_2_Points = parseFloat(this.studentMemorizeData(student, 2).points) || 0;
                    memorize_3_Points = parseFloat(this.studentMemorizeData(student, 3).points) || 0;

                    total_memorize = parseFloat(memorize_1_Points) + parseFloat(memorize_2_Points) + parseFloat(memorize_3_Points);

                    memorize_1_class = this.studentMemorizeData(student, 1).my_class;
                    memorize_2_class = this.studentMemorizeData(student, 2).my_class;
                    memorize_3_class = this.studentMemorizeData(student, 3).my_class;

                    memorize_1_is_not_memorized = this.studentMemorizeData(student, 1).is_not_memorized;
                    memorize_2_is_not_memorized = this.studentMemorizeData(student, 2).is_not_memorized;
                    memorize_3_is_not_memorized = this.studentMemorizeData(student, 3).is_not_memorized;

                    final_points = total_behaviors + total_memorize;

                }
                var st_row = {
                    st_no: student.st_no,
                    st_full_name_4: student.st_full_name_4,
                    st_full_name_3: student.st_full_name_3,
                    father_mobile_no: student.FatherMobileNo,
                    daily_id: daily_id || null,
                    daily_h_date: daily_h_date || null,
                    attendance_status: attendance_status || null,
                    good_behaviors_points: good_behaviors_points ? parseFloat(good_behaviors_points.toFixed(2)) : 0,
                    bad_behaviors_points: bad_behaviors_points ? parseFloat(bad_behaviors_points.toFixed(2)) : 0,

                    total_behaviors: total_behaviors ? parseFloat(total_behaviors.toFixed(2)) : 0,
                    total_behaviors_class: total_behaviors_class,

                    memorize_1_Points: memorize_1_Points ? parseFloat(memorize_1_Points.toFixed(2)) : 0,
                    memorize_2_Points: memorize_2_Points ? parseFloat(memorize_2_Points.toFixed(2)) : 0,
                    memorize_3_Points: memorize_3_Points ? parseFloat(memorize_3_Points.toFixed(2)) : 0,

                    total_memorize: total_memorize ? parseFloat(total_memorize.toFixed(2)) : 0,

                    memorize_1_class: memorize_1_class || 'default',
                    memorize_2_class: memorize_2_class || 'default',
                    memorize_3_class: memorize_3_class || 'default',

                    memorize_1_is_not_memorized: memorize_1_is_not_memorized,
                    memorize_2_is_not_memorized: memorize_2_is_not_memorized,
                    memorize_3_is_not_memorized: memorize_3_is_not_memorized,

                    final_points: final_points ? parseFloat(final_points.toFixed(2)) : 0
                };

                data.push(st_row);

            }.bind(this));
            return data;
        }
    }
});