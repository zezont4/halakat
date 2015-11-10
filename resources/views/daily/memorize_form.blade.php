<div v-cloak id="daily_memorize_store" class="modal {{--modal-fixed-footer--}}">
    <div class="modal-content">
        <p class="title-font center-align mid-size-font">@{{ selected_student_info.st_full_name_3 }} [ @{{ findMemorizeType(current_memorize_type_id).name }} ]</p>

        <form>
            <div class="row mini-margin-bottom">

                <label class="col s5 m3 l2 left-align horizontal-label" :class="{'red-text' : ajax_errors.start_sora}" for="start_sora">من سورة</label>
                <select class="col s7 m9 l10 browser-default" v-model="new_daily_memorize.start_sora" number
                @change="new_daily_memorize.start_aya = (!new_daily_memorize.start_aya ? 1 : new_daily_memorize.start_aya),
                        new_daily_memorize.end_sora = (!new_daily_memorize.end_sora ? new_daily_memorize.start_sora : new_daily_memorize.end_sora),
                        getAyatCount(),calculatePoints()"
                        name='start_sora' id='start_sora'>
                    <option v-for="sora in quran" value="@{{ sora[0] }}">@{{sora[1]}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="start_aya">من آية</label>
                <select v-model="new_daily_memorize.start_aya" class="col s7 m9 l10 browser-default" number
                @change="new_daily_memorize.end_aya = !new_daily_memorize.end_aya ? new_daily_memorize.start_aya : new_daily_memorize.end_aya,calculatePoints()" name='start_aya' id='start_aya'>
                    <option v-for="aya in sora_1_ayat_array" value="@{{ aya.value }}">@{{aya.text}}</option>
                </select>
            </div>
            {{--</div>--}}

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="end_sora">إلى سورة</label>
                <select v-model="new_daily_memorize.end_sora" number @change="getAyatCount(),calculatePoints()" class="col s7 m9 l10 browser-default" name='end_sora' id='end_sora'>
                    <option v-for="sora in quran" value="@{{ sora[0] }}">@{{sora[1]}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="end_aya">إلى آية</label>
                <select v-model="new_daily_memorize.end_aya" class="col s7 m9 l10 browser-default"  name='end_aya' id='end_aya' number @change="calculatePoints()">
                <option v-for="aya in sora_2_ayat_array" value="@{{ aya.value }}">@{{aya.text}}</option>
                </select>
            </div>


            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="errors_count">عدد الأخطاء</label>
                <select v-model="new_daily_memorize.errors_count" number @change="calculatePoints()" class="col s7 m9 l10 browser-default"
                        name='errors_count' id='errors_count'>
                    <option v-for="error in errors_max_count" value="@{{ error.value }}">@{{error.text}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="hesitations_count">عدد الترددات</label>
                <select v-model="new_daily_memorize.hesitations_count" number @change="calculatePoints()"
                        class="col s7 m9 l10 browser-default" name='hesitations_count' id='hesitations_count'>
                    <option v-for="error in errors_max_count" value="@{{ error.value }}">@{{error.text}}</option>
                </select>
            </div>


            <div class="row mini-margin-bottom">
                <label class="col s5 m3 l2 left-align horizontal-label" for="points">النقاط</label>
                <h6 class="col s7 m9 l10 text-@{{ mark_class }}">@{{new_daily_memorize.points}} ( @{{  mark_label }} )</h6>
                <input v-model="new_daily_memorize.points" number type='hidden' name='points' id='points' placeholder='النقاط'>
            </div>

            <div class="row mini-margin-bottom">

                <div v-if="!new_daily_memorize.id" class="col offset-s2 md-size-font">
                    <input v-model="new_daily_memorize.applyToAllStudents" type="checkbox" name="applyToAllStudents" id="applyToAllStudents">
                    <label :class="{'red-text' : new_daily_memorize.applyToAllStudents}"
                           class="" for="applyToAllStudents">تطبيق الـ [ @{{ findMemorizeType(current_memorize_type_id).name }} ] على الجميع</label>

                </div>

            </div>
            <div class="modal-footer">
                <a href="#" class="btn-flat green-text lighten-2 waves-effect" null @click="storeMemorize()">حفظ</a>

                <a href="#" v-if="new_daily_memorize.id>0" null @click="destroyMemorize()"
                class='btn-flat red-text text-lighten-2 waves-effect waves-red'>حذف</a>

                <a href='#' class='btn-flat waves-effect modal-action modal-close' null
                @click='this.$setWithoutBind("new_daily_memorize",this.old_daily_memorize)'>ألغاء الأمر</a>

            </div>
            {{--<pre style="direction: ltr">--}}
            {{--                @{{ new_daily_memorize | json 4 }}--}}
            {{--</pre>--}}
        </form>

    </div>
</div>

