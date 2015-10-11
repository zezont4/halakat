<?php namespace App\Models;

use App\Traits\LimitNestedTable;
use Illuminate\Database\Eloquent\Model;

class Daily extends Model {

	use LimitNestedTable;
	protected $table = 'st_daily';
//    public $timestamps = false;
	protected $guarded = ['id'];


	public function students()
	{
		return $this->belongsTo('App\Models\Student', 'st_no', 'st_id');
	}

	public function memorize()
	{
		return $this->hasMany('App\Models\Memorize', 'daily_id', 'id');
	}

	public function behavior()
	{
		return $this->hasMany('App\Models\Behavior', 'daily_id', 'id');
	}

	public function scopeLastTwoDays($query, $h_date)
	{
		$query->where(function ($query) use ($h_date) {
			$query->where('h_date', $h_date)
				->orWhere('h_date', '<', $h_date);
		})->take(2);
	}
}