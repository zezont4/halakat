Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');
Vue.http.options.root = '';
Vue.config.debug = true;
Vue.config.strict = true;

var $vue_data = {
    show_no_result_found_msg: false,
    students: [],
    daily: [],
    daily_memorize: [],
    daily_behavior: [],
    halakah: [],
    halakah_type: [],
    minimum_memorize: [],
    halakah_id: 20,
    teacher: [],
    school: [],
    memorize_types: [],
    behavior_types: [],
    selected_student_behaviors: [],
    new_daily_behavior: {},
    old_daily_behavior: {},
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
        {value: 'mark', text: 'بحث بالتقدير'}
    ],
    sort_types: [
        {value: 'st_full_name_4', text: 'ترتيب حسب إسم الطالب'},
        {value: 'final_points', text: 'ترتيب حسب مجموع النقاط'}
    ],
    sort_type: 'st_full_name_4',
    sort_order: 1,
    mark_types: [
        {value: '', text: 'الجميع'},
        {value: 'success', text: 'ممتاز'},
        {value: 'info', text: 'جيد جدا'},
        {value: 'warning', text: 'جيد'},
        {value: 'danger', text: 'لم يحفظ'},
        {value: 'default', text: 'لم يسمِّع'}
    ],
    mark_type: null,
    sora_1_ayat: null,
    sora_1_ayat_array: [],
    sora_2_ayat: null,
    sora_2_ayat_array: [],
    errors_max_count: [],
    points_max_count: [],
    quran_id_and_name: [],
    quran_id_and_ayat: [],
    check_all: false,
    quran: quran,
    /*quran_char_count: quran_char_count,*/
    random_phrases: random_phrases,
    ajax_errors: {},
    msg_ok: false,
    msg_title: null,
    msg_body: null
};