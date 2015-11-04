<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MinimumMemorize extends Model
{
    protected $table = 'st_minimum_memorize';

    protected $fillable = ['halakah_type_id', 'memorize_type_id', 'student_age', 'no_of_letters', 'al_naba_end_aya'];
    protected $casts = [
        'id'               => 'integer',
        'halakah_type_id'  => 'integer',
        'memorize_type_id' => 'integer',
        'student_age'      => 'integer',
        'no_of_letters'    => 'integer',
        'al_naba_end_aya'  => 'integer',
    ];
}
