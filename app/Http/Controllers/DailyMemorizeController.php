<?php

namespace App\Http\Controllers;

use App\Http\Requests\DailyMemorizeRequest;
use App\Models\Daily;
use App\Models\DailyMemorize;

class DailyMemorizeController extends Controller
{

    public function store(DailyMemorizeRequest $request)
    {
        $memorize = null;
        if ($request->applyToAllStudents) {
            $h_date = str_replace('/', '', $request->h_date);
            $studentsInDaily = Daily::
            where('halakah_id', $request->halakah_id)
                ->where('attendance_status', 1)
                ->where('h_date', $h_date)
                ->get(['id', 'st_id']);

            $i = 0;
            foreach ($studentsInDaily as $daily) {
                $previousMemorize = DailyMemorize::where('daily_id', $daily->id)->where('memorize_type_id', $request->memorize_type_id)->first();
                if (!$previousMemorize) {
                    $newRequest = $request->except('id', 'applyToAllStudents', 'halakah_id', 'h_date');
                    $newRequest['daily_id'] = $daily->id;
                    $memorize = DailyMemorize::create($newRequest);
                    if ($memorize) {
                        $i++;
                    }
                }
            }
            if ($i > 0) {
                $msg = [
                    'data' => [
                        'id' => 'Refresh'
                    ],
                    'msg'  => 'تمت إضافة عدد : ' . ' <span class="number black-text"> &nbsp;' . $i . '&nbsp; </span> ' . ' سجل.'];
            }
        } else {
            $memorize = DailyMemorize::create($request->except('id', 'applyToAllStudents', 'halakah_id', 'h_date'));
            if ($memorize) {
//            return $memorize;
                $msg = [
                    'data' => [
                        'id' => $memorize->id
                    ],
                    'msg'  => 'تم الحفظ'
                ];
            }
        }

        return $msg;
    }


    public function update(DailyMemorizeRequest $request)
    {
        $memorize = DailyMemorize::whereId($request->id)
            ->update($request->except('id', 'my_class', 'applyToAllStudents', 'halakah_id', 'h_date'));

        if ($memorize) {
            return 'تم تحديث البيانات';
        }
    }

    public function getMemorizeData($h_date, $memorizeTypeID, $studentID)
    {
        $daily = Daily::where('h_date', '<', $h_date)->where('st_id', $studentID)->with('daily_memorize')
            ->whereHas('daily_memorize', function ($query) use ($memorizeTypeID) {
                $query->where('memorize_type_id', $memorizeTypeID);
            })->latest()->first();
//       for previous memorize
        /*$matchedMemorize = [
            'id'                => null,
            'daily_id'          => null,
            'memorize_type_id'  => null,
            'start_sora'        => null,
            'start_aya'         => null,
            'end_sora'          => null,
            'end_aya'           => null,
            'errors_count'      => null,
            'hesitations_count' => null,
            'points'            => null,
            'notes'             => null,
            'is_not_memorized'  => null
        ];*/
        $matchedMemorize = [];
//        dd($daily->toArray());
        if ($daily) {
            foreach ($daily->daily_memorize as $memorize) {
                if ($memorize->memorize_type_id == $memorizeTypeID) {
                    $matchedMemorize = $memorize->toArray() + ['memorize_type_id' => $memorizeTypeID];
                }
            }
        }

        return $matchedMemorize;
    }

    public function destroy($memorize_id)
    {
        $memorize = DailyMemorize::destroy($memorize_id);
        if ($memorize) {
            return 'تم الحذف بنجاح';
        }
    }
}
