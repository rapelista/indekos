<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FloorController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group([
    'middleware' => 'api',
], function () {

    Route::group([
        'prefix' => 'auth'
    ], function() {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::get('me', [AuthController::class, 'me']);
    });

    Route::group([
        'prefix' => 'floors',
    ], function () {
        Route::get('/', [FloorController::class, 'index']);
        Route::post('/', [FloorController::class, 'create']);
        // Route::delete('/{:floorId}', [FloorController::class, 'delete']);
    });

    Route::group([
        'prefix' => 'rooms',
    ], function() {
        Route::get('/', [RoomController::class, 'index']);
        Route::post('/', [RoomController::class, 'create']);
    });

    Route::resources([
        'users' => UserController::class,
    ]);

});
