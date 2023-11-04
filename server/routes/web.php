<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;


Route::get('/', function () {
    return view('welcome');
});
Route::post("add-student",[StudentController::class,'store']);
