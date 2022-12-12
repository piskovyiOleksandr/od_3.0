<div class="modal-container slider" id="slider-stories">

	<div class="swiper-chat-story">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<?php $__currentLoopData = $stories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
			<div class="swiper-slide">
				<div class="story_wrapp">
					<div class="story">
						<a href="/profile/<?= $value['profile_id'] ?>" class="story-profile transition-03">
							<div class="avatar-wrapp">
								<div class="avatar" style="background:url(<?= $value['avatar'] ?>)"></div>
							</div>
							<div class="name"><?= $value['name'] ?></div>
						</a>
						<div class="video-progressbar">
							<div class="positionBar" id="positionBar-<?= $value['id'] ?>"></div>
						</div>
						<div class="controls">
							<div class="icon-play" data-id="<?= $value['id'] ?>"></div>
							<div class="<?php if( Cookie::get('video-muted') === 'true' ): ?>
								<?php echo 'icon-mute-on' ?>
								<?php elseif( Cookie::get('video-muted') === 'false' || ! Cookie::get('video-muted') ): ?>
								<?php echo 'icon-mute-off' ?><?php endif; ?>" data-id="<?= $value['id'] ?>">
							</div>
						</div>
						<video 
							id="video-<?= $value['id'] ?>" 
							paused="true"
							<?php if( Cookie::get('video-muted')==='true' ): ?><?php echo 'muted' ?>
							<?php endif; ?> onTimeUpdate="video_progress('<?= $value['id'] ?>')" 
							poster="" ended="" onloadeddata="init_stories_video_duration(this)">
							<source src="<?= $value['src'] ?>" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
						</video>

					</div>
				</div>
			</div>
			<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
		</div>
		<!-- If we need pagination -->
		<div class="swiper-pagination"></div>

		<!-- If we need navigation buttons -->
		<div class="swiper-button-prev">
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.666706 14C0.666706 21.36 6.64004 27.3333 14 27.3333C21.36 27.3333 27.3334 21.36 27.3334 14C27.3334 6.64 21.36 0.666664 14 0.666664C6.64004 0.666664 0.666706 6.64 0.666706 14ZM14 12.6667H19.3334V15.3333H14V19.3333L8.66671 14L14 8.66666V12.6667Z" fill="white" />
			</svg>
		</div>
		<div class="swiper-button-next">
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M27.3333 14C27.3333 6.64 21.36 0.666667 14 0.666667C6.64 0.666667 0.666664 6.64 0.666664 14C0.666664 21.36 6.64 27.3333 14 27.3333C21.36 27.3333 27.3333 21.36 27.3333 14ZM14 15.3333H8.66666V12.6667H14V8.66667L19.3333 14L14 19.3333V15.3333Z" fill="white" />
			</svg>
		</div>
	</div>


</div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<script type="text/javascript">
	chat_count_stories = '<?= count($stories) ?>'

	slider({
		obj: '#slider-stories',
		obj_item: '.story_wrapp',
		//carusel: '#carousel-stories',
		//carusel_item: '.image',
		number: <?= $index ?>,
		prevText: '&#8406;',
		nextText: '&#8407;',
		interval: 0
	})

	init_video_controls()

	$('#slider-stories').parent().siblings().find('.count-slides').html(chat_count_stories)
</script>

<script>
	const swiperChatStory = new Swiper('.swiper-chat-story', {
		slidesPerView: 5,
		centeredSlides: true,
		spaceBetween: 60,
		loop: true,
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	type: "fraction",
		// },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
</script><?php /**PATH E:\_aproachX\OD_3.0_mix_спроба\resources\views/ajax-chat-stories-modal.blade.php ENDPATH**/ ?>