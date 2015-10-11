<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Method extends Model
{
    protected $table = 'st_methods_opt';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function memorizeType()
    {
        return $this->belongsTo('App\Models\MemorizeType','memorize_type_id','id');
    }

    public function memorize()
    {
        return $this->hasMany('App\Models\Memorize','id','method_id');
    }
}
