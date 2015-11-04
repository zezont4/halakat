<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HalakahTypes extends Model
{
    protected $table = 'st_halakah_types';

    protected $fillable = ['name', 'are_studetns_equal'];
    protected $casts = [
        'id'                 => 'integer',
        'name'               => 'string',
        'are_studetns_equal' => 'integer',
    ];
}
