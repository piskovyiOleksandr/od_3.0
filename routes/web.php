<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Search;
use App\Http\Controllers\Matches;
use App\Http\Controllers\Profile;
use App\Http\Controllers\Chat;
use App\Http\Controllers\Settings;
use App\Http\Controllers\Auth;
use App\Http\Controllers\Popup;

use App\Http\Controllers\Admin;
use App\Http\Controllers\Error;
use Illuminate\Support\Facades\Response;



Route::get('/', function () {
    return redirect('/chat');
});

Route::get( '/search', [ Search::class, 'index' ] );
Route::get( '/ajax/search-load-more', [ Search::class, 'load_more' ] );
Route::get( '/ajax/search-filter', [ Search::class, 'load_filter' ] );


Route::get( '/matches', [ Matches::class, 'index' ] ); 

Route::get( '/ajax/matches-load', [ Matches::class, 'matches_load' ] );

Route::get( '/find-matches', [ Matches::class, 'find_matches' ] );
Route::get( '/ajax/matches-load-more', [ Matches::class, 'load_more' ] );
Route::get( '/ajax/matches-filter', [ Matches::class, 'load_filter' ] );


Route::pattern( 'id', '[0-9]+' );
Route::get( '/profile/{id?}', [ Profile::class, 'index' ] );


Route::get( '/chat/{id?}', [ Chat::class, 'index' ] );
Route::get( '/ajax/chat-list', [ Chat::class, 'chat_list' ] );
Route::get( '/ajax/chat-item', [ Chat::class, 'chat_item' ] );
Route::get( '/ajax/chat-item-profile', [ Profile::class, 'index' ] );
Route::get( '/ajax/chat-stories', [ Chat::class, 'get_stories' ] );


Route::get( '/settings', [ Settings::class, 'index' ] );


// Route::get( '/auth', [ Auth::class, 'index' ] );

Route::get( '/login', [ Auth::class, 'login' ] );
Route::get( '/registration', [ Auth::class, 'registration' ] );
Route::get( '/ajax/modal_auth', [ Auth::class, 'modal_auth' ] );

// Error Page
Route::get( '/error', [ Error::class, 'error' ] );


Route::get( '/popup/chat', [ Popup::class, 'popup' ] );
Route::get( '/popup/notification', [ Popup::class, 'notification' ] );


Route::get( '/admin/profiles', [ Admin::class, 'profile_list' ] );
Route::get( '/admin/profiles/edit/{id?}', [ Admin::class, 'profile_edit' ] );
Route::get( '/admin/profiles/edit/photo-del', [ Admin::class, 'profile_file_del' ] );
Route::get( '/admin/profiles/edit/photo-add', [ Admin::class, 'profile_file_add' ] );
Route::post( '/admin/profiles/edit/photo-add', [ Admin::class, 'profile_file_add' ] );
Route::get( '/admin/profiles/edit/save', [ Admin::class, 'profile_save' ] );

// Було це
// Route::post('/admin/profiles/edit/photo-add', function(){ return Response::json(array('a'=>var_dump(Input::all()),'b'=>var_dump($_FILES))); });

// Замінив на це
Route::post('/admin/profiles/edit/photo-add', function(){ return Response::json(array('a'=>var_dump(Response::input()::all()),'b'=>var_dump($_FILES))); });
// Route::post( '/admin/profiles/edit/photo-add', function () { return 'Hello World'; });

// Route::post('/admin/profiles/edit/photo-add', function(){ return Response::json(array('a'=>var_dump(Input::all()),'b'=>var_dump($_FILES))); });
// Route::post( '/admin/profiles/edit/photo-add', function () { return 'Hello World'; });


?>
