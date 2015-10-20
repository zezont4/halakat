<div id="modal1" class="modal {{--modal-fixed-footer--}}">
    <div class="modal-content">
        <i class="title-font mid-size-font">@{{ selectedStudentInfo.stFullName3 }} [ @{{ singleMemorizeData(CurrentMemorizeTypeID).name }} ]</i>

        <div class="divider"></div>
        <form>

            <input type='hidden' name='form1' value='form1'>
            <input v-model="newMemorize.daily_id" type='hidden' required>
            <input v-model="newMemorize.memorize_type" type='hidden' required>

            {{--<div class="section">--}}
            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="start_sora">من سورة</label>
                <select class="col s7 m10 browser-default" v-model="newMemorize.start_sora" number v-on:change="getAyatCount()" name='start_sora' id='start_sora'>
                    <option v-for="sora in quran" value="@{{ sora.n }}">@{{sora.t}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="start_aya">من آية</label>
                <select v-model="newMemorize.start_aya" number class="col s7 m10 browser-default" name='start_aya' id='start_aya'>
                    <option v-for="aya in sora1AyatArray" value="@{{ aya.value }}">@{{aya.text}}</option>
                </select>
            </div>
            {{--</div>--}}

            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="end_sora">إلى سورة</label>
                <select v-model="newMemorize.end_sora" number v-on:change="getAyatCount()" class="col s7 m10 browser-default" name='end_sora' id='end_sora'>
                    <option v-for="sora in quran" value="@{{ sora.n }}">@{{sora.t}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="end_aya">إلى آية</label>
                <select v-model="newMemorize.end_aya" class="col s7 m10 browser-default" number name='end_aya' id='end_aya'>
                    <option v-for="aya in sora2AyatArray" value="@{{ aya.value }}">@{{aya.text}}</option>
                </select>
            </div>


            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="errors_count">عدد الأخطاء</label>
                <select v-model="newMemorize.errors_count" class="col s7 m10 browser-default" number name='errors_count' id='errors_count'>
                    <option v-for="error in errorsMaxCount" value="@{{ error.value }}">@{{error.text}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="hesitations_count">عدد الترددات</label>
                <select v-model="newMemorize.hesitations_count" class="col s7 m10 browser-default" number name='hesitations_count' id='hesitations_count'>
                    <option v-for="error in errorsMaxCount" value="@{{ error.value }}">@{{error.text}}</option>
                </select>
            </div>


            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="points">النقاط</label>
                <h6 class="col s7 m10">@{{newMemorize.points}}</h6>
                <input v-model="newMemorize.points" number type='hidden' name='points' id='points' placeholder='النقاط'>
            </div>

            {{--<div class="row mini-margin-bottom">--}}
            {{--<input v-model="newMemorize.notes" type='text' class="col s7 m10 browser-default" name='notes' id='notes' placeholder='ملاحظات'>--}}
            {{--<label class="col s5 m2 left-align horizontal-label" for="notes">ملاحظات</label>--}}
            {{--</div>--}}
            <div class="row mini-margin-bottom">
                <label>
                    <input v-model="newMemorize.notes" type="text" class="col s7 m10 offset-s2 offset-m2" name="notes" placeholder="ملاحظات">
                </label>
            </div>
            <div class="row mini-margin-bottom">

            </div>
            {{--<div class="row mini-margin-bottom">--}}
            <div class="modal-footer">
                {{--<div class="divider"></div>--}}
                <div class="row mini-margin-bottom">
                    <div class="col s7 m10 offset-s2 offset-m2 md-size-font">
                        <input v-model="newMemorize.is_not_memorized" type="checkbox" name="is_not_memorized" id="is_not_memorized">
                        <label class="" for="is_not_memorized">لم يحفظ</label>
                    </div>
                </div>
                <div class="row">
                    <a href="#" class="col m2 s3 modal-action modal-close right-align"><i class="material-icons small-1">close</i></a>

                    <div class="col s4 m3">
                        <a href="#" v-on:click="storeMemorize()" class="btn {{--modal-action modal-close --}}waves-effect">حفظ</a>
                    </div>
                    <h5 v-if="newMemorize.id>0" class='col s4 m3'>
                        <a v-on:click="destroyMemorize()" class='title-font red-text text-lighten-2 tooltipped' href="#" data-position="top" data-tooltip="حذف بيانات الحفظ الحالية"> <i class="material-icons">delete</i></a>
                    </h5>

                </div>
            </div>
            {{--<pre style="direction: ltr">--}}
            {{--@{{ newMemorize | json 4 }}--}}
            {{--</pre>--}}
        </form>

    </div>
</div>
{{--
<script>
    $('select[id=start_sora]').on('change', function () {
        content.newMemorize.start_sora = $(this).val();
        content.getAyatCount();
    });
</script>--}}
