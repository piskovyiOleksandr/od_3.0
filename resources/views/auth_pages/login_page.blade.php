@extends('auth_pages/auth_layout')
@section('title') Login @endsection
@section('content')
<div class="form-wrap login">
    <form action="">
        <div class="ttl">Cats Matches</div>
    
        <div class="input-wrap">
            <input class="input" required='' type='email'>
            <label class="input-label" alt='Email' placeholder='Email'></label>
            <div class="err-msg">Error message</div>
        </div>

        <div class="input-wrap">
            <input class="input" required='' type='password'>
            <label class="input-label" alt='Password' placeholder='Password'></label>
            <div class="err-msg">Error message</div>
        </div>

        <button type="submit" id="login" class="btn-auth">Sign in</button>

        <a href="#" class="forgot">Forgot your password?</a>
    </form>
    <div class="form-bottom">
        Don't have an account? <a href="/registration">Sign up</a>
    </div>
</div>
@endsection