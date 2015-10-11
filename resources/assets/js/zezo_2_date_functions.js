//Examples:
//$('#RDate').val(getFormattedHijriDateFromArray(getHijriDate('now')));
//**************************************************//
//get formated date
function rawToFormattedDate(rawDate) {
    rawDate = String(rawDate);
    return String(rawDate.substring(0, 4) + '/' + rawDate.substring(4, 6) + '/' + rawDate.substring(6, 8));
}

function addDays(rawDate, daysCount) {
    var sourcDate = new Date(rawToFormattedDate(rawDate));
    sourcDate.setDate(sourcDate.getDate() + daysCount);
    var year = sourcDate.getFullYear();
    var month = ((parseInt(sourcDate.getMonth() + 1, 10) < 10) ? ('0' + (parseInt(sourcDate.getMonth() + 1, 10))) : (parseInt(sourcDate.getMonth(), 10) + 1));
    var day = (sourcDate.getDate() < 10) ? ('0' + sourcDate.getDate()) : sourcDate.getDate();
    var d_day_no = sourcDate.getDay();
    return [String(year), String(month), String(day), d_day_no];
}

function getGregorianDate(rawHijriDate, only_day_no) {
    var selectedYearArray = getGregorianYearArray(rawHijriDate.substr(0, 4));
    var selectedMonth = parseInt(rawHijriDate.substr(4, 2), 10);
    var selectedDays = parseInt(rawHijriDate.substr(6, 2), 10);
    var totalDays = 0;
    for (var i in selectedMonth) {
        totalDays = selectedYearArray[i + 1] == 1 ? totalDays += 30 : totalDays + 29;
    }
    dateData = addDays(selectedYearArray[0], (totalDays + selectedDays - 1));
    var dayNo = dateData[3];
    var rawDate = dateData[0] + dateData[1] + dateData[2];
    return {
        rawDate: rawDate,
        dayNo: dayNo
    };
}
//get the number of days in a hijri month
function getHijriMonthDaysCount(hijriYear, hijriMonth) {
    var selectedYear = getGregorianYearArray(hijriYear);
    return selectedYear[parseInt(hijriMonth, 10)] === 1 ? 30 : 29;
}
//##########################################
var d, g_date, d_day_no, g_date_diff;
//get row hijri date like: 14350606 from date array
function getRawHijriDateFromArray(hijri) {
    var year = hijri[0];
    var month = (hijri[1] < 10) ? ('0' + hijri[1]) : hijri[1];
    var day = (hijri[2] < 10) ? ('0' + hijri[2]) : hijri[2];
    return String(year) + String(month) + String(day);
}

//get formated hijri date like: 1435/06/06 from date array
//        function getFormattedHijriDateFromArray(hijriDateArray) {
//            var year = hijriDateArray[0];
//            var month = (hijriDateArray[1] < 10) ? ('0' + hijriDateArray[1]) : hijriDateArray[1];
//            var day = (hijriDateArray[2] < 10) ? ('0' + hijriDateArray[2]) : hijriDateArray[2];
//            return String(year) + '/' + String(month) + '/' + String(day);
//        }

//        function get_hijri_day_no(hijri_array_date) {
//            //console.log(hijri_array_date);
//            return hijri_array_date[3];
//        }

//get deffrence between to grogorian days
var _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDifferentInDays(a, b) {
    // Discard the time and time-zone information.
    a = new Date(a);
    b = new Date(b);
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
}

//after we get the wanted "selected_year",we do some calculation to get (year,month,day)
function calculate_hijri_days(hijri_array) {
    var total_h_days = 0;
    var h_year = hijri_array[1];
    var h_month = 0;
    var h_day = 0;
    for (var i = 2; i < 14; i++) {
        h_day = (g_date_diff + 1) - total_h_days;
        total_h_days = (hijri_array[i] == 1) ? total_h_days += 30 :  total_h_days += 29;
        if (total_h_days > g_date_diff) {
            h_month = i - 1;
            break;
        }
    }
    return ([h_year, h_month, h_day, d_day_no]);
}

function getHijriDate(source_g_date) {
    if (source_g_date == 'now') {
        d = new Date();
    } else {
        d = new Date(rawToFormattedDate(source_g_date));
    }
    var year = d.getFullYear();
    var month = ((parseInt(d.getMonth() + 1, 10) < 10) ? ('0' + (parseInt(d.getMonth() + 1, 10))) : (parseInt(d.getMonth(), 10) + 1));
    var day = (d.getDate() < 10) ? ('0' + d.getDate()) : d.getDate();
    d_day_no = d.getDay();
    g_date = String(year) + String(month) + String(day);
    s = getHijriYearArray(g_date);
    g_date_diff = (dateDifferentInDays(rawToFormattedDate(g_date), rawToFormattedDate(s[0])));
    return calculate_hijri_days(s);
}

function date_to_no(formattedDate) {
    if (!formattedDate || typeof (formattedDate) != 'string') {
        console.log('تأكد من أن التاريخ المرسل أنه على شكل نصي');
        return;
    }
    var re = new RegExp("/", 'g');
    return formattedDate.replace(re, '');
}