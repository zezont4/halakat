<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DailyBehavior extends Model
{
    protected $table = 'st_daily_behavior';
    public $timestamps = false;
    protected $guarded = ['id'];
    protected $casts = [
        'id'               => 'integer',
        'daily_id'         => 'integer',
        'behavior_type_id' => 'integer',
        'points'           => 'float',
        'notes'            => 'string',
    ];

    public function daily()
    {
        return $this->belongsTo('App\Models\Daily', 'daily_id', 'id');
    }

//    public function behaviorType(){
//        return $this->belongsTo('App\Models\BehaviorOpt','behavior_id','id');
//    }

//    public function getBehaviorTypeAttribAttribute()
//    {
//        $behavior_id=$this->attributes['behavior_id'];
//
//        return BehaviorOpt::findOrFail($behavior_id)->type;
//    }
}
