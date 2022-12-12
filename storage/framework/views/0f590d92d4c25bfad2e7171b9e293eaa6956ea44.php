<!DOCTYPE html>

<html lang="en">

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Language" content="ru" />
	<title><?php echo $__env->yieldContent( 'title' ); ?></title>
	<link href="<?php echo e(asset('/css/app.css')); ?>" rel="stylesheet" type="text/css" />
</head>

<body>
	<div class="main-auth">
		<div class="auth-pic">
			<img src="<?php echo e(asset('/images/auth_pic.png')); ?>">
		</div>
		<div class="auth-form">
			<?php echo $__env->yieldContent('content'); ?>		
		</div>
	</div>
</body>

<!-- <script src="<?php echo e(asset('/public/js/jquery.3.6.0.js')); ?>" type="text/javascript" defer></script>
	<script src="<?php echo e(asset('/public/js/app.js')); ?>" type="text/javascript" defer></script> -->

<script src="<?php echo e(asset('/js/jquery.3.6.0.js')); ?>" type="text/javascript" defer></script>
<script src="<?php echo e(asset('/js/app.js')); ?>" type="text/javascript" defer></script>


</html><?php /**PATH E:\_aproachX\OD_3.0_mix\resources\views/auth_pages/auth_layout.blade.php ENDPATH**/ ?>