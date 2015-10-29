<?php
Route::get('/', function () {
    return view('welcome');
});

//Route::get('daily', ['as' => 'daily.daily', 'uses' => 'DailyController@index']);

Route::get('daily', ['as' => 'daily.daily', 'uses' => 'DailyController@index']);

Route::get('daily/allJson/{h_date}/{StHalaqah}', ['as' => 'daily.allJson', 'uses' => 'DailyController@allJson']);
Route::get('daily/basic_data', ['as' => 'daily.basic_data', 'uses' => 'DailyController@basic_data']);

Route::post('daily/prepareForHalakah', ['as' => 'daily.prepareForHalakah', 'uses' => 'DailyController@prepareForHalakah']);

//daily_memorize
Route::post('daily_memorize/store/', ['as' => 'daily_memorize.store', 'uses' => 'DailyMemorizeController@store']);
Route::put('daily_memorize/update/', ['as' => 'daily_memorize.update', 'uses' => 'DailyMemorizeController@update']);
Route::DELETE('daily_memorize/destroy/{memorize_id}', ['as' => 'daily_memorize.destroy', 'uses' => 'DailyMemorizeController@destroy']);
Route::get('daily_memorize/getMemorizeData/{h_date}/{memorizeTypeID}/{studentID}', ['as' => 'daily_memorize.getMemorizeData', 'uses' => 'DailyMemorizeController@getMemorizeData']);

//daily_behavior
Route::post('daily_behavior/store/', ['as' => 'daily_behavior.store', 'uses' => 'DailyBehaviorController@store']);
Route::put('daily_behavior/update/', ['as' => 'daily_behavior.update', 'uses' => 'DailyBehaviorController@update']);
Route::DELETE('daily_behavior/destroy/{behavior_id}', ['as' => 'daily_behavior.destroy', 'uses' => 'DailyBehaviorController@destroy']);