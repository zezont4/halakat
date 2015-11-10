<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Halakah extends Model
{
    protected $table = '0_halakat';

    protected $fillable = ['HName', 'EdarahID', 'hide', 'halakah_type_id'];
    protected $casts = [
        'AutoNo'          => 'integer',
        'HName'           => 'string',
        'EdarahID'        => 'integer',
        'halakah_type_id' => 'integer',
        'hide'            => 'integer',
        'created_at'      => 'date',
        'updated_at'      => 'date',
    ];

    public function daily()
    {
        return $this->hasMany(Daily::class, 'StHalaqah', 'AutoNo');
    }

    public function students()
    {
        return $this->onlyStudents()
            ->where('hide', 0)
            ->select(['StHalaqah', 'st_no', 'StBurthDate', 'STID', 'FatherMobileNo', DB::raw('
         concat_ws(" ",StName1,StName2,StName4) as st_full_name_3,
          concat_ws(" ",StName1,StName2,StName3,StName4) as st_full_name_4
          ')]);
    }

    public function onlyStudents()
    {
        return $this->hasMany(Student::class, 'StHalaqah', 'AutoNo');
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
