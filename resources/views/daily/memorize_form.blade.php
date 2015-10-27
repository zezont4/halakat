<div v-cloak id="daily_memorize_store" class="modal {{--modal-fixed-footer--}}">
    <div class="modal-content">
        <p class="title-font center-align mid-size-font">@{{ selectedStudentInfo.stFullName3 }} [ @{{ singleMemorizeData(CurrentMemorizeTypeID).name }} ]</p>


        <form>

            {{--<input type='hidden' name='form1' value='form1'>--}}
            {{--<input v-model="newMemorize.daily_id" type='hidden' required>--}}
            {{--<input v-model="newMemorize.memorize_type_id" type='hidden' required>--}}

            {{--<div class="section">--}}
            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="start_sora">من سورة</label>
                <select class="col s7 m9 l10 browser-default" v-model="newMemorize.start_sora" number
                        v-on:change="newMemorize.start_aya = !newMemorize.start_aya ? 1 : newMemorize.start_aya,
                        newMemorize.end_sora = !newMemorize.end_sora ? newMemorize.start_sora : newMemorize.end_sora,
                        getAyatCount()"
                        name='start_sora' id='start_sora'>
                    <option v-for="sora in quran" value="@{{ sora.n }}">@{{sora.t}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="start_aya">من آية</label>
                <select v-model="newMemorize.start_aya" number class="col s7 m9 l10 browser-default"
                        v-on:change="newMemorize.end_aya = !newMemorize.end_aya ? newMemorize.start_aya : newMemorize.end_aya" name='start_aya' id='start_aya'>
                    <option v-for="aya in sora1AyatArray" value="@{{ aya.value }}">@{{aya.text}}</option>
                </select>
            </div>
            {{--</div>--}}

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="end_sora">إلى سورة</label>
                <select v-model="newMemorize.end_sora" number v-on:change="getAyatCount()" class="col s7 m9 l10 browser-default" name='end_sora' id='end_sora'>
                    <option v-for="sora in quran" value="@{{ sora.n }}">@{{sora.t}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="end_aya">إلى آية</label>
                <select v-model="newMemorize.end_aya" class="col s7 m9 l10 browser-default" number name='end_aya' id='end_aya'>
                    <option v-for="aya in sora2AyatArray" value="@{{ aya.value }}">@{{aya.text}}</option>
                </select>
            </div>


            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="errors_count">عدد الأخطاء</label>
                <select v-model="newMemorize.errors_count" v-on:change="calculatePoints()" class="col s7 m9 l10 browser-default" number
                        name='errors_count' id='errors_count'>
                    <option v-for="error in errorsMaxCount" value="@{{ error.value }}">@{{error.text}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="hesitations_count">عدد الترددات</label>
                <select v-model="newMemorize.hesitations_count" v-on:change="calculatePoints()"
                        class="col s7 m9 l10 browser-default" number name='hesitations_count' id='hesitations_count'>
                    <option v-for="error in errorsMaxCount" value="@{{ error.value }}">@{{error.text}}</option>
                </select>
            </div>


            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="points">النقاط</label>
                <h6 class="col s7 m9 l10text-@{{ newMemorize.my_class }}">@{{newMemorize.points}}  ( @{{degree(newMemorize.my_class) }} )</h6>
                <input v-model="newMemorize.points" number type='hidden' name='points' id='points' placeholder='النقاط'>
            </div>

            <div class="row mini-margin-bottom">
                {{--<label class="col s5 m3 l2 left-align horizontal-label" for="points">التقدير</label>--}}

                {{--<div class="col">--}}
                    {{--<h5 class="mid-size-font text-@{{ newMemorize.my_class }}">@{{degree(newMemorize.my_class) }}</h5>--}}
                    {{--<input v-model="newMemorize.is_not_memorized" type="checkbox" name="is_not_memorized" id="is_not_memorized" disabled="disabled">--}}
                    {{--<label v-bind:class="{'red-text' : newMemorize.is_not_memorized}"  for="is_not_memorized">لم يحفظ</label>--}}
                {{--</div>--}}

                {{--<div class="row mini-margin-bottom">--}}
                    {{--<label class="col s12 m9 l10 offset-m1">--}}
                        {{--<input v-model="newMemorize.notes" type="text" name="notes" placeholder="ملاحظات">--}}
                    {{--</label>--}}
                {{--</div>--}}

                <div v-if="!newMemorize.id" class="col offset-s2 md-size-font">
                    <input v-model="newMemorize.applyToAllStudents" type="checkbox" name="applyToAllStudents" id="applyToAllStudents">
                    <label v-bind:class="{'red-text' : newMemorize.applyToAllStudents}"
                           class="" for="applyToAllStudents">تطبيق الـ [ @{{ singleMemorizeData(CurrentMemorizeTypeID).name }} ] على الجميع</label>

                </div>

            </div>
            <div class="modal-footer">
                <a href="#" v-on:click="storeMemorize()" class="btn-flat green-text lighten-2 waves-effect">حفظ</a>

                <a v-if="newMemorize.id>0" v-on:click="destroyMemorize()"
                   class='btn-flat red-text text-lighten-2 waves-effect waves-red' href="#">حذف</a>

                <a href="#" class="btn-flat waves-effect modal-action modal-close"
                   v-on:click="this.$setWithoutBind('newMemorize',this.old_memorize)">ألغاء الأمر</a>

            </div>
            {{--<pre style="direction: ltr">--}}
            {{--                @{{ newMemorize | json 4 }}--}}
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
