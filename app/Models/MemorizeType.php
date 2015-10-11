<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MemorizeType extends Model
{
    protected $table = 'st_memorize_types';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function methods()
    {
        return $this->hasMany('App\Models\Method','id','memorize_type_id');
    }
}
