<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BehaviorTypes extends Model
{
    public $timestamps = false;
    protected $table = 'st_behaviors_types';
    protected $guarded = ['id'];
    protected $casts = [
        'id'          => 'integer',
        'is_positive' => 'integer',
        'name'        => 'string',
        'points'      => 'float',
    ];
//    public function behaviorOpt()
//    {
//        return $this->belongsTo('App\Models\Behavior', 'behavior_id', 'id');
//    }
}
