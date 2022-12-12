
<?php $__env->startSection('title'); ?> Login <?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
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
<?php $__env->stopSection(); ?>
<?php echo $__env->make('auth_pages/auth_layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\_aproachX\OD_3.0_mix_спроба\resources\views/auth_pages/login_page.blade.php ENDPATH**/ ?>