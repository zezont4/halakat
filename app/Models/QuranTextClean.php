<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuranTextClean extends Model
{
    protected $table = 'quran_text_clean';
    public $timestamps = false;
    protected $guarded = ['index','sura','aya','text'];
}
