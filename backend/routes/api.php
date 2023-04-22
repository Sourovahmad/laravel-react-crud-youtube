<?php

use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('user-create', [userController::class, 'store']);
Route::get('get-users', [userController::class, 'index']);
Route::get('get-user-by-id/{id}', [userController::class, 'getUserById']);
Route::put('update-user/{id}', [userController::class, 'update']);
Route::delete('user-delete/{id}', [userController::class, 'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
