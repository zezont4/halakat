<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MemorizeType extends Model
{
    public $timestamps = false;
    protected $table = 'st_memorize_types';
    protected $guarded = ['id'];
    protected $casts = [
        'id'                       => 'integer',
        'halakah_type_id'          => 'integer',
        'name'                     => 'string',
        'order'                    => 'integer',
        'is_active'                => 'integer',
        'max_point'                => 'float',
        'a_point'                  => 'float',
        'b_point'                  => 'float',
        'c_point'                  => 'float',
        'not_accepted_errors'      => 'integer',
        'not_accepted_hesitations' => 'integer',
    ];

    public function methods()
    {
        return $this->hasMany('App\Models\Method', 'id', 'memorize_type_id');
    }
}
