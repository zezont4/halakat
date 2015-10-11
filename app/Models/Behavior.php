<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Behavior extends Model
{
    protected $table = 'st_behavior';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function daily()
    {
        return $this->belongsTo('App\Models\Daily', 'daily_id', 'id');
    }

    public function behaviorType(){
        return $this->belongsTo('App\Models\BehaviorOpt','behavior_id','id');
    }

    public function getBehaviorTypeAttribAttribute()
    {
        $behavior_id=$this->attributes['behavior_id'];

        return BehaviorOpt::findOrFail($behavior_id)->type;
    }
}
