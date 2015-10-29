<div v-cloak id="modal_behavior_store" class="modal">
    <div class="modal-content">
        <h5 class="title-font mid-size-font center-align">@{{ selected_student_info.stFullName3 }} [ سلوك ومواظبة ]</h5>

        {{--<div class="divider"></div>--}}

        {{--<div v-if="selected_student_behaviors.length">--}}
        {{--</div>--}}
        <form action="#">

            <div class="row mini-margin-bottom">
                <h5 class="col s5 m2 left-align horizontal-label">نوع السلوك</h5>

                <h5 class="col s7 m10">
                    <input v-model="new_daily_behavior.behavior_type" v-on:click="new_daily_behavior.behavior_id=''" number
                           name="behavior_type" type="radio" id="behavior1" value="1"/>
                    <label for="behavior1">إيجابي</label>

                    <input v-model="new_daily_behavior.behavior_type" v-on:click="new_daily_behavior.behavior_id=''" number
                           name="behavior_type" type="radio" id="behavior2" value="0"/>
                    <label for="behavior2">سلبي</label>
                </h5>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="behavior_id">السلوك</label>
                <select class="col s7 m10 browser-default" v-model="new_daily_behavior.behavior_id" number
                        v-on:change="new_daily_behavior.points = findBehavior(new_daily_behavior.behavior_id).points" name='behavior_id' id='behavior_id'>
                    <option value="" disabled selected>اختر السلوك</option>
                    <option v-for="behavior in behavior_types | filterBy new_daily_behavior.behavior_type in 'behavior_type'"
                            value="@{{ behavior.id }}">@{{behavior.name}}</option>
                </select>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s5 m2 left-align horizontal-label" for="points">النقاط</label>
                <h6 class="col s7 m10">@{{new_daily_behavior.points}}</h6>
                <input v-model="new_daily_behavior.points" number type='hidden' name='points' id='points' placeholder='النقاط'>
            </div>

            <div class="row mini-margin-bottom">
                <label class="col s12 m10 offset-m1">
                    <input v-model="new_daily_behavior.notes" type="text" name="notes" placeholder="ملاحظات">
                </label>
            </div>

        </form>

        <div class="divider"></div>
        <div class="modal-footer">
            <a href="#" v-on:click="storeBehavior()" class="btn-flat green-text lighten-2 waves-effect">حفظ</a>

  {{--          <a v-if="new_daily_behavior.id" v-on:click="destroyBehavior()"
               class='btn-flat red-text text-lighten-2 waves-effect waves-red' href="#">حذف</a>--}}

            <a href="#" class="btn-flat waves-effect modal-action modal-close" v-on:click="this.$setWithoutBind('new_daily_behavior',this.old_daily_behavior);">ألغاء الأمر</a>
        </div>
        {{--<div>--}}
        {{--<div class="section center-align">--}}
        {{--<a v-on:click="openBehaviorStoreModal()" class="btn green lighten-1 waves-effect"><h6>تسجيل سلوك جديد</h6></a>--}}
        {{--</div>--}}
        {{--</div>--}}

        {{--<pre style="direction: ltr">--}}
{{--            @{{ new_daily_behavior | json 4 }}--}}
        {{--</pre>--}}

    </div>
</div>