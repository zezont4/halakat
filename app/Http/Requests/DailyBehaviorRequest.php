<?php

namespace App\Http\Requests;

class DailyBehaviorRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'daily_id'    => 'required|numeric',
            'behavior_id' => 'required|numeric',
            'points'      => 'required|numeric',
        ];
    }
}
