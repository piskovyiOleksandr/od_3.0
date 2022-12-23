<div class="modal-auth">
    <div class="header">
        <div class="header-left">
            <span class="icons backbtn-icon"></span>
            <span class="ttl">Fast sign up</span>
        </div>
    </div>

    <div class="modal-auth-form-wrap m-sign-up">
        <form class="" action="">
            <div class="form-top">
                <div class="input-wrap">
                    <input class="input" required='' type='email'>
                    <label class="input-label" alt='Email' placeholder='Email'></label>
                    <div class="err-msg">Error message</div>
                </div>

                <div class="reg-checkbox">
                    <div class="checkbox-wrap">
                        <input id="confirm" class="checkbox" type="checkbox" value="" checked>
                        <label for="confirm">I confirm that I am <a href="#"> over 18 years old</a></label>
                    </div>

                    <div class="checkbox-wrap">
                        <input id="tspp" class="checkbox" type="checkbox" value="">
                        <label for="tspp">I agree to the <a href="#"> Terms of Services </a> and <a href="#" class="pp">Privacy Policy.</a></label>
                    </div>
                </div>
            </div>
            <div class="form-bottom">
                <button type="submit" id="login" class="btn-auth btn-fast-reg">Continue chating...</button>
                <div class="have-acc">
                    Have an Account?
                    <a href="#">Sign in</a>
                </div>
            </div>
        </form>

    </div>

    <div class="modal-auth-form-wrap m-sign-in">
        <form action="">
            <div class="form-top">
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
            </div>
            <div class="form-bottom">
                <button type="submit" class="btn-auth btn-fast-reg">Sign in</button>
            </div>
        </form>
    </div>



    <div class="success-reg">
        <div class="pic">
            <img src="<?php echo e(asset('/images/success-pic.png')); ?>" alt="">
        </div>
        <div class="ttl">Successful registration</div>
        <div class="txt"> Don`t forget to allow send you notifications for receiving files and photos in chat.</div>
        <button type="button" class="btn-cnt">Continue</button>
    </div>

</div>
<script>
    $('.have-acc a').on('click', (e) => {
        e.preventDefault()
        $('.m-sign-up').css('display', 'none')
        $('.m-sign-in').css('display', 'block')
        $('.modal-auth .ttl').text('Sign in')
    })
    $('.btn-fast-reg').on('click', () => {
        $('.modal-auth-form-wrap').css('display', 'none')
        $('.success-reg').css('display', 'flex')
    })
</script><?php /**PATH E:\_aX\OD_3.0_all\OD_3.0_mix_dev_swiper\resources\views/auth_pages/modal_auth.blade.php ENDPATH**/ ?>