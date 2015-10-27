function getCharCountJs(sura1, aya1, sura2, aya2) {
    var totalChars = 0;
    quranCharCount.forEach(function (sura) {
        if (sura.s >= sura1 && sura.s <= sura2) {
            if ((sura.s == sura1 && sura.a < aya1) || (sura.s == sura2 && sura.a > aya2)) {
                return;
            }
            totalChars += sura.c;
        }
    });

    return totalChars;
}

randomPhrase = [
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
        this.ajaxRespondData = data.data;
    } else if (typeof data == 'string') {
        myAlert(data);
    }

}

function reactToAjaxError(data, status, request, response) {
    if (status == 422) {//أخطاء التخقق من الحقول
        myAlert('[ ' + status + ' ] ' + firstJsonError(data), 'error');
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

//function makeAjaxRequest($requestType, $url, $requestData) {
//    //console.info(JSON.stringify($data, null, "  "));
//    this.$http.post($url, $requestData,
//        function (data) {
//            myAlert(data);
//        })
//        .error(function (data, status) {
//            if (status == 422) {
//                myAlert(firstJsonError(data), 'error');
//            } else {
//                myAlert('عفوا.. حدث خطأ', 'error')
//            }
//        })
//}

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.http.options.root = '';
Vue.config.debug = true;
Vue.config.strict = false;
var $vue_data = {
    showNoResultFoundMsg: false,
    //allJson: {
    students: [],
    halakah: [],
    teacher: [],
    school: [],
    memorize_types: [],
    behavior_types: [],
    selectedStudentBehaviors: [],
    selectedBehavior: [],
    new_daily_behavior: {},
    old_daily_behavior: {},
    studentTotalBehaviors: 0,
    SelectedDayDaily: true,
    selectedDate: null,
    previousDate: null,
    //},
    CurrentMemorizeTypeID: null,
    //CurrentStudentID: null,
    CurrentDailyId: null,
    newMemorize: {},
    old_memorize: {},
    previousMemorize: {},
    selectedStudentInfo: {},
    ajaxRespondData: null,
    search: null,
    searchType: 'name',
    searchTypes: [
        {value: 'name', text: 'بحث بإسم الطالب'},
        {value: 'points', text: 'بحث بمجموع النقاط'},
        {value: 'degree', text: 'بحث بالتقدير'}],
    sortTypes: [
        {value: 'stFullName4', text: 'ترتيب حسب إسم الطالب'},
        {value: 'finalPoints', text: 'ترتيب حسب مجموع النقاط'}],
    sortType: 'stFullName4',
    sortOrder: 1,
    degreeTypes: [{value: '', text: 'الجميع'},
        {value: 'success', text: 'ممتاز'},
        {value: 'info', text: 'جيد جدا'},
        {value: 'warning', text: 'جيد'},
        {value: 'danger', text: 'لم يحفظ'},
        {value: 'default', text: 'لم يسمِّع'}],
    degreeType: null,
    sora1Ayat: null,
    sora1AyatArray: [],
    sora2Ayat: null,
    sora2AyatArray: [],
    errorsMaxCount: [],
    quranIdAndName: [],
    quranIdAndAyat: [],
    checkAll: false,
    quran: quran,
    quranCharCount: quranCharCount,
    //ajaxMsg: null,
    //showAjaxMsg: false
    randomPhrases: randomPhrase,
    msg_ok: false,
    msg_title: null,
    msg_body: null
};

