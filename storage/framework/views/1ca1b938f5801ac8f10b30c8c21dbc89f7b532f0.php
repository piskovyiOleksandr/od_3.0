

<?php $__env->startSection('title'); ?> <?= $profile['name'] ?> - Cats Matches <?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<style>
	.modal-container.slider {
		height: 100Vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px 0;
	}

	.swiper {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.swiper-slide {
		background-size: cover;
		background-position: center;
	}

	.profilePhotoSwiperTop {
		max-width: 544px;
		max-height: 577px;
		height: 100%;
		margin-bottom: 20px;
	}

	.profilePhotoSwiperBottom {
		width: 25%;
		min-height: 80px;
		box-sizing: border-box;
		padding: 10px 0;
	}

	.profilePhotoSwiperBottom .swiper-slide {
		width: 80px;
		height: 80px;
		border-radius: 12px !important;
		opacity: 0.4;
		overflow: hidden;
	}

	.profilePhotoSwiperBottom .swiper-slide-thumb-active {
		border: 2px solid #DBEA8D;
		opacity: 1;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.profilePhotoSwiperTop .pphs-btn-prev:after,
	.profilePhotoSwiperTop .pphs-btn-next:after,
	.profileVideoSwiper .pvs-btn-prev:after,
	.profileVideoSwiper .pvs-btn-next:after {
		content: none;
	}

	.profileVideoSwiper {
		max-width: 400px;
		max-height: 750px;
		height: 100%;
	}

	.profileVideoSwiper .swiper-slide {
		max-width: 400px;
		max-height: 750px;
		border-radius: 16px;
		overflow: hidden;
	}

	.profileVideoSwiper video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.profilePhotoSwiperTop .swiper-pagination,
	.profileVideoSwiper .swiper-pagination {
		bottom: initial;
		left: initial;
		top: 10px;
		right: 10px;
		width: max-content;
		height: max-content;
		padding: 5px 10px;
		font-weight: 700;
		font-size: 14px;
		color: #ffffff;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 15px;
	}

	.profilePhotoSwiperTop .swiper-pagination-current,
	.profilePhotoSwiperTop .swiper-pagination-total,
	.profileVideoSwiper .swiper-pagination-current,
	.profileVideoSwiper .swiper-pagination-total {
		font-weight: 700;
		font-size: 14px;
		color: #ffffff;
	}

	.profileVideoSwiper .pvs-btn-prev {
		left: -40px;
	}

	.profileVideoSwiper .pvs-btn-next {
		right: -40px;
	}

	.profileVideoSwiper video::-webkit-media-controls-current-time-display,
	.profileVideoSwiper video::-webkit-media-controls-time-remaining-display,
	.profileVideoSwiper video::-webkit-media-controls-fullscreen-button {
		display: none;
	}

	.profileVideoSwiper video::-webkit-media-controls-mute-button {
		margin-right: auto;
	}
</style>
<div class="main profile flex">
	<div class="header">
		<div class="header-left">
			<span class="icons backbtn-icon"></span>
		</div>
	</div>

	<div class="content">
		<div class="column-80">

			<div class="profile-wrapper flex">
				<div class="pic" style="background:url('<?= $profile['avatar'] ?>')"></div>
				<div class="profile-info flex">
					<h1 class="name"><?= $profile['name'] ?></h1>
					<span class="status">Online now</span>
					<div class="age"><?= $profile['age'] ?> years</div>
					<div class="profile-location"><?= $profile['location'] ?> km from you in</div>
				</div>
				<div class="profile-control-buttons flex">
					<div class="button report flex"><span class="icons report-icon"></span>Report spam</div>
					<a class="button start-chat flex" href="/chat/<?= $profile['id'] ?>"><span class="icons start-chat-icon"></span>Start chat</a>
				</div>
			</div>

			<div class="user-about flex">
				<div class="single-item flex status">
					<div class="label">Status</div>
					<div class="value"><?= $profile['status'] ?></div>
				</div>
				<div class="single-item flex description">
					<div class="label">Fit the description</div>
					<div class="description-list">
						<?php $__currentLoopData = $spec_type; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
						<div class="value">#<?= $val->type_name ?></div>
						<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
					</div>
				</div>
				<div class="single-item flex looking-for">
					<div class="label">I'm looking for</div>
					<?php $__currentLoopData = $spec_goal; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<div class="value"><?= $val->goal_name ?></div>
					<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				</div>
				<div class="single-item flex about">
					<div class="label">About</div>
					<div class="value"><?= $profile['desc'] ?></div>
				</div>
			</div>

			<div class="tab-wrapper">
				<div class="tabs flex">
					<div class="tab stories active" data-tab="stories"><?= count($stories) ?> Stories</div>
					<div class="tab photos" data-tab="photos"><?= count($img) ?> Photos</div>
				</div>

				<div class="tab-content stories active" data-tab-content="stories">
					<?php if( isset( $stories ) ): ?>
					<?php $__currentLoopData = $stories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<div class="story_wrapper">
						<video onloadeddata="init_stories_video_duration(this)" preload="auto" poster="" paused="true" muted="true">
							<source src="<?= $item['src'] ?>" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
						</video>
						<div class="video-timer"></div>
						<div class="icon-play"></div>
					</div>
					<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
					<?php endif; ?>
				</div>

				<div class="tab-content photos" data-tab-content="photos">
					<?php if( isset( $img ) ): ?>
					<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<div class="image_wrapper">
						<img src="<?= $val ?>" />
					</div>
					<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
					<?php endif; ?>
				</div>
			</div>
		</div>

		<div class="profile-ad-block column-20">
			<div class="ad-wrapper-block">
				<a href="#"><img src="/images/badoo.jpg" /></a>
			</div>
		</div>
	</div>
</div>

<div class="overlay dark">

	<div class="modal modal-photos">
		<div class="close-icon">&#10005;</div>

		<div class="modal-container slider" id="slider-photos">

			<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper profilePhotoSwiperTop">
				<div class="swiper-wrapper">
					<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<div class="swiper-slide">
						<img src="<?= $val ?>" />
					</div>
					<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-next pphs-btn-next">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27.3333 14C27.3333 6.64 21.36 0.666667 14 0.666667C6.64 0.666667 0.666664 6.64 0.666664 14C0.666664 21.36 6.64 27.3333 14 27.3333C21.36 27.3333 27.3333 21.36 27.3333 14ZM14 15.3333H8.66666V12.6667H14V8.66667L19.3333 14L14 19.3333V15.3333Z" fill="white" />
					</svg>

				</div>
				<div class="swiper-button-prev pphs-btn-prev">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.666706 14C0.666706 21.36 6.64004 27.3333 14 27.3333C21.36 27.3333 27.3334 21.36 27.3334 14C27.3334 6.64 21.36 0.666664 14 0.666664C6.64004 0.666664 0.666706 6.64 0.666706 14ZM14 12.6667H19.3334V15.3333H14V19.3333L8.66671 14L14 8.66666V12.6667Z" fill="white" />
					</svg>
				</div>
			</div>
			<div thumbsSlider="" class="swiper profilePhotoSwiperBottom">
				<div class="swiper-wrapper">
					<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<div class="swiper-slide">
						<img src="<?= $val ?>" />
					</div>
					<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				</div>
			</div>

		</div>
	</div>

	<?php if( isset( $stories ) ): ?>
	<div class="modal modal-stories">
		<div class="close-icon">&#10005;</div>
		<div class="modal-container slider" id="slider-stories">

			<div class="swiper profileVideoSwiper">
				<div class="swiper-wrapper">
					<?php $__currentLoopData = $stories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<div class="swiper-slide">
						<video id="video-<?= $item['id'] ?>" preload="metadata" playsinline="" autoplay="" controls="" controlslist="nofullscreen nodownload noremoteplayback" disablepictureinpicture="">
							<source src="<?= $item['src'] ?>" type="video/mp4">
							</source>
						</video>
					</div>
					<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-next pvs-btn-next">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27.3333 14C27.3333 6.64 21.36 0.666667 14 0.666667C6.64 0.666667 0.666664 6.64 0.666664 14C0.666664 21.36 6.64 27.3333 14 27.3333C21.36 27.3333 27.3333 21.36 27.3333 14ZM14 15.3333H8.66666V12.6667H14V8.66667L19.3333 14L14 19.3333V15.3333Z" fill="white" />
					</svg>
				</div>
				<div class="swiper-button-prev pvs-btn-prev">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.666706 14C0.666706 21.36 6.64004 27.3333 14 27.3333C21.36 27.3333 27.3334 21.36 27.3334 14C27.3334 6.64 21.36 0.666664 14 0.666664C6.64004 0.666664 0.666706 6.64 0.666706 14ZM14 12.6667H19.3334V15.3333H14V19.3333L8.66671 14L14 8.66666V12.6667Z" fill="white" />
					</svg>
				</div>
			</div>

		</div>
	</div>
	<?php endif; ?>
</div>

<?php $__env->stopSection(); ?>


<?php $__env->startSection('script'); ?>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<link rel="stylesheet" href="<?php echo e(asset('/css/video-js.min.css')); ?>" />


<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script src="<?php echo e(asset('/js/video.min.js')); ?>"></script>
<script>
	let profilePhotoSwiperBottom = new Swiper(".profilePhotoSwiperBottom", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	})

	let profilePhotoSwiperTop = new Swiper(".profilePhotoSwiperTop", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".pphs-btn-next",
			prevEl: ".pphs-btn-prev",
		},
		thumbs: {
			swiper: profilePhotoSwiperBottom,
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
	})

	var swiper = new Swiper('.profileVideoSwiper', {
		effect: "cube",
		grabCursor: true,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next.pvs-btn-next",
			prevEl: ".swiper-button-prev.pvs-btn-prev",
		},
		loop: true,
	});
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout/layout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\_aproachX\OD_3.0_all\OD_3.0_mix_dev_swiper\resources\views/profile_page/profile.blade.php ENDPATH**/ ?>