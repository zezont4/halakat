<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Halakah extends Model
{
    protected $table = '0_halakat';

    protected $fillable = ['HName', 'EdarahID', 'hide', 'are_students_equal'];

    public function onlyStudents()
    {
        return $this->hasMany(Student::class, 'StHalaqah', 'AutoNo');
    }

    public function daily()
    {
        return $this->hasMany(Daily::class, 'StHalaqah', 'AutoNo');
    }

    public function students()
    {
        return $this->onlyStudents()
            ->where('hide', 0)
            ->select(['StHalaqah', 'st_no', 'StBurthDate', 'STID', 'FatherMobileNo', DB::raw('
         concat_ws(" ",StName1,StName2,StName4) as stFullName3,
          concat_ws(" ",StName1,StName2,StName3,StName4) as stFullName4
          ')]);
    }

    public function teacher()
    {
        return $this->hasone(Teacher::class, 'THalaqah', 'AutoNo')->where('hide', 0);
    }

    public function school()
    {
        return $this->hasone(School::class, 'id', 'EdarahID')->where('hidden', 0);
    }
}
