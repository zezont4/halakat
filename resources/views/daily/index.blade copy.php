@extends('layouts.master',['pageTitle' => 'السجل اليومي'])
@section('content')
    <div id="content">
        <div class="card">
            <div class="card-content">
                <div class="row">
                    <form>

                        <div class="input-field col m3 s6">
                            <input id="selected_date" type="text" value="" zezo_date="true" v-model="selected_date">
                            <label for="selected_date">التاريخ</label>
                        </div>

                        <div class="input-field col m3 s6">
                            <select name='search_type' id='search_type'>
                                <option v-for="search_type in search_types" value="@{{ search_type.value }}">@{{search_type.text}}</option>
                            </select>
                            <label for="search_type">نوع البحث</label>
                        </div>

                        <div v-show="search_type=='mark'" class="input-field col m3 s6">
                            <select name='mark_type' id='mark_type'>
                                <option v-for="mark in mark_types" value='@{{ mark.value }}'> @{{mark.text}} </option>
                            </select>
                            <label for="mark_type">التقدير</label>
                        </div>

                        <div v-show="search_type!='mark'" class="input-field col m3 s6">
                            <input v-model="search" type='text' class='form-control' name='search' id='search' placeholder="بحث">
                            <label for="search">بحث</label>
                        </div>

                        <div class="input-field col s6 m3">
                            <select name='sort_type' id='sort_type'>
                                <option v-for="sort_type in sort_types" value="@{{ sort_type.value }}">@{{sort_type.text}}</option>
                            </select>
                            <label for="sort_type">ترتيب</label>
                        </div>

                    </form>
                </div>


                <div v-cloak v-if="selected_day_daily">
                    <div class="row" v-if="summaries.length">
                        <div class="remove-margin-left">

                            <div class="col hide-on-med-and-up">
                        <span>
                            <input type="checkbox" name="select-all-s" id="select-all-s" v-model="check_all">
                            <label for="select-all-s">تحديد الكل</label>
                        </span>
                            </div>

                            <div class="col m3 hide-on-small-only">
                            <span class="md-size-font">
                                <input type="checkbox" name="select-all-m" id="select-all-m" v-model="check_all">
                                <label for="select-all-m">اسم الطالب</label>
                            </span>
                            </div>

                            <div class="col m7 hide-on-small-only center">
                                <div class="remove-margin-right-left">
                                    <span class="md-size-font">عمليات التسميع اليومية</span>
                                </div>
                            </div>

                            <div class="col m2 hide-on-small-only center">
                                <div class="remove-margin-right-left">
                                    <span class="md-size-font">السلوك والمواظبة</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    {{--#####################################--}}

                    <template v-for="summary in summaries | orderBy sort_type sort_order | multiFilter">

                        <div class="row">
                            <div class="remove-margin-left">
                                <div class="col s12 m3">
                                    <div class="remove-margin-left">
                                        <input type="checkbox" name="select-st" id="select-@{{ summary.st_no }}"
                                               checked="@{{ check_all }}">
                                        <label for="select-@{{ summary.st_no }}">@{{ summary.st_full_name_3 }}</label>

                                    </div>
                                </div>


                                {{-- التسميع --}}
                                <div class="col s12 m7">
                                    <div class="remove-margin-right-left">

                                        <div class="col s4">
                                            <div class="remove-margin-left">
                                                <a @click="openMemorizeModal(1,summary.st_no)"
                                                   class="btn waves-effect btn-flat btn1 btn1-@{{ summary.memorize_1_class  }} btn-block">
                                                    <span>حفظ</span>
                                                <span v-if="summary.memorize_1_Points > 0"
                                                      class="number">@{{ summary.memorize_1_Points }}</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col s4">
                                            <a @click="openMemorizeModal(2,summary.st_no)"
                                               class="btn waves-effect btn-flat btn1 btn1-@{{ summary.memorize_2_class }} btn-block">
                                                <span>تثبيت</span>
                                            <span v-if="summary.memorize_2_Points > 0"
                                                  class="number">@{{ summary.memorize_2_Points }}</span>
                                            </a>
                                        </div>

                                        <div class="col s4">
                                            <div class="remove-margin-right">
                                                <a @click='openMemorizeModal(3,summary.st_no)'
                                                   class='btn waves-effect btn-flat btn1 btn1-@{{ summary.memorize_3_class }} btn-block'>
                                                    <span>مراجعة</span>
                                                <span v-if='summary.memorize_3_Points > 0'
                                                      class="number">@{{ summary.memorize_3_Points }}</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {{-- الإيجابيات--}}
                                <div class="col s12 m2">
                                    <div class="margin-top-on-small remove-margin-right-on-mid-and-up">
                                        <a @click='openBehaviorIndexModal(summary.st_no)' class="btn waves-effect btn-flat no-padding white btn-block">

                                            <i class="hide-on-med-only flag flag-right @{{  (summary.good_behaviors_points > 0 ? '  flag-success'  : ' flag-default')}}"></i>
                                            <i Class="badge1 badge1-right @{{ (summary.good_behaviors_points > 0 ? ' green-text accent-4'  : ' grey-text lighten-2') }}">
                                                <i Class="hide-on-med-and-up">
                                                    إيجابيات @{{ summary.good_behaviors_points > 0 ? ' : ' : '' }} </i>
                                                <span class="number">@{{ summary.good_behaviors_points > 0 ? summary.good_behaviors_points.toFixed(2) : '' }}</span>
                                            </i>

                                            <i class="hide-on-med-only flag flag-left @{{ (summary.bad_behaviors_points > 0 ? ' flag-danger'  : ' flag-default') }}"></i>
                                            <i Class="badge1 badge1-left @{{  (summary.bad_behaviors_points > 0 ? ' red-text lighten-1'  : ' grey-text lighten-2') }}">
                                                <i Class="hide-on-med-and-up">
                                                    سلبيات @{{ summary.bad_behaviors_points > 0 ? ' : ' : '' }} </i>
                                                <span class="number">@{{summary.bad_behaviors_points > 0 ? summary.bad_behaviors_points.toFixed(2) : '' }}</span>
                                            </i>

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                </div>

                <div v-cloak v-if="!selected_day_daily">
                    <div class="section center-align">
                        <i class="material-icons medium grey-text text-lighten-1">info_outline</i>
                        <h4 class="title-font grey-text text-lighten-1 title-font">لاتوجد بيانات لهذا اليوم</h4>
                        <a @click="prepareNewDailyForHalakah()" class="btn btn-large green lighten-1 waves-effect"><p>تجهيز يوم جديد</p></a>
                    </div>
                </div>
                <div v-cloak  v-if="!summaries.length && selected_day_daily && selected_date" class="center center-align col s12 m10 offset-m1 l6 offset-l3">
                    <div class="row">
                        <br>

                        <div class="preloader-wrapper small active" style=" direction: ltr;">
                            <div class="spinner-layer spinner-green-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                        <h4 class="grey-text text-lighten-1 title-font">@{{ randomPhrase() }}</h4>
                        <br>


                    </div>
                </div>

                <div v-cloak class="section center-align" v-if="show_no_result_found_msg && summaries.length">
                    <br>
                    <i class="material-icons medium grey-text text-lighten-1">not_interested</i>
                    <h4 class="medium grey-text text-lighten-1 title-font">لاتوجد نتائج</h4>
                </div>

                <div v-cloak class="section center-align" v-if="!selected_date">
                    <br>
                    <i class="material-icons medium grey-text text-lighten-1">announcement</i>
                    <h4 class="medium grey-text text-lighten-1 title-font">حدد التاريخ</h4>
                </div>
            </div>
        </div>

        <pre style="direction: ltr">
        {{--@{{ show_no_result_found_msg }}--}}
        {{--@{{ summaries | json }}--}}
        {{--@{{ students | json }}--}}
        </pre>
        @include('daily.memorize_form')
        @include('daily.behavior_index')
        @include('daily.behavior_store')

        <div id="msg_modal" class="modal">
            <div class="modal-content">
                <h5 class="blue-grey-text">@{{ msg_title }}</h5>
                <p>@{{ msg_body }}</p>
            </div>
            <div class="modal-footer">
                <a href="#" @click="close_modal()" class="waves-effect waves-red btn-flat ">إلغاء الأمر</a>
                <a href="#"  class="modal-action modal-close waves-effect waves-green btn-flat ">موافق</a>
            </div>
        </div>


    </div>

@endsection

@section('footer')
    <script>
        $(document).ready(function () {

            var today_h_date = rawToFormattedDate(getRawHijriDateFromArray(getHijriDate('now')));
            $('#selected_date').val(today_h_date);
//            $('#selected_date').val('1437/01/10');
            content.selected_date = $('#selected_date').val();
            content.getAllStudentsData();

            $('input[id=selected_date]').change(function () {
                content.getAllStudentsData();
            });

            $('select[id=search_type]').on('change', function () {
                content.search_type = $(this).val();
                $('select').material_select();
            });

            $('select[id=mark_type]').on('change', function () {
                content.mark_type = $(this).val();
            });

            $('select[id=sort_type]').on('change', function () {
                content.sort_type = $(this).val();
                content.setSortType();
            });
        });
    </script>
@endsection