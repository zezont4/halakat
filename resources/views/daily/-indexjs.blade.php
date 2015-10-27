@extends('layouts.master',['pageTitle' => 'السجل اليومي'])
@section('content')
    @include('daily.dailyhelper')

    <div id="content">
        <div id="blur" v-cloak>
            <div class="clearfix">
                <div class="col col-xs-8 col-sm-3 static">
                    <input v-model="selectedDate" type='text'
                           class='form-control' name='selectedDate' id='selectedDate' zezo_date="true">
                </div>
                <div class="col col-xs-4 col-sm-2">
                    <select v-model="searchType" class='form-control' name='searchType' id='searchType'>
                        <option v-for="searchType in searchTypes" value="@{{ searchType.value }}">@{{searchType.text}}</option>
                    </select>
                </div>
                <div v-if="searchType=='degree'" class="col col-xs-4 col-sm-2">
                    <select v-model="degreeType" class='form-control' name='degreeType' id='degreeType'>
                        <option v-for="degree in degreeTypes" value="@{{ degree.value }}">@{{degree.text}}</option>
                    </select>
                </div>
                <div v-if="searchType!='degree'" class="col col-xs-4 col-sm-2">
                    <input v-model="search" type='text' class='form-control' name='search' id='search' placeholder="بحث">
                </div>

                <div class="col col-xs-4 col-sm-2">
                    <select v-model="sortType" @change="setSortType()" class='form-control' name='sortType' id='sortType'>
                    <option v-for="sortType in sortTypes" value="@{{ sortType.value }}">@{{sortType.text}}</option>
                    </select>
                </div>
            </div>
            <hr>
            <div v-if="summaries.length" class="hidden-xs clearfix daily-header">
                <div class="col col-sm-3 col-md-4">
                    <div class="row">
                        <table class="name">
                            <tr>
                                <td class="td2">
                                    <input type="checkbox" name="select-all" id="select-all"
                                                       v-model="checkAll"></td>
                                <td class="">اسم الطالب</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col col-sm-6 col-md-6">
                    <div class="row">عمليات التسميع اليومية</div>
                </div>
                <div class="col col-sm-3 col-md-2">
                    <div class="row">السلوك والمواظبة</div>
                </div>
            </div>


            {{--الاسم--}}
            <div class="clearfix padding-t-b-sm" v-for="summary in summaries | orderBy sortType sortOrder | multiFilter">
                <div class="col-xs-12 col-sm-3 col-md-4">
                    <div class="row">
                        <table class="name">
                            <tr>
                                <td class="td2"><input type="checkbox" name="select-st" id="select-@{{ summary.st_no }}"
                                                       checked="@{{ checkAll }}"></td>
                                <td class="td3"><a href="#">@{{ summary.stFullName4 }}</a></td>
                            </tr>
                        </table>
                    </div>
                </div>

                {{-- التسميع --}}
                <div class="col-xs-12 col-sm-6">
                    <div class="row">
                        <div class="col-xs-4">
                            <div class="padding_l_r_mini">
                                <button @click="openMemorizeModal(1,summary.st_no)" type="button"
                                class="btn btn1 btn1-@{{ summary.memorize1Class  }} btn-block"
                                data-toggle="modal" data-target="#memorize_model">
                                <span>حفظ</span>
                                <i v-if="summary.memorize1Points > 0"> &nbsp;&nbsp;@{{ summary.memorize1Points }}</i>
                                </button>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="padding_l_r_mini">
                                <button @click="openMemorizeModal(2,summary.st_no)" type="button"
                                class="btn btn1 btn1-@{{ summary.memorize2Class }} btn-block"
                                data-toggle="modal" data-target="#memorize_model">
                                تثبيت
                                <i v-if="summary.memorize2Points > 0"> &nbsp;&nbsp;@{{ summary.memorize2Points }}</i>
                                </button>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="padding_l_r_mini">
                                <button @click='openMemorizeModal(3,summary.st_no)' type='button' class='btn btn1 btn1-@{{ summary.memorize3Class }} btn-block'
                                data-toggle='modal' data-target=''#memorize_model'> مراجعة <i
                                        v-if='summary.memorize3Points > 0'> &nbsp;&nbsp;@{{ summary.memorize3Points }}</i> </button>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- الإيجابيات--}}
                <div class="col-xs-12 col-sm-3 col-md-2">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="padding_l_r_mini">
                                <button class="btn no-padding btn-default btn-block">
                                    <i class="fa fa-arrow-up flag flag-right @{{  (summary.goodBehaviorsPoints > 0 ? ' flag-success'  : ' flag-default') }}"></i>
                                    <i Class="badge1 badge1-right @{{ (summary.goodBehaviorsPoints > 0 ? ' text-success'  : ' text-muted') }}">
                                        <i Class="visible-xs-inline"> إيجابيات @{{ summary.goodBehaviorsPoints > 0 ? ' : ' : '' }} </i>
                                        @{{ summary.goodBehaviorsPoints > 0 ? summary.goodBehaviorsPoints.toFixed(2) : '' }}
                                    </i>
                                    <i class="fa fa-arrow-down flag flag-left @{{ (summary.badBehaviorsPoints > 0 ? ' flag-danger'  : ' flag-default') }}"></i>
                                    <i Class="badge1 badge1-left @{{  (summary.badBehaviorsPoints > 0 ? ' text-danger'  : ' text-muted') }}">
                                        <i Class="visible-xs-inline"> سلبيات @{{ summary.badBehaviorsPoints > 0 ? ' : ' : '' }} </i>
                                        @{{summary. badBehaviorsPoints > 0 ? summary.badBehaviorsPoints.toFixed(2) : '' }}
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{--<pre style="direction: ltr">--}}
            {{--@{{ newMemorize | json 4 }}--}}
            {{--</pre>--}}
        </div>
        @include('daily.memorize_form')
    </div>
    <script src="{{asset('js/daily.js')}}"></script>

    <script>
        $(document).ready(function () {
            $('#selectedDate').change(function () {
                content.selectedDate = $('#selectedDate').val();
                content.getDataFromDB();
            });
        });
    </script>
@endsection