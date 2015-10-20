<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\DailyRequest;
use App\Models\BehaviorOpt;
use App\Models\Daily;
use App\Models\MemorizeType;
use App\Models\Method;
use App\Models\Student;

class DailyController extends Controller
{

    public function index()
    {
        return view('daily.indexjs');
    }

    public function indexm()
    {
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
                    'st_id'  => $student_ids[$i],
                    'h_date' => $request->h_date,
                    'status' => 1,
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

        $methods = Method::with('memorizeType')->get();

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
            "methods"          => $methods,
            "allBehaviors"     => $allBehaviors
        ]);
    }

    public function StringToDate($strDate)
    {
        $tm_Date = ($strDate != "") ? substr($strDate, 0, 4) . "/" . substr($strDate, 4, 2) . "/" . substr($strDate, 6, 2) : null;

        return $tm_Date;
    }
}
