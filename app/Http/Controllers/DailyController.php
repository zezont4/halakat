<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Models\BehaviorOpt;
use App\Models\Daily;
use App\Models\MemorizeType;
use App\Models\Method;
use App\Models\Student;
use Illuminate\Support\Facades\DB;


class DailyController extends Controller {

	public function test3()
	{
		$h_date = '14361210';
		$StHalaqah = 215;
		DB::enableQueryLog();

		$students = Student::inHalakah($StHalaqah)->get();

		foreach ($students as $student) {
			$dailies = Daily::
			where('st_id', $student->st_no)->lastTwoDays($h_date)
				->with('behavior')
				->with('memorize')
				->orderby('h_date', 'desc')
				->get();

			$student->daily = $dailies->toArray();
		}

		echo '<pre><code class="language-json">';
		print_r($students->toArray());
		echo '<hr>';
//		print_r($daily);
		echo '<hr>';
		print_r(DB::getQueryLog());
		echo '</code></pre>';
	}

	public function test2()
	{
		DB::enableQueryLog();
		$h_date = '14361209';
		$StHalaqah = 215;
		$students = Student::select(DB::raw('st_no,concat_ws(" ",StName1,StName2,StName3,StName4) as stFullName4,StBurthDate,FatherMobileNo'))
			->where('StHalaqah', $StHalaqah)
			->with(['latestDaily' => function ($query) use ($h_date) {
				$query
					->orWhere('h_date', $h_date)
					->with('behavior')
					->with('memorize')
					->orderby('h_date', 'desc');
			}])->get();
		echo '<pre><code class="language-json">';
		print_r(DB::getQueryLog());
		print_r($students->toArray());
		echo '</code></pre>';

//		return;
//		\App\Models\Student::where('StHalaqah',215)->with('latestDaily')->get()->toArray();
	}

	public function index()
	{
		return view('daily.indexjs');
	}

	public function allJson($h_date, $StHalaqah)
	{
		function StringToDate($strDate)
		{
			$tm_Date = ($strDate != "") ? substr($strDate, 0, 4) . "/" . substr($strDate, 4, 2) . "/" . substr($strDate, 6, 2) : null;

			return $tm_Date;
		}

		$memorizeTypes = MemorizeType::where('is_active', 1)->orderBy('order')->get();

		$methods = Method::with('memorizeType')->get();

		$allBehaviors = BehaviorOpt::get();

		$students = Student::select(DB::raw('st_no,concat_ws(" ",StName1,StName2,StName3,StName4) as stFullName4,StBurthDate,FatherMobileNo'))
			->where('StHalaqah', $StHalaqah)
			->with(['latestDaily' => function ($query) use ($h_date) {
				$query
					->orWhere('h_date', $h_date)
					->with('behavior')
					->with('memorize')
					->orderby('h_date', 'desc');
			}])->get();

		return response()->json([
			"students"      => $students,
			"memorizeTypes" => $memorizeTypes,
			"selectedDate"  => StringToDate($h_date),
			"methods"       => $methods,
			"allBehaviors"  => $allBehaviors
		]);

	}

}
