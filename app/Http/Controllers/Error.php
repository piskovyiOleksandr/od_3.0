<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class Error extends Controller
{
	public function error()
	{
		return view('error_page/error_page');
	}
	
}