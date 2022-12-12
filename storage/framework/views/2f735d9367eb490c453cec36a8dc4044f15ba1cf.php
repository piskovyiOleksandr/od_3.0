<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="Content-Language" content="ru" />

		<title>Admin</title>

		<!-- <link href="<?php echo e(asset('/public/css/admin.css')); ?>" rel="stylesheet" type="text/css" /> -->
		<link href="<?php echo e(asset('/css/admin.css')); ?>" rel="stylesheet" type="text/css" />
	</head>

	<body class="admin">
		<header>

				<nav>
					<a href="/admin" class="transition-03">Главная</a>
					<a href="/admin/profiles" class="transition-03">Профили</a>
					
				<nav>
			
		</header>

		<div class="main">

			<?php// print_r($profiles)?>

			<div class="profiles list">
				<div class="item">
					<div class="pic avatar">Аватар</div>
					<div class="pic profile">Фото профиля</div>
					<div class="pic chat">Фото чата</div>
						
					<div class="name td">Имя, возраст</div>
					<div class="status td">Статус</div>
					<div class="cr td">Рейтинг</div>
					<div class="edit td">Редактировать</div>
				</div>
				<?php $__currentLoopData = $profiles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="item">
					<div class="pic avatar" style="background:url(<?= $item['avatar'] ?>)"></div>
					<div class="pic profile">
						<?php if( isset( $item['imgs-prof'] ) ): ?>
						<?php $__currentLoopData = $item['imgs-prof']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
						<?php if( $value['chat'] == 0 ): ?>
						<div class="pic litle" style="background:url(<?= $value['src'] ?>)"></div>
						<?php endif; ?>
						<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
						<?php endif; ?>
					</div>
					<div class="pic chat">
						<?php if( isset( $item['imgs-prof'] ) ): ?>
						<?php $__currentLoopData = $item['imgs-prof']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
						<?php if( $value['chat'] == 1 ): ?>
						<div class="pic litle" style="background:url(<?= $value['src'] ?>)"></div>
						<?php endif; ?>
						<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
						<?php endif; ?>
					</div>
					<div class="name td"><?= $item['name'] ?>, <?= $item['age'] ?></div>
					<div class="status td"><?= $item['active'] ?></div>
					<div class="cr td"><?= $item['cr'] ?></div>
					<div class="edit td"><a href="/admin/profiles/edit/<?= $item['id'] ?>" target="_blank">edit</a></div>
				</div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>
		</div>
		
		<footer>
			admin
		</footer>
	</body>
<!-- 
	<script src="<?php echo e(asset('/public/js/jquery.3.6.0.js')); ?>" type="text/javascript" defer></script>
	<script src="<?php echo e(asset('/public/js/admin.js')); ?>" type="text/javascript" defer></script> -->
	<script src="<?php echo e(asset('/js/jquery.3.6.0.js')); ?>" type="text/javascript" defer></script>
	<script src="<?php echo e(asset('/js/admin.js')); ?>" type="text/javascript" defer></script>
</html><?php /**PATH E:\_aproachX\OD_3.0_mix\resources\views/admin/admin-profiles.blade.php ENDPATH**/ ?>