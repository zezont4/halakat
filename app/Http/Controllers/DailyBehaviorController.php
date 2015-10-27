<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\DailyBehaviorRequest;
use App\Models\DailyBehavior;

class DailyBehaviorController extends Controller
{
    public function store(DailyBehaviorRequest $request)
    {
        $behavior = false;
        $msg = [];
        $behavior = DailyBehavior::create($request->except('id','behavior_type'));
        if ($behavior) {
//            return $behavior;
            $msg = [
                'data' => [
                    'id' => $behavior->id
                ],
                'msg'  => 'تم الحفظ'
            ];
        }

        return $msg;
    }


    public function update(DailyBehaviorRequest $request)
    {
        $behavior = DailyBehavior::whereId($request->id)
            ->update($request->except('id','behavior_type'));

        if ($behavior) {
            return 'تم تحديث البيانات';
        }
    }

    public function destroy($behavior_id)
    {
        $behavior = DailyBehavior::destroy($behavior_id);
        if ($behavior) {
            return 'تم الحذف بنجاح';
        }
    }
}
