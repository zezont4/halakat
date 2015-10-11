<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BehaviorOpt extends Model
{
    protected $table = 'st_behaviors_opt';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function behaviorOpt()
    {
        return $this->belongsTo('App\Models\Behavior', 'behavior_id', 'id');
    }
}
