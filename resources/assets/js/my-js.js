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
    $('#modal1').closeModal();
}

function reactToAjaxError(data, status, request) {
    if (status == 422) {
        myAlert(firstJsonError(data), 'error');
    } else if (status == 0) {
        myAlert('عفوا.. انقطع الإتصال بالإنترنت', 'error')
    } else {
        //console.log('request : ' + request);
        //console.log('status : ' + status);
        myAlert('[ ' + status + ' ] ' + 'عفوا.. حدث خطأ', 'error')
    }
}
function firstJsonError(obj) {
    for (var a in obj) return obj[a];
}

function myAlert(msg, type, duration) {
    var msgType = type ? type : 'success';
    var typeColorArray = {
        'success': 'green lighten-1 title-font',
        'error': 'red lighten-2 title-font',
        'info': 'blue lighten-1 title-font'
    };
    duration = duration ? duration : 4000;
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

Vue.transition('stagger', {
    stagger: function (index) {
        // increase delay by 50ms for each transitioned item,
        // but limit max delay to 300ms
        return Math.min(300, index * 50)
    }
})
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.http.options.root = '';
Vue.config.debug = true;
Vue.config.strict = true;
var myData = {
    allJson: {
        students: [],
        halakah:[],
        memorizeTypes: [],
        allBehaviors: [],
        SelectedDayDaily: true,
        selectedDate: null,
        previousDate: null
    },
    CurrentMemorizeTypeID: null,
    //CurrentStudentID: null,
    CurrentDailyId: null,
    newMemorize: {},
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
    randomPhrases: randomPhrase
};

