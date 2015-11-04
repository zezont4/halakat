<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Teacher extends Model
{
    protected $table = '0_teachers';

    protected $fillable = ['TID', 'TName1', 'TName2', 'TName3', 'TName4', 'TEdarah', 'THalaqah', 'TMobileNo', 'hide', 'RegesterTime'];
    protected $casts = [
        't_no'      => 'integer',
        'TID'       => 'string',
        'TName1'    => 'string',
        'TName2'    => 'string',
        'TName3'    => 'string',
        'TName4'    => 'string',
        'TEdarah'   => 'integer',
        'THalaqah'  => 'integer',
        'TMobileNo' => 'string',
        'hide'      => 'integer',
    ];

    public function halakah()
    {
        return $this->onlyHalakah()
            ->with('school')
            ->with('students');
    }

    public function onlyHalakah()
    {
        return $this->hasone(Halakah::class, 'AutoNo', 'THalaqah')->where('hide', 0);
    }

}
