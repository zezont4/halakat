<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuranTextClean extends Model
{
    public $timestamps = false;
    protected $table = 'quran_text_clean';
    protected $guarded = ['index', 'sura', 'aya', 'text'];
    protected $casts = [
        'index' => 'integer',
        'sura'  => 'integer',
        'aya'   => 'integer',
        'text'  => 'string',
    ];
}
