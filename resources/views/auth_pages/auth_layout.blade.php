<!DOCTYPE html>

<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Language" content="ru" />
	<title>@yield( 'title' )</title>
	<link href="{{ asset('/css/app.css') }}" rel="stylesheet" type="text/css" />
</head>

<body>
	<div class="main-auth">
		<div class="auth-pic">
			<img src="{{ asset('/images/auth_pic.png') }}">
		</div>
		<div class="auth-form">
			@yield('content')		
		</div>
	</div>
</body>

<!-- <script src="{{ asset('/public/js/jquery.3.6.0.js') }}" type="text/javascript" defer></script>
	<script src="{{ asset('/public/js/app.js') }}" type="text/javascript" defer></script> -->

<script src="{{ asset('/js/jquery.3.6.0.js') }}" type="text/javascript" defer></script>
<script src="{{ asset('/js/app.js') }}" type="text/javascript" defer></script>



</html>