var monthsNames = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الثاني', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
//var weekDayShort = ['أح', 'اث', 'ث', 'أر', 'خ', 'ج', 'س'];
var weekDayShort = ['أحد', 'اثن', 'ثلا', 'أرب', 'خم', 'جم', 'سبت'];
//var weekDayShort = ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
var weekDayName = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
$(document).ready(function () {
    var text_id_name;
    //if you change the class name,then you should change it in the css file.
    var main_class_name = '.zezo_date.picker__box';
    var main_class_name_no_dot = 'zezo_date picker__box';
    var text_position;
    //get today hijri date and store it
    //default date is the date that was in the text field and the chosen date
    var z_default_year;
    var z_default_month;
    var z_default_day;

    var hijri_date = getRawHijriDateFromArray(getHijriDate('now'));
    var day_no = getGregorianDate(getRawHijriDateFromArray(getHijriDate('now'))).dayNo;

    var today_day = hijri_date.substring(6, 8);
    var today_month = hijri_date.substring(4, 6);
    var today_year = hijri_date.substring(0, 4);
    //make the UI only one time
    make_ui();
    //create event handlers
    load_click_events();
    //make text field read only
    var dateInput = $('input[zezo_date=true]');
    dateInput.attr('readonly', 'readonly');
    //if the user clicked another fields
    $('input:not([zezo_date=true])').focus(function () {
        z_hide();
    });
    //trigger focus event for only the zezo_date fields
    dateInput.focus(function () {
        //get the date from the text field
        if ($(this).val().length > 0) {
            //store the date that was in the text field
            var date_array = $(this).val().split('/');
            z_default_year = (date_array[0]);
            z_default_month = (date_array[1]);
            z_default_day = (date_array[2]);
        } else {
            //get today date
            z_default_day = today_day;
            z_default_month = today_month;
            z_default_year = today_year;
        }
        //store focused text field id and positoin,so they will be used later
        text_id_name = (this);
        text_position = $(this).position();

        show_cal();
    });

    function z_hide() {
        $('.picker').removeClass('picker--opened picker--focused');
        //$(main_class_name).slideUp(200);

    }

    function load_days() {
        var mm, yyyy, yyyymmdd;
        mm = ((z_default_month < 10) ? '0' + parseInt(z_default_month, 10) : z_default_month);
        yyyy = z_default_year;
        yyyymmdd = String(yyyy) + String(mm) + '01';
        var first_day_no = getGregorianDate(yyyymmdd).dayNo;
        month_days = getHijriMonthDaysCount(z_default_year, z_default_month);
        $(main_class_name + ' .d').html('');
        $(main_class_name + ' .d').removeClass('picker__day--outfocus');
        $(main_class_name + ' .d').removeAttr('id');
        var corrected_day;
        for (var i1 = 1; i1 < 43; i1++) {
            var dayBlock = $('.d_' + i1);
            corrected_day = (i1 - parseInt(first_day_no, 10));
            if (i1 > first_day_no && corrected_day <= month_days) {
                dayBlock.html(corrected_day);
                dayBlock.attr('id', 'd_' + corrected_day);
                dayBlock.addClass('picker__day--infocus');
            } else {
                dayBlock.addClass('picker__day--outfocus');
            }
            //weekends
            if ((i1 + 1) % 7 === 0 || i1 % 7 === 0) {
                dayBlock.addClass('picker__day--weekend');
            }
        }
        var first_year = z_default_year - 32;
        for (var i8 = 1; i8 < 37; i8++) {
            $(main_class_name + ' .choose_y[y_order=' + parseInt(i8, 10) + ']').html(first_year);
            $(main_class_name + ' .choose_y[y_order=' + parseInt(i8, 10) + ']').attr('year_no', first_year);
            first_year++;
        }
        $(main_class_name + ' .d').removeClass('picker__day--today');
        $(main_class_name + ' .choose_m').removeClass('today');
        $(main_class_name + ' .d').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_m').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_y').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_y').removeClass('today');

        $(main_class_name + ' .choose_y[y_order=33]').addClass('picker__day--selected');
        $(main_class_name + ' .choose_y[year_no=' + today_year + ']').addClass('today');
        if (parseInt(today_year, 10) == parseInt(z_default_year, 10)) {

            //if the selected month equal today month then >>>
            if (parseInt(today_month, 10) == parseInt(z_default_month, 10)) {
                $(main_class_name + ' #d_' + parseInt(today_day, 10)).addClass('picker__day--today');
            }

            $(main_class_name + ' .choose_m[m_no=' + parseInt(today_month, 10) + ']').addClass('today');
        }
        $(main_class_name + ' .d').removeClass('picker__day--selected');
        $(main_class_name + ' .choose_m').removeClass('picker__day--selected');
        $(main_class_name + ' #d_' + parseInt(z_default_day, 10)).addClass('picker__day--selected');
        $(main_class_name + ' .choose_m[m_no=' + parseInt(z_default_month, 10) + ']').addClass('picker__day--selected');

        $(main_class_name + ' .picker__month-display').attr('id', 'm_' + parseInt(z_default_month, 10));
        $(main_class_name + ' .picker__month-display').html(monthsNames[parseInt(z_default_month, 10) - 1]);

        $(main_class_name + ' .picker__year-display').html(z_default_year);

    }

    //create divs and numbers
    function make_ui() {
        $("body").append('' +
            '<div class="picker">' +
            '<div class="picker__holder">' +
            '<div class="picker__frame">' +
            '<div class="picker__wrap">' +
            '<div class="' + main_class_name_no_dot + '">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
        //Years ##########################
        $(main_class_name).append('<div class="picker__date-display"></div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__weekday-display">' + weekDayName[day_no] + '</div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__month-display"></div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__day-display">' + today_day + '</div>');
        $(main_class_name + " .picker__date-display").append('<div class="picker__year-display"></div>');

        $(main_class_name + " .picker__date-display").append('<span class="top_icon" id="z_previous"><i class="material-icons white-text">keyboard_arrow_right</i></span>');
        $(main_class_name + " .picker__date-display").append('<span class="top_icon" id="z_next"><i class="material-icons white-text">keyboard_arrow_left</i></span>');

        $(main_class_name + " .picker__date-display").append('<div class="year_slider"></div>');
        $(main_class_name + " .year_slider").css('display', 'none');
        $(main_class_name + " .year_slider").append('<table class="picker__table"><tbody></tbody></table>');
        for (var i7 = 1; i7 < 13; i7++) {
            $(main_class_name + " .year_slider table.picker__table tbody").append('<tr>' +
                '<td><div class="choose_y" y_order="' + i7 + '"></div></td>' +
                '<td><div class="choose_y" y_order="' + (i7 + 12) + '"></div></td>' +
                '<td><div class="choose_y" y_order="' + (i7 + 24) + '"></div></td>' +
                '</tr>');
        }
        $(main_class_name + "[y_order='1']").html('سنوات سابقة');
        //months slider
        $(main_class_name + " .picker__date-display").append('<div class="month_slider"></div>');

        $(main_class_name + " .month_slider").css('display', 'none');
        $(main_class_name + " .month_slider").append('<table class="picker__table"><tbody></tbody></table>');
        for (var i6 = 1; i6 < 7; i6++) {
            $(main_class_name + " .month_slider table.picker__table tbody").append('<tr>' +
                '<td><div class="choose_m" m_no="' + i6 + '">' + '(' + i6 + ') ' + monthsNames[i6 - 1] + '</div></td>' +
                '<td><div class="choose_m" m_no="' + (i6 + 6) + '">' + '(' + (i6 + 6) + ') ' + monthsNames[(i6 - 1) + 6] + '</div></td>' +
                '</tr>');
        }

        //Days (only the div container) ##########################
        $(main_class_name).append('<div class="picker__calendar-container"></div>');
        $('.picker__calendar-container').append('<div class="z_day_names"></div>');
        $('.picker__calendar-container').append('<table class="picker__table"></table>');
        $('.picker__calendar-container').append('<div class="z_day_no"></div>');
        $(main_class_name).append('<div class="picker__footer"></div>');

        $(main_class_name + " .picker__footer").append('<button class="btn-flat picker__close">إغلاق</button>');
        //$(main_class_name + " .picker__date-display").append('<div class="z_cancel"></div>');
        $(main_class_name + " .picker__footer").append('<button class="btn-flat picker__clear">مسح</button>');

        $(main_class_name + " .picker__footer").append('<button class="btn-flat picker__today">اليوم</button>');

        //for (var i5 = 0; i5 < 7; i5++) {
        //    $(main_class_name + " .z_day_names").append('<div class="c_day_name">' + weekDayShort[i5] + '</div>');
        //}

        //var last_row = $('.d_36').attr('id');
        //var max_row = 0
        //if (typeof (last_row) === 'undefined') {
        //    max_row = 36;
        //} else {
        //    max_row = 44;
        //}

        //var i1, j1, chunk = 7;
        //for (i1 = 0, j1 = max_row; i1 < j1; i1 += chunk) {
        //$(main_class_name + " .z_day_no").append('<div class="d d_' + j1 + '"></div>');
        //}
        var chunk = 7;
        $(main_class_name + " .picker__calendar-container .picker__table").append('<thead><tr>');
        for (var w = 0; w < chunk; w++) {
            $(main_class_name + " .picker__calendar-container .picker__table thead").append('<th class="picker__weekday" title="' + weekDayName[w] + '">' + weekDayShort[w] + '</th>');
        }
        $(main_class_name + " .picker__calendar-container .picker__table").append('</tr></thead>');

        $(main_class_name + " .picker__calendar-container .picker__table").append('<tbody>');
        for (var j1 = 1; j1 < 43; j1 += chunk) {
            //console.info(j1);
            $(main_class_name + " .picker__calendar-container .picker__table tbody").append('<tr>');
            for (var i1 = j1; i1 < j1 + chunk; i1++) {
                $(main_class_name + " .picker__calendar-container .picker__table tbody").append('<td><div class="picker__day d d_' + i1 + '"></div></td>');
                //console.log(i1);
            }
            $(main_class_name + " .picker__calendar-container .picker__table").append('</tr>');
            //$(main_class_name + " .z_day_no").append('<div class="d d_' + i1 + '"></div>');
        }
        $(main_class_name + " .picker__calendar-container .picker__table").append('</tbody>');
    }

    //show zezo calender
    function show_cal() {
        $('.picker').addClass('picker--opened picker--focused');
        $(main_class_name).css('display', 'block');
        //$(main_class_name).css('top', text_position.top + 25);
        //$(main_class_name).css('left', text_position.left);

        $(main_class_name + ' .y').val(z_default_year);
        load_days();

        $(main_class_name).slideDown(200);
        set_weekday_class(day_no);
    }

    //function set_titles() {
    //$(main_class_name + ' .d').removeAttr('title');
    //$(main_class_name + ' .m').removeAttr('title');
    //$(main_class_name + ' .y').removeAttr('title');
    //$(main_class_name + ' .today').attr('title','تاريخ اليوم');
    //$(main_class_name + ' .d .picker__day--selected').attr('title','اليوم المحدد');
    //$(main_class_name + ' .z_months .picker__day--selected').attr('title','الشهر المحدد');
    //$(main_class_name + ' .picker__calendar-container .picker__day--selected').attr('title','اليوم المحدد');
    //}
    //make_ui('.t1');
    //call this every time a calender is shown
    function load_click_events() {
        $('#z_previous').click(function () {
            change_month(-1);
        });
        $('#z_next').click(function () {
            change_month(1);
        });
        //***********************************************
        //day click function
        function day_click(day_no) {
            $(main_class_name + ' .d').removeClass('picker__day--selected');
            $(day_no).addClass('picker__day--selected');
            z_default_day = $(day_no).html();

            z_show_full_date();
        }

        //Day click
        $(main_class_name + ' .d').click(function () {
            day_click(this);
            //z_hide();
            load_days();
            if (!$(this).hasClass('picker__day--weekend')) {
            }
        });

        $('.picker').click(function () {
            z_hide();
        });
        //background picker
        $('.picker__box').click(function (event) {
            event.stopPropagation();
        });

        //$('.picker__day--weekend').click(function (event) {
        //    event.stopPropagation();
        //});
        //Day double click
        $(main_class_name + ' .d').dblclick(function () {
            day_click(this);
            z_hide();
        });
        //***********************************************

        function change_month(number) {
            $('.month_slider').slideUp(100);
            z_default_month = parseInt(z_default_month, 10) + parseInt(number, 10);
            if (z_default_month == 13) {
                z_default_month = 1;
                z_default_year++;
            }
            if (z_default_month === 0) {
                z_default_month = 12;
                z_default_year--;
            }
            $(main_class_name + ' .picker__month-display').html(monthsNames[parseInt(z_default_month, 10) - 1]);
            $(main_class_name + ' .picker__year-display').html(z_default_year);
            load_days();
            remove_selected_day_class();
            //z_show_full_date();
        }


        $(main_class_name + ' .choose_m').click(function () {
            z_default_month = parseInt($(this).attr('m_no'), 10);
            $(main_class_name + ' .picker__month-display').html(monthsNames[z_default_month]);
            $(main_class_name + ' .month_slider').slideUp(200);
            load_days();
            remove_selected_day_class();
            //z_show_full_date();
        });
        $(main_class_name + ' .choose_y').click(function () {
            z_default_year = $(this).html();
            $(main_class_name + ' .picker__year-display').html(z_default_year);
            $(main_class_name + ' .year_slider').slideUp(200);
            load_days();
            remove_selected_day_class();
            //z_show_full_date();
        });

        function remove_selected_day_class() {
            $('.picker__day').removeClass('picker__day--selected');
            $('.picker__weekday-display').removeClass('red lighten-1');
        }

        $('.picker__year-display').click(function () {
            $('.month_slider').slideUp(200);
            $('.year_slider').slideToggle(200);
        });
        $('.picker__month-display').click(function () {
            $('.year_slider').slideUp(200);
            $('.month_slider').slideToggle(200);
        });

        //***********************************************
        // OK click
        $(main_class_name + ' .picker__close').click(function () {
            //z_show_full_date();
            z_hide();
        });
        //set today date
        $(main_class_name + ' .picker__today').click(function () {
            hijri_date = getRawHijriDateFromArray(getHijriDate('now'));
            today_day = hijri_date.substring(6, 8);
            today_month = hijri_date.substring(4, 6);
            today_year = hijri_date.substring(0, 4);
            z_default_day = today_day;
            z_default_month = today_month;
            z_default_year = today_year;
            //$(text_id_name).val(today_full_date);
            z_show_full_date();
            //day_click(this);
            //z_hide();
            load_days();
            //z_hide();
        });

        // Cancel click
        $(main_class_name + ' .z_cancel').click(function () {
            //restore the previous date that was in the text field
            if (date_array.length > 0) {
                $(text_id_name).val(date_array[0] + '/' + date_array[1] + '/' + date_array[2]);
            } else {
                $(text_id_name).val('');
            }
            z_hide();
            z_show_full_date();
        });

        //Clear click
        $(main_class_name + ' .picker__clear').click(function () {
            $(text_id_name).val('');
            z_hide();
            $(text_id_name).trigger('change');
            //z_show_full_date()
        });
        //***********************************************
    }

    //fill date in text box
    function z_show_full_date() {
        //alert('sdf');
        var dd, mm, yyyy, yyyymmdd;
        dd = ((z_default_day < 10) ? '0' + parseInt(z_default_day, 10) : z_default_day);
        mm = ((z_default_month < 10) ? '0' + parseInt(z_default_month, 10) : z_default_month);
        yyyy = z_default_year;
        yyyymmdd = String(yyyy) + String(mm) + String(dd);
        $(text_id_name).val(yyyy + '/' + mm + '/' + dd);
        $(text_id_name).trigger('change');
        $('.picker__day-display').html(z_default_day);
        day_no = getGregorianDate(yyyymmdd).dayNo;
        $('.picker__weekday-display').html(weekDayName[day_no]);
        set_weekday_class(day_no);
        //set_titles();
    }

    function set_weekday_class(day_no) {
        if (day_no > 4) {
            $('.picker__weekday-display').addClass('red lighten-1');
        } else {
            $('.picker__weekday-display').removeClass('red lighten-1');
        }
    }
});