<?php
Route::get('/', function () {
    return view('welcome');
});

Route::get('daily', ['as' => 'daily.daily', 'uses' => 'DailyController@index']);

Route::get('dailym', ['as' => 'daily.dailym', 'uses' => 'DailyController@indexm']);

Route::get('daily/allJson/{h_date}/{StHalaqah}', ['as' => 'daily.allJson', 'uses' => 'DailyController@allJson']);

Route::post('daily/prepareForHalakah', ['as' => 'daily.prepareForHalakah', 'uses' => 'DailyController@prepareForHalakah']);

Route::post('memorize/store/', ['as' => 'memorize.store', 'uses' => 'MemorizeController@store']);
Route::put('memorize/update/', ['as' => 'memorize.update', 'uses' => 'MemorizeController@update']);
Route::DELETE('memorize/destroy/{memorize_id}', ['as' => 'memorize.destroy', 'uses' => 'MemorizeController@destroy']);
Route::get('memorize/getMemorizeData/{h_date}/{memorizeTypeID}/{studentID}', ['as' => 'memorize.getMemorizeData', 'uses' => 'MemorizeController@getMemorizeData']);
