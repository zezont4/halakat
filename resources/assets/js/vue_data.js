function getCharCountJs(sura1, aya1, sura2, aya2) {
    var totalChars = 0;
    quran_char_count.forEach(function (sura) {
        if (sura.s >= sura1 && sura.s <= sura2) {
            if ((sura.s == sura1 && sura.a < aya1) || (sura.s == sura2 && sura.a > aya2)) {
                return;
            }
            totalChars += sura.c;
        }
    });

    return totalChars;
}

random_phrases = [
    'سبحان الله وبحمده',
    'استغفر الله',
    'وَعَسَى أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ',
    'وَعَسَى أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ',
    'وَاسْتَعِينُواْ بِالصَّبْرِ وَالصَّلاَةِ'

];

function getDataFromObject(source) {
    var tmp_arr = {};
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            tmp_arr[key] = source[key];
        }
    }
    return tmp_arr;
}

function reloadMaterializeDOM() {
    $('.material-tooltip').remove();
    $('.tooltipped').tooltip('remove');
    $('.tooltipped').tooltip({delay: 100});
    $('select').material_select();
}

function reactToAjaxSuccess(data) {
    if (typeof data == 'object') {
        myAlert(data.msg);
    } else if (typeof data == 'string') {
        myAlert(data);
    }

}

function reactToAjaxError(data, status, request, response) {
    if (status == 422) {//أخطاء التخقق من الحقول
        myAlert('[ ' + status + ' ] ' + firstJsonError(data), 'error');
        content.ajax_errors = data;
    } else if (status == 403) {// عدم وجود صلاحية ان عدم وجود Token
        myAlert('[ ' + status + ' ] ' + firstJsonError(data), 'error');
    } else if (status == 0) {
        myAlert('عفوا.. انقطع الإتصال بالإنترنت', 'error')
    } else {
        myAlert('[ ' + status + ' ] ' + 'عفوا.. حدث خطأ', 'error');
    }
    console.log('request : ' + request);
    console.log('status : ' + status);
    console.log('data : ' + data);
    console.log('data : ' + JSON.stringify(data));
}
function firstJsonError(obj) {
    for (var a in obj) return obj[a];
}

function myAlert(msg, type, duration) {
    var msgType = type ? type : 'success';
    var typeColorArray = {
        'success': 'green lighten-1',
        'error': 'red lighten-2',
        'info': 'blue lighten-1'
    };
    duration = duration ? duration : 5000;
    Materialize.toast(msg, duration, typeColorArray[msgType])
}

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.http.options.root = '';
Vue.config.debug = true;
Vue.config.strict = false;
var $vue_data = {
    show_no_result_found_msg: false,
    students: [],
    daily_memorize: [],
    daily_behavior: [],
    halakah: [],
    halakah_id: 20,
    teacher: [],
    school: [],
    memorize_types: [],
    behavior_types: [],
    selected_student_behaviors: [],
    new_daily_behavior: {},
    old_daily_behavior: {},
    //student_total_behaviors: 0,
    selected_day_daily: true,
    selected_date: null,
    previous_date: null,
    current_memorize_type_id: null,
    current_daily_id: null,
    new_daily_memorize: {},
    old_daily_memorize: {},
    previous_daily_memorize: {},
    selected_student_info: {},
    search: null,
    search_type: 'name',
    search_types: [
        {value: 'name', text: 'بحث بإسم الطالب'},
        {value: 'points', text: 'بحث بمجموع النقاط'},
        {value: 'mark', text: 'بحث بالتقدير'}],
    sort_types: [
        {value: 'stFullName4', text: 'ترتيب حسب إسم الطالب'},
        {value: 'finalPoints', text: 'ترتيب حسب مجموع النقاط'}],
    sort_type: 'stFullName4',
    sort_order: 1,
    mark_types: [{value: '', text: 'الجميع'},
        {value: 'success', text: 'ممتاز'},
        {value: 'info', text: 'جيد جدا'},
        {value: 'warning', text: 'جيد'},
        {value: 'danger', text: 'لم يحفظ'},
        {value: 'default', text: 'لم يسمِّع'}],
    mark_type: null,
    sora_1_ayat: null,
    sora_1_ayat_array: [],
    sora_2_ayat: null,
    sora_2_ayat_array: [],
    errors_max_count: [],
    quran_id_and_name: [],
    quran_id_and_ayat: [],
    check_all: false,
    quran: quran,
    quran_char_count: quran_char_count,
    random_phrases: random_phrases,
    ajax_errors: {},
    msg_ok: false,
    msg_title: null,
    msg_body: null
};