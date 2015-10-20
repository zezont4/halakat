<?php

namespace App\Http\Requests;

class MemorizeRequest extends Request {

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
		$dateFormat = 'Y-m-d H:i:s';

		//$memorize_id = @$this->memorize_id_wt->id or '';

		return [
			/*'mobile_no' => 'required|unique:memorizes,mobile_no,' . $memorize_id,*/
			/*'delivered_at'  => 'required_if:is_delivered,1|date_format:{$dateFormat}|after:fixed_at',*/
			'daily_id'          => 'required',
			'method_id'         => 'required',
			'start_sora'        => 'required',
			'start_aya'         => 'required',
			'end_sora'          => 'required',
			'end_aya'           => 'required',
			'points'            => 'required',
		];
	}
}
