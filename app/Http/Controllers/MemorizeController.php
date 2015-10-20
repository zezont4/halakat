<?php

namespace App\Http\Controllers;

use App\Http\Requests\MemorizeRequest;
use App\Models\Daily;
use App\Models\Memorize;

class MemorizeController extends Controller
{

    public function store(MemorizeRequest $request)
    {
        $memorize = Memorize::create($request->except('id', 'memorize_type'));
        if ($memorize) {
            return [
                'data' => [
                    'id' => $memorize->id
                ],
                'msg'  => 'تم الحفظ'
            ];
        }
    }


    public function update(MemorizeRequest $request)
    {
        $memorize = Memorize::whereId($request->id)->update($request->except('id', 'memorize_type', 'myClass'));

        if ($memorize) {
            return 'تم تحديث البيانات';
        }
    }

    public function getMemorizeData($h_date, $memorizeTypeID, $studentID)
    {
        $daily = Daily::where('h_date', '<', $h_date)->where('st_id', $studentID)->with('memorize')
            ->whereHas('memorize', function ($query) use ($memorizeTypeID) {
                $query->where('method_id', $memorizeTypeID);
            })->latest()->first();
//        dd($daily);
        $matchedMemorize = [
            'id'                => null,
            'daily_id'          => null,
            'method_id'         => null,
            'start_sora'        => null,
            'start_aya'         => null,
            'end_sora'          => null,
            'end_aya'           => null,
            'errors_count'      => null,
            'hesitations_count' => null,
            'points'            => null,
            'notes'             => null,
            'is_not_memorized'  => null,
            'memorize_type'     => null
        ];
        if ($daily) {
            foreach ($daily->memorize as $memorize) {
                if ($memorize->method_id == $memorizeTypeID) {
                    $matchedMemorize = $memorize->toArray() + ['memorize_type' => $memorizeTypeID];
                }
            }
        }

        return $matchedMemorize;
    }

    public function destroy($memorize_id)
    {
        $memorize = Memorize::destroy($memorize_id);
        if ($memorize) {
            return 'تم الحذف بنجاح';
        }
    }
}
