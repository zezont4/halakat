<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\DailyRequest;
use App\Models\BehaviorTypes;
use App\Models\Daily;
use App\Models\DailyBehavior;
use App\Models\DailyMemorize;
use App\Models\Halakah;
use App\Models\HalakahTypes;
use App\Models\MemorizeType;
use App\Models\MinimumMemorize;
use App\Models\School;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Support\Facades\DB;


class DailyController extends Controller
{
    function aprint($arr, $return = false)
    {
        $wrap = '<code style="white-space:pre;">';
        $wrap .= '<pre style="background-color: #001100; color: #fff3e0;">';
        $txt = preg_replace('/(\[.+\])\s+=>\s+Array\s+\(/msiU', '$1 => Array (', print_r($arr, true));
        if ($return) return $wrap . $txt . '</pre></code>';
        else echo $wrap . $txt . '</pre></code>';
    }

    public function allJson($h_date, $StHalaqah)
    {
        // last hijri date
        $last_h_day = Daily::where('halakah_id', $StHalaqah)->where('h_date', '<', $h_date)->orderBy('h_date', 'desc')->first();
        $last_h_day = $last_h_day ? $last_h_day->h_date : null;

        // daily ids of today in last day
        $last_day_daily_ids = Daily::where('halakah_id', $StHalaqah)->where('h_date', $last_h_day)->lists('id');
        $today_daily_ids = Daily::where('halakah_id', $StHalaqah)->where('h_date', $h_date)->lists('id');

        // students ids of today
        $today_daily_st_ids = Daily::where('halakah_id', $StHalaqah)->where('h_date', $h_date)->lists('st_id');

        // daily date of today and last day
        $daily = Daily::where('halakah_id', $StHalaqah)->where('h_date', $h_date)->orWhere('h_date', $last_h_day)->get(['id', 'st_id', 'h_date', 'attendance_status']);

        // daily_memorize data of today and last day
        $daily_memorize = DailyMemorize::whereIn('daily_id', $today_daily_ids)->orWhereIn('daily_id', $last_day_daily_ids)->get();

        // daily_behavior data of today and last day
        $daily_behavior = DailyBehavior::whereIn('daily_id', $today_daily_ids)->get();

        // students data
        $students = Student::whereIn('st_no', $today_daily_st_ids)
            ->select(['st_no', 'StBurthDate', 'FatherMobileNo', DB::raw('st_no,
         concat_ws(" ",StName1,StName2,StName4) as st_full_name_3,
          concat_ws(" ",StName1,StName2,StName3,StName4) as st_full_name_4')])->get();

        //teacher data
        $teacher = Teacher::where('THalaqah', $StHalaqah)->where('hide', 0)->get(['t_no', 'TName1', 'TName2', 'TName4']);
        If (count($teacher) > 1) {
            return 'المعلم يدرس في أكثر من حلقة. يجب حذف الحلقات الآخرى أو ربطها بمعلم آخر';
        }
        $teacher = $teacher[0];

        //halakah data
        $halakah = Halakah::where('AutoNo', $StHalaqah)->select('AutoNo', 'HName', 'EdarahID', 'halakah_type_id')->first();

        //Memorize types
        $memorize_types = MemorizeType::where('is_active', 1)->where('halakah_type_id', $halakah->halakah_type_id)
            ->orderBy('order')->get(['id', 'name', 'max_point', 'a_point', 'b_point', 'c_point', 'not_accepted_errors', 'not_accepted_hesitations']);

        //school data
        $school = School::where('id', $halakah->EdarahID)->select('arabic_name', 'id')->first();

        // halakah_types data
        $halakah_type_data = HalakahTypes::where('id', $halakah->halakah_type_id)->first();

        // $minimum_memorize_data data
        $minimum_memorize_data = MinimumMemorize::where('halakah_type_id', $halakah->halakah_type_id)->get();

        //check if it's a new day or not
        $selected_day_daily = Daily::where('h_date', $h_date)->whereIn('st_id', $today_daily_st_ids)->get();
        $selected_day_daily = count($selected_day_daily) ? true : false;

//        $this->aprint($teacher->toArray());
//        $this->aprint($halakah->toArray());
//        $this->aprint($school->toArray());
//        $this->aprint($students->toArray());
//        $this->aprint($daily->toArray());
//        $this->aprint($daily_memorize->toArray());
//        $this->aprint($minimum_memorize_data->toArray());

        return (json_encode([
            "teacher"            => $teacher,
            "halakah"            => $halakah,
            "halakah_type"       => $halakah_type_data,
            "memorize_types"     => $memorize_types,
            "minimum_memorize"   => $minimum_memorize_data,
            "school"             => $school,
            "students"           => $students,
            "daily"              => $daily,
            "daily_memorize"     => $daily_memorize,
            "daily_behavior"     => $daily_behavior,
            "selected_day_daily" => $selected_day_daily
        ], JSON_UNESCAPED_UNICODE));
    }

    public function basic_data()
    {
//        $memorize_types = MemorizeType::where('is_active', 1)->where('halakah_type_id', $halakah->halakah_type_id)->orderBy('order')->get(['id', 'name', 'max_point', 'a_point', 'b_point', 'c_point', 'not_accepted_errors', 'not_accepted_hesitations']);

        $behavior_types = BehaviorTypes::get();

        $minimum_memorize = MinimumMemorize::orderBy('halakah_type_id')
            ->orderBy('memorize_type_id')->orderBy('student_age')->get(['halakah_type_id', 'memorize_type_id', 'student_age', 'letters_count']);

        return (json_encode([
            "behavior_types"   => $behavior_types,
            "minimum_memorize" => $minimum_memorize
        ], JSON_UNESCAPED_UNICODE));
    }

    public function index()
    {
        return view('daily.index');
    }

    public function prepareForHalakah(DailyRequest $request)
    {
        $students = Student::where('StHalaqah', $request->StHalaqah)->lists('st_no');
        $teacher = Teacher::where('THalaqah', $request->StHalaqah)->where('hide', 0)->get();

        If (count($teacher) > 1) {
            return 'المعلم يدرس في أكثر من حلقة. يجب حذف الحلقات الآخرى أو ربطها بمعلم آخر';
        }

        $daily = null;
        foreach ($students as $student) {
            $previousExistence = Daily::where('st_id', $student)->where('h_date', $request->h_date)->first();
            if (!$previousExistence) {
                $daily = Daily::create([
                    'st_id'             => $student,
                    'h_date'            => $request->h_date,
                    'edarah_id'         => $teacher[0]->TEdarah,
                    'halakah_id'        => $teacher[0]->THalaqah,
                    'teacher_id'        => $teacher[0]->t_no,
                    'attendance_status' => 1,
                ]);
            }
        }

        if ($daily) {
            return 'تم تجهيز اليوم بنجاح';
        }

    }

    public function StringToDate($strDate)
    {
        $tm_Date = ($strDate != "") ? substr($strDate, 0, 4) . "/" . substr($strDate, 4, 2) . "/" . substr($strDate, 6, 2) : null;

        return $tm_Date;
    }
}
