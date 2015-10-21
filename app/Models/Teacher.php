<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Teacher extends Model
{
    protected $table = '0_teachers';

    protected $fillable = ['TID', 'TName1', 'TName2', 'TName3', 'TName4', 'TEdarah', 'THalaqah', 'TMobileNo', 'hide', 'RegesterTime'];

    public function onlyHalakah()
    {
        return $this->hasone(Halakah::class, 'AutoNo', 'THalaqah')->where('hide', 0);
    }

    public function halakah()
    {
        return $this->onlyHalakah()
            ->with('school')
            ->with('students');
    }

}
