<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MinimumMemorize extends Model
{
    protected $table = 'st_minimum_memorize';

    protected $fillable = ['memorize_type_id', 'student_age', 'no_of_letters', 'al_naba_end_aya'];

}
