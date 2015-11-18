/*function quranCharCount(sura1, aya1, sura2, aya2) {
 var totalChars = 0;
 for (var i = 0; i < quran_char_count.length; i++) {

 var sora = quran_char_count[i][0];
 var aya = quran_char_count[i][1];
 var count = quran_char_count[i][2];

 if (sora > sura2) return totalChars;

 if (sora >= sura1 && sora <= sura2) {
 if ((sora >= sura1 && aya >= aya1) && (sora <= sura2 && aya <= aya2)) {
 totalChars += parseInt(count);
 }
 }
 }

 return totalChars;
 }*/

function getSoraAyaIndex(sora, aya) {
    for (var i = 0; i < quran_char_count.length; i++) {
        if (quran_char_count[i][0] == sora && quran_char_count[i][1] == aya) return i;
    }
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


/*رسم بياني*/
(function ($) {
    "use strict";
    /*You will be happier*/

    $.fn.horizBarChart = function (options) {
        var settings = $.extend({
            /*default settings*/
            selector: '.chart li',
            speed: 1000
        }, options);

        var colors = ['red', 'purple', 'indigo', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'brown']

        /*Cycle through all charts on page*/
        return this.each(function () {
            /*Start highest number variable as 0
             Nowhere to go but up!*/
            var highestNumber = 0;

            /*Set highest number and use that as 100%
             This will always make sure the graph is a decent size and all numbers are relative to each other*/
            $(this).find($(settings.selector)).each(function () {
                var num = Number($(this).attr('data-number'));
                if (num > highestNumber) {
                    highestNumber = num + (num / 20);
                }
            });

            /*Time to set the widths*/
            $(this).find($(settings.selector)).each(function () {


                var bar = $(this);
                /*get all the numbers*/
                var num = Number(bar.attr('data-number'));


                /*math to convert numbers to percentage and round to closest number (no decimal)*/
                var percentage = Math.round((num / highestNumber) * 100) + '%';

                /*get color*/
                var color = bar.attr('data-color');
                if (!color) {
                    color = colors[Math.floor(Math.random() * colors.length)];
                }
                bar.removeClass();
                bar.addClass(color + ' lighten-2');
                var previous = bar.parent().attr('class');
                if (previous == 'chart') {
                    bar.wrap('<div class="' + 'grey lighten-3"></div>');
                }

                /*Time to assign and animate the bar widths*/
                bar.animate({
                    'width': percentage
                }, settings.speed);
            });
        });

    };
    /*horizChart*/

}(jQuery));