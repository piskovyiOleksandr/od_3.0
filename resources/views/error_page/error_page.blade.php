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
    <div class="error-cnt">

        <div class="error-pic">
            <img src="{{ asset('/images/deactivated.png') }}">
        </div>
        <div class="error-ttl">Account deactivated</div>
        <div class="error-txt">Your account and all related information have been successfully deleted</div>
        <a href="/chat" class="btn-error-home">Back to home page</a>
    </div>

</body>
</html>