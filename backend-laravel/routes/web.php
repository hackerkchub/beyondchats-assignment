<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Scraper\BlogScraperController;

Route::get('/', function () {
    return 'WEB OK';
});
Route::get('/scrape-beyondchats', [BlogScraperController::class, 'scrape']);
