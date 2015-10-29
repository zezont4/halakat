@extends('layouts.master',['pageTitle' => 'السجل اليومي'])
@section('content')
    @include('daily.dailyhelper')

    <div id="content">
        <div class="hidden-xs clearfix daily-header">
            <div class="col col-sm-3 col-md-4">
                <div class="row">
                    <table class="name">
                        <tr>
                            <td class="td2"><input type="checkbox" name="select-all" id="select-all" v-model="check_all"></td>
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

        @foreach($students as $key => $student)
            <div class="clearfix padding-t-b-sm">
                {{--الاسم--}}
                <div class="col-xs-12 col-sm-3 col-md-4">
                    <div class="row">
                        <table class="name">
                            <tr>
                                {{--                        <td class="td1">{{$key+1}}</td>--}}
                                <td class="td2"><input type="checkbox" name="select-st" id="select-{{$student->st_no}}" v-attr="checked:check_all"></td>
                                <td class="td3"><a href="#">{{$student->FullName4}}</a></td>
                                {{--<td class="td4"><i class="click fa fa-info-circle fa-lg text-primary"></i></td>--}}
                            </tr>
                        </table>
                    </div>
                </div>

                {{-- التسميع --}}
                <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="row">
                        @foreach($memorize_types as $memorize_type)
                            <?php getMemorizeBlocks($student, $memorize_type, count($memorize_types));?>
                        @endforeach
                    </div>
                </div>

                {{-- الإيجابيات--}}
                <div class="col-xs-12 col-sm-3 col-md-2">
                    <div class="row">
                        <?php  getBehaviorsBlocks($student);?>
                    </div>
                </div>

            </div>
        @endforeach
    @include('daily.memorize_form')
    </div>
    {{--
        <pre style="direction: ltr">
             {{print_r($students->toArray())}}
         </pre>
         --}}
    <script>
        /*$(document).ready(function () {
         $('#select-all').click(function () {
         var st_checkbox = $('input[name=select-st]');
         var checked = $('#select-all').prop('checked');
         st_checkbox.prop('checked', checked);
         });
         });*/
    </script>

    <script src="{{asset('js/daily.js')}}"></script>
@endsection
