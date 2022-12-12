<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Auth extends Controller
{
	public function login()
	{
		return view('auth_pages/login_page');
	}
	public function registration()
	{
		return view('auth_pages/registration_page');
	}
	public function modal_auth()
	{
		return view('auth_pages/modal_auth');
	}
}
