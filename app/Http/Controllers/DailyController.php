<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\DailyRequest;
use App\Models\BehaviorOpt;
use App\Models\Daily;
use App\Models\MemorizeType;
use App\Models\Method;
use App\Models\Student;
use App\Models\Teacher;


class DailyController extends Controller
{
    function aprint($arr, $return = false) {
        $wrap = '<div style=" white-space:pre; position:absolute; top:10px; left:10px; height:200px; width:100px; overflow:auto; z-index:5000;">';
        $wrap = '<pre>';
        $txt = preg_replace('/(\[.+\])\s+=>\s+Array\s+\(/msiU','$1 => Array (', print_r($arr,true));

        if ($return) return  $wrap.$txt.'</pre>';
        else echo $wrap.$txt.'</pre>';
    }

    public function index()
    {
        $h_date = '14370108';
        $StHalaqah = '26';
        $teacher_no = 397;
//        return view('daily.indexjs');
        $FullTeacherData = Teacher::where('t_no', $teacher_no)->with('halakah')->first();

        $memorizeTypes = MemorizeType::where('is_active', 1)->orderBy('order')->get();

        $methods = Method::with('memorizeType')->get();

        $allBehaviors = BehaviorOpt::get();

        $student_ids = array_map(function ($student) {
            return $student['st_no'];
        }, $FullTeacherData->halakah->students->toArray());

        foreach ($FullTeacherData->halakah->students as $student) {
            $dailies = Daily::
            where('st_id', $student->st_no)->lastTwoDays($h_date)
                ->with('behavior')
                ->with('memorize')
                ->orderby('h_date', 'desc')
                ->get();

            $student->daily = $dailies->toArray();
        }
        $FullTeacherData = $FullTeacherData->toArray();

        $teacher = array_slice($FullTeacherData,0,count($FullTeacherData)-1);
        $halakah = array_slice($FullTeacherData['halakah'],0,count($FullTeacherData['halakah'])-2);
        $school = array_slice($FullTeacherData['halakah']['school'],0,count($FullTeacherData['halakah']['school']));
        $SelectedDayDaily = Daily::where('h_date', $h_date)->whereIn('st_id', $student_ids)->get();

        $SelectedDayDaily = count($SelectedDayDaily) ? true : false;

//        print_r($teacher->halakah->students->toArray());
        /*return response()->json([
            "students"         => $teacher,
            "selectedDate"     => $this->StringToDate($h_date),
            "SelectedDayDaily" => $SelectedDayDaily,
            "memorizeTypes"    => $memorizeTypes,
            "methods"          => $methods,
            "allBehaviors"     => $allBehaviors
        ]);*/

        return( json_encode([
            "teacher"         => $teacher,
            "halakah"         => $halakah,
            "school"         => $school,
            "students"         => $FullTeacherData['halakah']['students'],
            "selectedDate"     => $this->StringToDate($h_date),
            "SelectedDayDaily" => $SelectedDayDaily,
            "memorizeTypes"    => $memorizeTypes,
            "methods"          => $methods,
            "allBehaviors"     => $allBehaviors
        ],JSON_UNESCAPED_UNICODE));
    }

    public function indexm()
    {
//        $halakat = Halakat::where('AutoNo','215')->with('students')->get();
//        $halakat = Student::where('StHalaqah','215')->with('halakah')->get();
//        dd($halakat->toArray());
        return view('daily.indexm');
    }

    public function prepareForHalakah(DailyRequest $request)
    {
        $students = Student::where('StHalaqah', $request->StHalaqah)->get();

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
                    'attendance_status' => 1,
                ]);
            }
        }
        if ($daily) {
            return 'تم تجهيز اليوم بنجاح';
        }

    }

    public function allJson($h_date, $StHalaqah)
    {

        $memorizeTypes = MemorizeType::where('is_active', 1)->orderBy('order')->get();

//        $methods = Method::with('memorizeType')->get();

        $allBehaviors = BehaviorOpt::get();

        $students = Student::inHalakah($StHalaqah)->get();

        $student_ids = array_map(function ($c) {
            return $c['st_no'];
        }, $students->toArray());


        foreach ($students as $student) {
            $dailies = Daily::
            where('st_id', $student->st_no)->lastTwoDays($h_date)
                ->with('behavior')
                ->with('memorize')
                ->orderby('h_date', 'desc')
                ->get();

            $student->daily = $dailies->toArray();
        }


        $SelectedDayDaily = Daily::where('h_date', $h_date)->whereIn('st_id', $student_ids)->get();

        $SelectedDayDaily = count($SelectedDayDaily) ? true : false;
        return response()->json([
            "students"         => $students,
            "memorizeTypes"    => $memorizeTypes,
            "SelectedDayDaily" => $SelectedDayDaily,
            "selectedDate"     => $this->StringToDate($h_date),
            "allBehaviors"     => $allBehaviors
        ]);
    }

    public function StringToDate($strDate)
    {
        $tm_Date = ($strDate != "") ? substr($strDate, 0, 4) . "/" . substr($strDate, 4, 2) . "/" . substr($strDate, 6, 2) : null;

        return $tm_Date;
    }
}
