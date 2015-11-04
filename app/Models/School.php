<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table = '0_users';

    protected $fillable = ['username', 'password', 'user_group', 'arabic_name', 'mobile_no', 'sex', 'can_edit', 'hidden', 'e_type', 'points_method'];
    protected $casts = [
        'id'          => 'integer',
        'username'    => 'string',
        'password'    => 'string',
        'user_group'  => 'string',
        'arabic_name' => 'string',
        'mobile_no'   => 'string',
        'sex'         => 'integer',
        'can_edit'    => 'integer',
        'hidden'      => 'integer',
        'e_type'      => 'string',
    ];

    public function halakat()
    {
        return $this->hasMany('App\Models\Halakah', 'EdarahID', 'id')->where('hide', 0);
    }

}
