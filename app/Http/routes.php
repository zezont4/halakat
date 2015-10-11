<?php
get('/', function () {
    return view('welcome');
});

get('test1', function () {
    $posts = \App\Models\Student::where('StHalaqah',215)->with('latestDaily')->get()->toArray();
    dd($posts);
});

get('test2', ['as' => 'test2', 'uses' => 'DailyController@test2']);
get('test3', ['as' => 'test3', 'uses' => 'DailyController@test3']);
get('st/daily', ['as' => 'st.daily', 'uses' => 'DailyController@index']);

get('st/allJson/{h_date?}/{StHalaqah?}', ['as' => 'st.allJson', 'uses' => 'DailyController@allJson']);