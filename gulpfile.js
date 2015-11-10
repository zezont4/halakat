var elixir = require('laravel-elixir');

elixir(function (mix) {
   /* mix.sass([
            "materialize.scss"
        ], 'resources/assets/css/materialize.css'
    );*/

    mix.styles([
            "materialize.css",
            "materialize-rtl.css",
            //"Material_Icons.css",
            "droidarabicnaskh.css",
            "ge_ss_two_light.css",
            "zezo_date.css",
            "style.css"
        ], 'public/css/main.css'
    );


    mix.scripts([
            "jquery.min.js",

            "materialize/jquery.easing.1.3.js",
            "materialize/animation.js",
            "materialize/velocity.min.js",

            "materialize/hammer.min.js",
            "materialize/jquery.hammer.js",

            "materialize/global.js",
            //"materialize/prism.js",
            "materialize/buttons.js",
            "materialize/cards.js",
            //"materialize/character_counter.js",
            //"materialize/chips.js",
            //"materialize/collapsible.js",
            "materialize/dropdown.js",
            "materialize/forms.js",
            "materialize/leanModal.js",
            //"materialize/materialbox.js",
            //"materialize/parallax.js",
            //"materialize/pushpin.js",
            //"materialize/scrollFire.js",
            //"materialize/scrollspy.js",
            //"materialize/sideNav.js",
            //"materialize/slider.js",
            //"materialize/tabs.js",
            "materialize/toasts.js",
            "materialize/tooltip.js",
            //"materialize/transitions.js",
            "materialize/waves.js",
            //"materialize/date_picker/picker.js",
            //"materialize/date_picker/picker.date.js",

            "js.js",
            "zezo_1_get_selected_year.js",
            "zezo_2_date_functions.js",
            "zezo_3_h_calender.js",
            "quran.js",
            "underscore-min.js",
            "vue.js",
            "vue-resource.min.js",
            "vue_data.js",
            "vue_methods.js",
            "daily.js"
        ], 'public/js/main.js'
    );

   /* mix.scripts([
            "materialize/jquery.easing.1.3.js",
            "materialize/animation.js",
            "materialize/velocity.min.js",

            "materialize/hammer.min.js",
            "materialize/jquery.hammer.js",

            "materialize/global.js",
            //"materialize/prism.js",
            "materialize/buttons.js",
            "materialize/cards.js",
            //"materialize/character_counter.js",
            //"materialize/chips.js",
            //"materialize/collapsible.js",
            "materialize/dropdown.js",
            "materialize/forms.js",
            "materialize/leanModal.js",
            //"materialize/materialbox.js",
            //"materialize/parallax.js",
            //"materialize/pushpin.js",
            //"materialize/scrollFire.js",
            //"materialize/scrollspy.js",
            //"materialize/sideNav.js",
            //"materialize/slider.js",
            //"materialize/tabs.js",
            "materialize/toasts.js",
            "materialize/tooltip.js",
            //"materialize/transitions.js",
            "materialize/waves.js"
            //"materialize/date_picker/picker.js",
            //"materialize/date_picker/picker.date.js",
        ], 'public/js/materialize.js'
    );

    mix.scripts([
        "quran.js"
        ], 'public/js/quran.js'
    );*/
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
//npm rebuild node-sass