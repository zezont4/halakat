<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DailyMemorize extends Model
{

    public $timestamps = false;
    protected $table = 'st_daily_memorize';
    protected $fillable = ['daily_id', 'memorize_type_id', 'start_sora', 'start_aya', 'end_sora', 'end_aya', 'errors_count', 'hesitations_count', 'points', 'notes', 'is_not_memorized'];

    protected $casts = [
        'id'                => 'integer',
        'daily_id'          => 'integer',
        'memorize_type_id'  => 'integer',
        'start_sora'        => 'integer',
        'start_aya'         => 'integer',
        'end_sora'          => 'integer',
        'end_aya'           => 'integer',
        'errors_count'      => 'integer',
        'hesitations_count' => 'integer',
        'points'            => 'float',
        'notes'             => 'string',
        'is_not_memorized'  => 'integer',
    ];

//	protected $guarded = ['id'];

    public function daily()
    {
        return $this->belongsTo('App\Models\Daily', 'daily_id', 'id');
    }

    public function method()
    {
        return $this->belongsTo('App\Models\Method', 'memorize_type_id', 'id');
    }


//    public function setErrorsCountAttribute($value)
//    {
//        if (!$value) {
//            return $this->attributes['errors_count'] = 0;
//        }
//    }
//
//    public function setIsNotMemorizedAttribute($value)
//    {
//        if (!$value) {
//            return $this->attributes['is_not_memorized'] = 0;
//        }
//        $this->attributes['is_not_memorized'] = 1;
//    }
//
//    public function setHesitationsCountAttribute($value)
//    {
//        if (!$value) {
//            return $this->attributes['hesitations_count'] = 0;
//        }
//    }

//    public function getPointClassAttribAttribute()
//    {

//        $pointClass = '';
//        $st_points = $this->attributes['points'];
//        $st_memorize_type = $this->attributes['memorize_type_id'];
//
//        $memorize_types = MemorizeType::findOrFail($st_memorize_type);
//
//        $a_point = $memorize_types->a_point;
//        $b_point = $memorize_types->b_point;
//        $c_point = $memorize_types->c_point;
//
//        if ($this->attributes['is_memorized'] == 1) {
//            if ($st_points >= $a_point) {
//                $pointClass = 'success';
//            } elseif ($st_points >= $b_point && $st_points < $a_point) {
//                $pointClass = 'info';
//            } elseif ($st_points >= $c_point && $st_points < $b_point) {
//                $pointClass = 'warning';
//            }
//
//            return $pointClass;
//        }
//
//        return 'danger';
//    }

}
