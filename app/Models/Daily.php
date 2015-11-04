<?php namespace App\Models;

//use App\Traits\LimitNestedTable;
use Illuminate\Database\Eloquent\Model;

class Daily extends Model
{

//    use LimitNestedTable;
    protected $table = 'st_daily';
//    public $timestamps = false;
    protected $guarded = ['id'];
    protected $casts = [
        'id'                => 'integer',
        'st_id'             => 'integer',
        'h_date'            => 'integer',
        'attendance_status' => 'integer',
    ];

    public function students()
    {
        return $this->belongsTo('App\Models\Student', 'st_no', 'st_id');
    }

    public function daily_memorize()
    {
        return $this->hasMany('App\Models\DailyMemorize', 'daily_id', 'id');
    }

    public function daily_behavior()
    {
        return $this->hasMany('App\Models\DailyBehavior', 'daily_id', 'id');
    }

    public function scopeLastTwoDays($query, $h_date)
    {
        $query->where(function ($query) use ($h_date) {
            $query->where('h_date', $h_date)
                ->orWhere(function ($query) use ($h_date) {
                    $query->Where('h_date', '<', $h_date)->Where('attendance_status', 1);
                });
        })->take(2);
    }
}
