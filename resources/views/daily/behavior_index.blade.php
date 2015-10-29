<div v-cloak id="modal_behavior_index" class="modal">
    <div class="modal-content">
        <h5 class="title-font mid-size-font center-align">@{{ selected_student_info.stFullName3 }} [ سلوك ومواظبة ]</h5>

        {{--<div class="divider"></div>--}}

        <table v-if="selected_student_behaviors.length">
            <thead>
            <tr>
                <th>السلوك</th>
                <th>النقاط</th>
                <th>ملاحظات</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="student_behavior in selected_student_behaviors"
                :class="findBehavior(student_behavior.behavior_id).behavior_type ? 'green-text text-lighten-1' : 'red-text text-lighten-1'">
                <td>@{{ findBehavior(student_behavior.behavior_id).name }}</td>
                <td>@{{ student_behavior.points }}</td>
                <td>@{{ student_behavior.notes }}</td>
                <td><a href="#" v-on:click="openBehaviorStoreModal(student_behavior.id)">تعديل</a></td>
                <td><a href="#" v-on:click="destroyBehavior(student_behavior.id)">حذف</a></td>
            </tr>
            <tr v-if="selected_student_behaviors.length > 1">
                <td colspan="2" class="title-font">مجموع النقاط</td>
                <td :class="selected_student_info.totalBehaviors < 0 ? 'red-text  text-lighten-1' : ''">@{{ selected_student_info.totalBehaviors }}</td>
            </tr>

            </tbody>
        </table>

        <div v-if="!selected_student_behaviors.length" v-cloak class="section center-align">
            <i class="material-icons medium grey-text text-lighten-1">chrome_reader_mode</i>
            <h4 class="medium grey-text text-lighten-1 title-font">لم يُسجل أي سلوك</h4>
        </div>

        <div class="divider"></div>
        <div>
            <div class="section center-align">
                <a v-on:click="openBehaviorStoreModal()" class="btn green lighten-1 waves-effect"><h6>تسجيل سلوك جديد</h6></a>
            </div>
        </div>

        {{--<pre style="direction: ltr">--}}
{{--                    @{{ students | json 4 }}--}}
        {{--</pre>--}}

    </div>
</div>