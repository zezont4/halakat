<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Student extends Model
{

    public $timestamps = false;
    protected $table = '0_students';
    protected $guarded = ['st_no'];
    protected $primaryKey = 'st_no';

    public function daily()
    {
        return $this->hasMany('App\Models\Daily', 'st_id', 'st_no');
    }

    public function getFullName4Attribute()
    {
        return $this->StName1 . ' ' . $this->StName2 . ' ' . $this->StName3 . ' ' . $this->StName4;
    }

    public function getFullName3Attribute()
    {
        return $this->StName1 . ' ' . $this->StName2 . ' ' . $this->StName4;
    }

    public function scopeInHalakah($query, $halakah_id)
    {
        return $query->select(DB::raw('st_no,
         concat_ws(" ",StName1,StName2,StName4) as stFullName3,
          concat_ws(" ",StName1,StName2,StName3,StName4) as stFullName4,
          StBurthDate,FatherMobileNo'))
            ->where('StHalaqah', $halakah_id);
    }
//	public function latestDaily()
//	{
//		return $this->daily()->orderBy('h_date','desc')->nPerGroup('st_id', 1);
//	}

}