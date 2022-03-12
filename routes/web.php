<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/divizija1', function () {
    return view('divizija1');
});

Route::get('/noassist', function () {
    return view('noassist');
});

Route::resource('posts','App\Http\Controllers\PostsController');

Route::get('/form','FormsController@index');

Route::get('/form/create','FormsController@create');

Route::post('/formcreate','FormsController@storeForm');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::middleware(['auth','isAdmin'])->group(function () {
    Route::get('/dash','App\Http\Controllers\Admin\FrontendController@index');
    

    Route::resource('users', \App\Http\Controllers\UsersController::class);
    Route::get('view-users/{id}',[App\Http\Controllers\Admin\DashboardController::class,'viewuser']);

});

