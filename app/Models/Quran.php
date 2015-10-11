<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quran extends Model
{
    protected $table = '0_quran';
    public $timestamps = false;
    protected $guarded = ['number'];
}
