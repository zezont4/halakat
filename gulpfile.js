var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.styles([
            "materialize.css",
            "materialize-rtl.css",
            "Material_Icons.css",
            "droidarabicnaskh.css",
            "ge_ss_two_light.css",
            "zezo_date.css"
        ], 'public/css/main.css'
    );

    mix.scripts([
            "jquery-1.11.3.min.js",
            "materialize.min.js",
            "zezo_1_get_selected_year.js",
            "zezo_2_date_functions.js",
            "zezo_3_h_calender.js",
            "quran.js",
            "vue.js",
            "vue-resource.min.js",
            "vue_data.js",
            "vue_methods.js",
            "daily.js"
        ], 'public/js/main.js'
    );
});

//  Install (Node.js.org) if not already downloaded (laravel.com/docs/5.0/elixir.
//in windows
/* add: ";C:\Program Files\nodejs\" To the end of your "Path" variable on the "User variable" section of the Environment Variables on the System Properties.
 */
//  node -v
//  npm install --global gulp
//  gulp --production
//  npm install
//  copy exported files to (public) folder
