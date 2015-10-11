<script type="x-template" id="z-text-template">
    <div class="form-group@{{zGroupClass ? ' ' + zGroupClass : ''}}">
        <label for="@{{zName}}" class="col-sm-@{{ labelWidthSm}} col-xs-@{{ labelWidthXs }} control-label @{{zLabelClass ? ' ' + zLabelClass : ''}}">@{{zLabel}}</label>

        <div class="col-sm-@{{ 12 - labelWidthSm}} col-xs-@{{12 - labelWidthXs }}">
            <input
                    type="@{{zType ? zType : 'text'}}"
                    class="form-control@{{zInputClass ? ' ' + zInputClass : ''}}"
                    name="@{{zName}}"
                    id="@{{zId  ? zId : zName }}"
                    placeholder="@{{zPlaceholder ? zPlaceholder : zLabel}}"
                    v-model="zValue"
                    >
        </div>
    </div>
</script>