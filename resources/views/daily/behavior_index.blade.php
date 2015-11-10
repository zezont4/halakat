<div v-cloak id="modal_behavior_index" class="modal">
    <div class="modal-content">
        <h5 class="title-font mid-size-font center-align">@{{ selected_student_info.st_full_name_3 }} [ سلوك ومواظبة ]</h5>

        {{--<div class="divider"></div>--}}

        <table v-if="studentTotalBehaviors(current_daily_id)">
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
            <tr v-for="student_behavior in daily_behavior | filterBy current_daily_id in 'daily_id'"
                :class="findBehaviorType(student_behavior.behavior_type_id).is_positive ? 'green-text text-lighten-1' : 'red-text text-lighten-1'">
                <td>@{{ findBehaviorType(student_behavior.behavior_type_id).name }}</td>
                <td>@{{ student_behavior.points }}</td>
                <td>@{{ student_behavior.notes }}</td>
                <td><a href="#" @click="openBehaviorStoreModal(student_behavior.id)">تعديل</a></td>
                <td><a href="#" @click="destroyBehavior(student_behavior.id)">حذف</a></td>
            </tr>
            <tr v-if="studentTotalBehaviors(current_daily_id) > 1">
                <td class="title-font">مجموع النقاط</td>
                <td :class="total_behavior_points_for_student < 0 ? 'red-text  text-lighten-1' : ''">
                    @{{ total_behavior_points_for_student }}
                </td>
            </tr>

            </tbody>
        </table>

        <div v-if="!studentTotalBehaviors(current_daily_id)" v-cloak class="section center-align">
            <i class="material-icons medium grey-text text-lighten-1">chrome_reader_mode</i>
            <h4 class="medium grey-text text-lighten-1 title-font">لم يُسجل أي سلوك</h4>
        </div>

        <div class="divider"></div>
        <div>
            <div class="section center-align">
                <a @click="openBehaviorStoreModal()" class="btn green lighten-1 waves-effect"><h6>تسجيل سلوك جديد</h6></a>
            </div>
        </div>

        {{--<pre style="direction: ltr">--}}
{{--                    @{{ students | json 4 }}--}}
        {{--</pre>--}}

    </div>
</div>