
<!-- SWIPER STORIES -->
<div class="demo-stories po_style">
	<?php $__currentLoopData = $stories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
	<a href="#">
		<span class="demo-stories-avatar">
			<img src="<?= $value['avatar'] ?>" alt="">
		</span>
		<span class="demo-stories-name"><?= $value['name'] ?></span>
	</a>

	<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>

<div class="modal-container slider" id="slider-stories">

	<div class="stories-slider">
		<div class="swiper">
			<div class="swiper-wrapper">

				<?php $__currentLoopData = $stories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="swiper-slide">
					<div class="swiper">
						<div class="swiper-wrapper">
							<!-- user's single story -->

							<!-- user's single story -->
							<div class="swiper-slide">
								<a href="/profile/<?= $value['profile_id'] ?>" class="stories-slider-user">
									<div class="stories-slider-user-avatar">
										<img src="<?= $value['avatar'] ?>" />
									</div>
									<div class="stories-slider-user-name">mark_johnson</div>
									<div class="stories-slider-user-date">12h</div>
								</a>
								<div class="stories-slider-actions">
									<button class="stories-slider-close-button"></button>
								</div>
								<div class="stories-slider-content">
									<img src="<?= $value['avatar'] ?>" />
								</div>
							</div>
							<!-- user's single story -->
							<div class="swiper-slide">
								<a href="#" class="stories-slider-user">
									<div class="stories-slider-user-avatar">
										<img src="<?= $value['avatar'] ?>" />
									</div>
									<div class="stories-slider-user-name">mark_johnson</div>
									<div class="stories-slider-user-date">2h</div>
								</a>
								<div class="stories-slider-actions">
									<button class="stories-slider-close-button"></button>
								</div>
								<div class="stories-slider-content">
									<video src="<?= $value['src'] ?>" playsinline preload="metadata" autoplay="true"></video>
								</div>
							</div>
							<!-- user's single story -->
							<div class="swiper-slide">
								<a href="#" class="stories-slider-user">
									<div class="stories-slider-user-avatar">
										<img src="<?= $value['avatar'] ?>" />
									</div>
									<div class="stories-slider-user-name">mark_johnson</div>
									<div class="stories-slider-user-date">30m</div>
								</a>
								<div class="stories-slider-actions">
									<button class="stories-slider-close-button"></button>
								</div>
								<div class="stories-slider-content">
									<img src="<?= $value['avatar'] ?>" />
								</div>
							</div>

						</div>
					</div>
				</div>

				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

			</div>
		</div>
	</div>


</div>

<link href="<?php echo e(asset('/css/stories_swiper.css')); ?>" rel="stylesheet" type="text/css" />
<script src="<?php echo e(asset('/js/stories_swiper.js')); ?>"></script><?php /**PATH E:\_aproachX\OD_3.0_all\OD_3.0_mix_dev_swiper\resources\views/stories_page/stories_page.blade.php ENDPATH**/ ?>