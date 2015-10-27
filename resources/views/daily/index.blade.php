@extends('layouts.master',['pageTitle' => 'السجل اليومي'])
@section('content')
    @include('daily.dailyhelper')
    <div id="content">
        <div class="card">
            <div class="card-content">
                <div class="row">
                    <form>

                        <div class="input-field col s3 static">
                            <input id="selectedDate" type="text" value="" zezo_date="true" v-model="selectedDate">
                            <label for="selectedDate">التاريخ</label>
                        </div>

                        <div class="input-field col s3">
                            <select name='searchType' id='searchType'>
                                <option v-for="searchType in searchTypes" value="@{{ searchType.value }}">@{{searchType.text}}</option>
                            </select>
                            <label for="searchType">نوع البحث</label>
                        </div>

                        <div v-show="searchType=='degree'" class="input-field col s3">
                            <select name='degreeType' id='degreeType'>
                                <option v-for="degree in degreeTypes" value='@{{ degree.value }}'> @{{degree.text}} </option>
                            </select>
                            <label for="degreeType">التقدير</label>
                        </div>

                        <div v-show="searchType!='degree'" class="input-field col s3">
                            <input v-model="search" type='text' class='form-control' name='search' id='search' placeholder="بحث">
                            <label for="search">بحث</label>
                        </div>

                        <div class="input-field col s3">
                            <select name='sortType' id='sortType'>
                                <option v-for="sortType in sortTypes" value="@{{ sortType.value }}">@{{sortType.text}}</option>
                            </select>
                            <label for="sortType">ترتيب</label>
                        </div>

                    </form>
                </div>


                <div v-cloak v-if="SelectedDayDaily">
                    <div class="row" v-if="summaries.length">
                        <div class="remove-margin-left">

                            <div class="col hide-on-med-and-up">
                        <span>
                            <input type="checkbox" name="select-all-s" id="select-all-s" v-model="checkAll">
                            <label for="select-all-s">تحديد الكل</label>
                            {{--<span class="checkbox-label md-size-font"></span>--}}
                        </span>
                            </div>

                            <div class="col m3 hide-on-small-only">
                            <span class="md-size-font">
                                <input type="checkbox" name="select-all-m" id="select-all-m" v-model="checkAll">
                                <label for="select-all-m">اسم الطالب</label>
                                {{--<span class="checkbox-label">اسم الطالب</span>--}}
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

                    <template v-for="summary in summaries | orderBy sortType sortOrder | multiFilter"
                              transition="expand">

                        <div class="row">
                            <div class="remove-margin-left">
                                <div class="col s12 m3">
                                    <div class="remove-margin-left">
                                        <input type="checkbox" name="select-st" id="select-@{{ summary.st_no }}"
                                               checked="@{{ checkAll }}">
                                        <label for="select-@{{ summary.st_no }}">@{{ summary.stFullName3 }}</label>
                                        {{--<label for="select-@{{ summary.st_no }}" class="hide-on-small-only tooltipped" data-position="top"--}}
                                               {{--data-tooltip="@{{ summary.stFullName4 + ' \r\n ' + summary.FatherMobileNo }}">@{{ summary.stFullName3 }}</label>--}}

                                        {{--<a href="#" class="checkbox-label hide-on-small-only tooltipped " data-position="top"--}}
                                           {{--data-tooltip="@{{ summary.stFullName4 + ' \r\n ' + summary.FatherMobileNo }}"> @{{ summary.stFullName3 }} </a>--}}
                                        {{--<a class="checkbox-label hide-on-med-and-up" href="#">@{{ summary.stFullName4 }}</a>--}}
                                    </div>
                                </div>


                                {{-- التسميع --}}
                                <div class="col s12 m7">
                                    <div class="remove-margin-right-left">

                                        <div class="col s4">
                                            <div class="remove-margin-left">
                                                <a v-on:click="openMemorizeModal(1,summary.st_no)"
                                                   class="btn waves-effect btn-flat btn1 btn1-@{{ summary.memorize1Class  }} btn-block">
                                                    <span>حفظ</span>
                                                <span v-if="summary.memorize1Points > 0"
                                                      class="number"> &nbsp;&nbsp;@{{ summary.memorize1Points }}</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col s4">
                                            <a v-on:click="openMemorizeModal(2,summary.st_no)"
                                               class="btn waves-effect btn-flat btn1 btn1-@{{ summary.memorize2Class }} btn-block">
                                                <span>تثبيت</span>
                                            <span v-if="summary.memorize2Points > 0"
                                                  class="number"> &nbsp;&nbsp;@{{ summary.memorize2Points }}</span>
                                            </a>
                                        </div>

                                        <div class="col s4">
                                            <div class="remove-margin-right">
                                                <a v-on:click='openMemorizeModal(3,summary.st_no)'
                                                   class='btn waves-effect btn-flat btn1 btn1-@{{ summary.memorize3Class }} btn-block'>
                                                    <span>مراجعة</span>
                                                <span v-if='summary.memorize3Points > 0'
                                                      class="number"> &nbsp;&nbsp;@{{ summary.memorize3Points }}</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {{-- الإيجابيات--}}
                                <div class="col s12 m2">
                                    <div class="margin-top-on-small remove-margin-right-on-mid-and-up">
                                        <a v-on:click='openBehaviorIndexModal(summary.st_no)' class="btn waves-effect btn-flat no-padding white btn-block">

                                            <i class="hide-on-med-only flag flag-right @{{  (summary.goodBehaviorsPoints > 0 ? '  flag-success'  : ' flag-default')}}"></i>
                                            <i Class="badge1 badge1-right @{{ (summary.goodBehaviorsPoints > 0 ? ' green-text accent-4'  : ' grey-text lighten-2') }}">
                                                <i Class="hide-on-med-and-up">
                                                    إيجابيات @{{ summary.goodBehaviorsPoints > 0 ? ' : ' : '' }} </i>
                                                <span class="number">@{{ summary.goodBehaviorsPoints > 0 ? summary.goodBehaviorsPoints.toFixed(2) : '' }}</span>
                                            </i>

                                            <i class="hide-on-med-only flag flag-left @{{ (summary.badBehaviorsPoints > 0 ? ' flag-danger'  : ' flag-default') }}"></i>
                                            <i Class="badge1 badge1-left @{{  (summary.badBehaviorsPoints > 0 ? ' red-text lighten-1'  : ' grey-text lighten-2') }}">
                                                <i Class="hide-on-med-and-up">
                                                    سلبيات @{{ summary.badBehaviorsPoints > 0 ? ' : ' : '' }} </i>
                                                <span class="number">@{{summary.badBehaviorsPoints > 0 ? summary.badBehaviorsPoints.toFixed(2) : '' }}</span>
                                            </i>

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                </div>

                {{--<div >--}}
                {{--<div v-if="!summaries.length || !SelectedDayDaily">--}}
                <div v-cloak v-if="!SelectedDayDaily">
                    <div class="section center-align">
                        <i class="material-icons medium grey-text text-lighten-1">info_outline</i>
                        <h4 class="title-font grey-text text-lighten-1 title-font">لاتوجد بيانات لهذا اليوم</h4>
                        <a v-on:click="prepareNewDailyForHalakah()" class="btn btn-large green lighten-1 waves-effect"><p>تجهيز يوم جديد</p></a>
                    </div>
                </div>
                {{--</div>--}}
                <div v-cloak  v-if="!summaries.length && SelectedDayDaily && selectedDate" class="center center-align col s12 m10 offset-m1 l6 offset-l3">
                    <div class="row">
                        {{--<i class="material-icons medium grey-text text-lighten-1">schedule</i>--}}
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

                <div v-cloak class="section center-align" v-if="showNoResultFoundMsg && summaries.length">
                    <br>
                    <i class="material-icons medium grey-text text-lighten-1">not_interested</i>
                    <h4 class="medium grey-text text-lighten-1 title-font">لاتوجد نتائج</h4>
                </div>

                <div v-cloak class="section center-align" v-if="!selectedDate">
                    <br>
                    <i class="material-icons medium grey-text text-lighten-1">announcement</i>
                    <h4 class="medium grey-text text-lighten-1 title-font">حدد التاريخ</h4>
                </div>
            </div>
        </div>

        <pre style="direction: ltr">
        {{--@{{ showNoResultFoundMsg }}--}}
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
                <a href="#" v-on:click="close_modal()" class="waves-effect waves-red btn-flat ">إلغاء الأمر</a>
                <a href="#"  class="modal-action modal-close waves-effect waves-green btn-flat ">موافق</a>
            </div>
        </div>


    </div>
    {{--    <script src="{{asset('js/my-js.js')}}"></script>--}}
    {{--    <script src="{{asset('js/daily.js')}}"></script>--}}

@endsection

@section('footer')
    <script>
        $(document).ready(function () {

            var today_h_date = rawToFormattedDate(getRawHijriDateFromArray(getHijriDate('now')));
            $('#selectedDate').val(today_h_date);
//            $('#selectedDate').val('1437/01/10');
            content.selectedDate = $('#selectedDate').val();
            content.getAllStudentsData();

            $('input[id=selectedDate]').change(function () {
                content.getAllStudentsData();
//                $('.tooltipped').tooltip({delay: 50});
            });

            $('select[id=searchType]').on('change', function () {
                content.searchType = $(this).val();
                $('select').material_select();
            });

            $('select[id=degreeType]').on('change', function () {
                content.degreeType = $(this).val();
            });

            $('select[id=sortType]').on('change', function () {
                content.sortType = $(this).val();
                content.setSortType();
            });
        });
    </script>
@endsection