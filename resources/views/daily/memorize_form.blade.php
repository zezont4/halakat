<?php
$buttonLabel = 'حفظ التعديلات';
$formType = 'edit1';
function formGroupOpen($label)
{
    $sm = 3;
    $xs = 5;

    return "<div class='form-group'>
    <label class='control-label col-sm-{$sm} col-xs-{$xs}'>" . $label . "</label>
    <div class='col-sm-" . (12 - $sm) . " col-xs-" . (12 - $xs) . "'>";
}

$formGroupClose = "</div></div>";
?>
<div class="modal fade" id="memorize_model" tabindex="-1" role="dialog" aria-labelledby="memorize-modelLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div bind-class="'modal-' + modelClass()" class="modal-content modal-md">
            <form method='post' class='form-horizontal' role='form' id='demo-form' data-parsley-validate>

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="memorize-modelLabel">@{{ selectedStudentInfo.stFullName4 }} - (@{{ singleMemorizeData(CurrentMemorizeTypeID).name }})</h4>
                </div>

                <div class="modal-body">
                    <div class='col-md-12'>
                        <input type='hidden' name='form1' value='form1'>
                        <input v-model="newMemorize.daily_id" type='hidden' required>
                        <input v-model="newMemorize.memorize_type" type='hidden' required>

                        {!! formGroupOpen('من سورة') !!}
                        <select v-model="newMemorize.start_sora" number on-change="getAyatCount()" class='form-control' name='start_sora' id='start_sora'>
                            <option v-for="sora in quran" bind-value="sora.n">@{{sora.t}}</option>
                        </select>
                        {{--<select v-model="newMemorize.start_sora" on-change="getAyatCount()" options="quranIdAndName" number class='form-control' name='start_sora' id='start_sora'>--}}
                        {{--</select>--}}
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('من آية') !!}
                        <select v-model="newMemorize.start_aya" number class='form-control' name='start_aya' id='start_aya'>
                            <option v-for="aya in sora1AyatArray" bind-value="aya.value">@{{aya.text}}</option>
                        </select>
                        {{--<select v-model="newMemorize.start_aya" options="sora1AyatArray" number class='form-control' name='start_aya' id='start_aya' > </select>--}}
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('إلى سورة') !!}
                        <select v-model="newMemorize.end_sora" number on-change="getAyatCount()" class='form-control' name='end_sora' id='end_sora'>
                            <option v-for="sora in quran" bind-value="sora.n">@{{sora.t}}</option>
                        </select>
                        {{--<select v-model="newMemorize.end_sora" on-change="getAyatCount()" options="quranIdAndName" number class='form-control' name='end_sora' id='end_sora' > </select>--}}
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('إلى آية') !!}
                        <select v-model="newMemorize.end_aya" number class='form-control' name='end_aya' id='end_aya'>
                            <option v-for="aya in sora2AyatArray" bind-value="aya.value">@{{aya.text}}</option>
                        </select>
                        {{--<select v-model="newMemorize.end_aya" options="sora2AyatArray" number class='form-control' name='end_aya' id='end_aya' > </select>--}}
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('عدد الأخطاء') !!}
                        <select v-model="newMemorize.errors_count" number class='form-control' name='errors_count' id='errors_count'>
                            <option v-for="error in errorsMaxCount" bind-value="error.value">@{{error.text}}</option>
                        </select>
                        {{--<select v-model="newMemorize.errors_count" options="errorsMaxCount" number class='form-control' name='errors_count' id='errors_count'> </select>--}}
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('عدد الترددات') !!}
                        <select v-model="newMemorize.hesitations_count" number class='form-control' name='hesitations_count' id='hesitations_count'>
                            <option v-for="error in errorsMaxCount" bind-value="error.value">@{{error.text}}</option>
                        </select>
                        {{--<select v-model="newMemorize.hesitations_count" options="errorsMaxCount" number class='form-control' name='hesitations_count' id='hesitations_count'> </select>--}}
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('النقاط') !!}
                        <h4>@{{newMemorize.points}}</h4>
                        <input v-model="newMemorize.points" number type='hidden' class='form-control' name='points' id='points' placeholder='النقاط'>
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('ملاحظات') !!}
                        <input v-model="newMemorize.notes" type='text' class='form-control' name='notes' id='notes' placeholder='ملاحظات'>
                        {!! $formGroupClose !!}

                        {!! formGroupOpen('') !!}
                        <label class='checkbox-inline'>
                            <input v-model="newMemorize.is_not_memorized" type='checkbox' number name='is_not_memorized' id='is_not_memorized' value="1">&nbsp;&nbsp; لم يحفظ
                        </label>
                        {!! $formGroupClose !!}

                        <div class="row">
                            <div class="modal-footer">
                                <div class='col-xs-6 col-sm-4 pull-left'>
                                    <button type='submit' class='btn btn-primary btn-block'>حفظ</button>
                                </div>
                                <div v-if="newMemorize.id>0" class='col-xs-4 col-sm-3 pull-left'>
                                    {{--<h5><a class='text-danger' href='st_memorize_delete.php?id=@{{ newMemorize.id }}'> <i class='fa fa-trash'></i> حذف </a> </h5>--}}
                                    <h5><a class='text-danger' bind-href="'st_memorize_delete.php?id=' + newMemorize.id"> <i class='fa fa-trash'></i> حذف </a> </h5>
                                </div>
                                <div class='col-xs-1 col-sm-2'>
                                    <h4><a href="" class="pull-right" data-dismiss="modal">X</a></h4>
                                </div>
                            </div>
                            {{--<h2>new</h2>--}}
                                <pre style="direction: ltr">
                                    @{{ student }}
{{--                                    @{{ newMemorize | json 4 }}--}}
                                {{--</pre>--}}
                            {{--<h2>previous</h2>--}}
                                {{--<pre style="direction: ltr">--}}
{{--                                    @{{ previousMemorize | json 4 }}--}}
                                </pre>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</div>