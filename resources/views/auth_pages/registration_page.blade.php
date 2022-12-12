@extends('auth_pages/auth_layout')
@section('title') Registration @endsection
@section('content')
<div class="form-wrap registration">
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

        <div class="input-wrap">
            <input class="input" required='' type='password'>
            <label class="input-label" alt='Repead password' placeholder='Repead password'></label>
            <div class="err-msg">Error message</div>
        </div>

        <!-- <div class="checkbox-wrap">
            <input type="checkbox" class="checkbox" checked>
            <label class="checkbox-label">I confirm that I am <a href="#">over 18 years old</a></label>
        </div>

        <div class="checkbox-wrap">
            <input type="checkbox" class="checkbox" checked>
            <label class="checkbox-label">I agree to the <a href="#">Terms of Services </a> and <a href="#">Privacy Policy.</a></label>
        </div> -->

        <div class="reg-checkbox">
            <div class="checkbox-wrap">
                <input id="confirm" class="checkbox" type="checkbox" value="" checked>
                <label for="confirm">I confirm that I am <a href="#"> over 18 years old</a></label>
            </div>

            <div class="checkbox-wrap">
                <input id="tspp" class="checkbox" type="checkbox" value="">
                <label for="tspp">I agree to the <a href="#"> Terms of Services </a> and <a href="#">Privacy Policy.</a></label>
            </div>
        </div>



        <button type="submit" id="login" class="btn-auth">Sign up</button>
    </form>
    <div class="form-bottom">
        Have an Account? <a href="/login">Sign in</a>
    </div>
</div>
@endsection