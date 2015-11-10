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
    if (status == 422) {/*أخطاء التخقق من الحقول*/
        myAlert('[ ' + status + ' ] ' + firstJsonError(data), 'error');
        content.ajax_errors = data;
    } else if (status == 403) {/* عدم وجود صلاحية ان عدم وجود Token*/
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