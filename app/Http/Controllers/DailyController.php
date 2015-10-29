<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\DailyRequest;
use App\Models\BehaviorTypes;
use App\Models\Daily;
use App\Models\DailyMemorize;
use App\Models\Halakah;
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
        $studentsInDaily = Daily::where('halakah_id', $StHalaqah)->where('h_date', $h_date)->lists('st_id');

        $students = Student::whereIn('st_no', $studentsInDaily->toArray())
            ->select(['st_no', 'StBurthDate', 'FatherMobileNo', DB::raw('st_no,
         concat_ws(" ",StName1,StName2,StName4) as stFullName3,
          concat_ws(" ",StName1,StName2,StName3,StName4) as stFullName4')])->get();

        $daily_memorize = DailyMemorize::get();
        /*$query->where(function ($query) use ($h_date) {
            $query->where('h_date', $h_date)
                ->orWhere(function ($query) use ($h_date) {
                    $query->Where('h_date', '<', $h_date)->Where('attendance_status', 1);
                });
        })->take(2);*/
        foreach ($students as $student) {
            $dailies = Daily::
            where('st_id', $student->st_no)->lastTwoDays($h_date)
                ->with('daily_behavior')
                ->with('daily_memorize')
                ->orderby('h_date', 'desc')
                ->get();

            $student->daily = $dailies->toArray();
        }
        /*foreach ($students as $student) {
            $dailies = Daily::
            where('st_id', $student->st_no)->lastTwoDays($h_date)
                ->with('daily_behavior')
                ->with('daily_memorize')
                ->orderby('h_date', 'desc')
                ->get();

            $student->daily = $dailies->toArray();
        }*/
        $teacher = Teacher::where('THalaqah', $StHalaqah)->where('hide', 0)->get();
        If (count($teacher) > 1) {
            return 'المعلم يدرس في أكثر من حلقة. يجب حذف الحلقات الآخرى أو ربطها بمعلم آخر';
        }
        $teacher = $teacher[0];

        $halakah = Halakah::where('AutoNo', $StHalaqah)->first();

        $school = School::where('id', $halakah->EdarahID)->first();

        $selected_day_daily = Daily::where('h_date', $h_date)->whereIn('st_id', $studentsInDaily->toArray())->get();

        $selected_day_daily = count($selected_day_daily) ? true : false;

//        $this->aprint($teacher->toArray());
//        $this->aprint($halakah->toArray());
//        $this->aprint($school->toArray());
//        $this->aprint($students->toArray());

        return (json_encode([
            "teacher"          => $teacher->toArray(),
            "halakah"          => $halakah->toArray(),
            "school"           => $school->toArray(),
            "students"         => $students->toArray(),
            "selected_day_daily" => $selected_day_daily
        ], JSON_UNESCAPED_UNICODE));
    }

    public function basic_data()
    {
        $memorize_types = MemorizeType::where('is_active', 1)->orderBy('order')->get();

        $behavior_types = BehaviorTypes::get();

        $minimum_memorize = MinimumMemorize::get();

        return (json_encode([
            "memorize_types"   => $memorize_types,
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
        $students = Student::where('StHalaqah', $request->StHalaqah)->get();

        $teacher = Teacher::where('THalaqah', $request->StHalaqah)->where('hide', 0)->get();

//        return $teacher[0]['StHalaqah'];
        If (count($teacher) > 1) {
            return 'المعلم يدرس في أكثر من حلقة. يجب حذف الحلقات الآخرى أو ربطها بمعلم آخر';
        }
        $student_ids = array_map(function ($c) {
            return $c['st_no'];
        }, $students->toArray());
        $daily = null;
        for ($i = 0; $i < count($student_ids); $i++) {
            $previousExistence = Daily::where('st_id', $student_ids[$i])->where('h_date', $request->h_date)->first();;
            if (!$previousExistence) {
                $daily = Daily::create([
                    'st_id'             => $student_ids[$i],
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
