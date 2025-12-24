<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ArticleController;

Route::get('/ping', function () {
    return response()->json(['status' => 'API OK']);
});

Route::apiResource('articles', ArticleController::class);
