var content = new Vue({

    el: '#content',

    data: $vue_data,

    methods: $vue_methods,

    filters: {
        multiFilter: function (summaries) {
            var result = summaries.filter(function (summaries) {

                if (this.search_type === 'name') {
                    if (!this.search) return summaries;
                    return summaries.st_full_name_4.search(this.search) >= 0;

                } else if (this.search_type === 'points') {
                    if (!this.search) return summaries;
                    return summaries.final_points >= this.search;

                } else if (this.search_type === 'mark') {
                    if (!this.mark_type) return summaries;
                    var exist = false;
                    for (var i = 0; i < summaries.memorize.length; i++) {
                        if (summaries.memorize[i].my_class.search(this.mark_type) >= 0) {
                            exist = true;
                        }
                    }
                    return exist;

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
        this.getAllStudentsData();
        this.getBasicData();
        this.fillSoraAndAyahList();
        this.makeManhaj(54, 10, 400, 10);
    },

    computed: {
        mark_class: function () {
            return this.mark(this.new_daily_memorize.points, this.new_daily_memorize.memorize_type_id).mark_class;
        },

        mark_label: function () {
            return this.mark(this.new_daily_memorize.points, this.new_daily_memorize.memorize_type_id).mark_label;
        },

        mark_color: function () {
            return this.mark(this.new_daily_memorize.points, this.new_daily_memorize.memorize_type_id).mark_color;
        },

        total_behavior_points_for_student: function () {
            return this.studentBehaviorsPoints(this.selected_student_info.st_no, 1) - this.studentBehaviorsPoints(this.selected_student_info.st_no, 0);
        },

        student_age: function () {
            if (this.selected_student_info.StBurthDate) {

                var now = getHijriDate('now');

                var row_birth = this.selected_student_info.StBurthDate;
                var birth_date = [parseInt(row_birth.substring(0, 4), 10), parseInt(row_birth.substring(4, 6), 10), parseInt(row_birth.substring(6, 8), 10)];

                var total_days = (((now[0] * 360) + (now[1] * 30) + now[2]) - ((birth_date[0] * 360) + (birth_date[1] * 30) + birth_date[2]));

                var years = parseInt((total_days / 360), 10);

                var mod_years = total_days % 360;

                var months = parseInt((mod_years / 30), 10);
                var days = mod_years % 30;

                return {
                    years: years || 1,
                    months: months,
                    days: days
                };
            }

            return false;

        },

        safest_required_letters_count: function () {
            if (!this.soraFieldsAreSet) return 0;
            return this.getSafestEndMemorizeAya(this.required_letters_count, this.new_daily_memorize.start_sora, this.new_daily_memorize.start_aya).char_count;
        },

        required_letters_count: function () {

            if (this.student_age) {

                var selected_student_age_array = _.sortBy(_.where(this.minimum_memorize, {
                    halakah_type_id: this.halakah_type.id,
                    memorize_type_id: this.new_daily_memorize.memorize_type_id
                }), 'student_age');

                var min_age_array = _.first(selected_student_age_array);

                var max_age_array = _.last(selected_student_age_array);

                if (this.student_age.years < min_age_array.student_age) {
                    return min_age_array.letters_count;

                } else if (this.student_age.years > max_age_array.student_age) {
                    return max_age_array.letters_count;

                } else {
                    return _.findWhere(selected_student_age_array, {
                        student_age: this.student_age.years
                    }).letters_count;

                }

            }

        },

        soraFieldsAreSet: function () {
            return (this.new_daily_memorize.start_sora > 0 && this.new_daily_memorize.end_sora > 0 && this.new_daily_memorize.start_aya > 0 && this.new_daily_memorize.end_aya > 0);
        },

        quranCharCount: function () {
            if (!this.soraFieldsAreSet) return 0;

            var totalChars = 0;
            var sora, aya, count;
            var sora1 = this.new_daily_memorize.start_sora,
                sora2 = this.new_daily_memorize.end_sora,
                aya1 = this.new_daily_memorize.start_aya,
                aya2 = this.new_daily_memorize.end_aya;

            if (sora2 <= sora1) {

                var index = this.getStartQuranIndex(sora1);

                for (var i = index; i < quran_char_count.length; i++) {
                    sora = quran_char_count[i][0];
                    aya = quran_char_count[i][1];
                    count = quran_char_count[i][2];

                    /*إذا كانت البداية والنهاية من نفس السورة*/
                    if (sora2 == sora1) {
                        if (sora1 == sora && aya >= aya1 && aya <= aya2) {
                            totalChars += parseInt(count);
                        }
                        if (sora2 == sora && aya == aya2) {
                            break;
                        }

                        /*إذا كان الترتيب من الناس إلى البقرة*/
                    } else if (sora2 < sora1) {
                        if ((sora == sora1 && aya >= aya1) || (sora2 == sora && aya <= aya2) || (sora < sora1 && sora > sora2)) {
                            totalChars += parseInt(count);
                        }

                        if (sora2 == sora && aya == aya2) {
                            break;
                        }

                    }
                }

                /*إذا كان الترتيب من البقرة إلى الناس*/
            } else {

                index = this.getStartQuranIndex(sora1);
                for (i = index; i < quran_char_count.length; i++) {
                    sora = quran_char_count[i][0];
                    aya = quran_char_count[i][1];
                    count = quran_char_count[i][2];

                    if ((sora1 == sora && aya >= aya1) || (sora2 == sora && aya <= aya2) || (sora > sora1 && sora < sora2)) {
                        totalChars += parseInt(count);
                    }
                    if (sora1 > sora) {
                        break;
                    }
                }
            }
            return totalChars;
        },

        summaries: function () {
            var data = [];
            this.students.forEach(function (student, i) {
                var student_daily = _.findWhere(this.daily, {st_id: student.st_no, h_date: date_to_no(this.selected_date)}) || {};

                var daily_id, daily_h_date, attendance_status,
                    good_behaviors_points = 0, bad_behaviors_points = 0, total_behaviors = 0,
                    total_memorize = 0, total_behaviors_class,
                    final_points = 0, memorize = [];
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
                    this.memorize_types.forEach(function (memorize_type) {
                        var m_type = {
                            id: memorize_type.id,
                            points: (this.studentMemorizeData(student, memorize_type.id).points) || 0,
                            my_class: this.studentMemorizeData(student, memorize_type.id).my_class,
                            is_not_memorized: this.studentMemorizeData(student, memorize_type.id).is_not_memorized
                        };
                        total_memorize += parseFloat(m_type.points);
                        memorize.push(m_type);
                    }.bind(this));

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

                    total_memorize: total_memorize ? parseFloat(total_memorize.toFixed(2)) : 0,
                    memorize: memorize,
                    final_points: final_points ? parseFloat(final_points.toFixed(2)) : 0
                };

                data.push(st_row);

            }.bind(this));

            if (data) return data;
        }
    }
});