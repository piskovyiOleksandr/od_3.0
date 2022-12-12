<style>
	/* My stories swiper */
	.modal-stories-container .modal-container {
		width: 100% !important;
		height: 100%;
		overflow: hidden;
	}
	.modal-chat-page .modal-stories .modal-header {
		display: none;
	}
	.swiper-chat-story {
		width: 100%;
		height: 100%;
	}

	.swiper-chat-story .swiper-wrapper {
		align-items: center;
	}

	.swiper-chat-story .swiper-slide {
		width: 164px;
		height: 300px;
		border-radius: 25px;
		overflow: hidden;
	}

	.swiper-chat-story .swiper-slide-active {
		min-width: 400px;
		height: 640px;
		z-index: 100;
	}
	.modal-stories .swiper-chat-story .swiper-slide .story_wrapp .story .video-progressbar,
	.modal-stories .swiper-chat-story .swiper-slide .story_wrapp .controls {
		display: none;
	}
	/* .modal-stories .swiper-chat-story .swiper-slide-active .story_wrapp .story .video-progressbar,
	.modal-stories .swiper-chat-story .swiper-slide-active .story_wrapp .controls {
		display: flex !important;
		z-index: 1;
	} */
	.swiper-chat-story .story-profile {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.swiper-chat-story .swiper-slide-active .story-profile {
		display: none;
	}

	.swiper-chat-story .story_wrapp,
	.swiper-chat-story .story {
		width: 100%;
		height: 100%;
	}

	.swiper-chat-story .swiper-slide video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.6;
		filter: blur(16px);
	}

	.swiper-chat-story .swiper-slide-active video {
		opacity: 1;
		filter: blur(0);
	}


	.swiper-chat-story .swiper-pagination {
		top: 20px;
		left: initial;
		width: fit-content;
		height: fit-content;
		padding: 0 5px;
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		color: #FFFFFF;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 15px;
	}

	.swiper-chat-story .swiper-pagination-current,
	.swiper-chat-story .swiper-pagination-total {
		color: #FFFFFF;
	}

	.swiper-chat-story .swiper-button-prev,
	.swiper-chat-story .swiper-button-next {
		top:95%;
	}
	.swiper-chat-story .swiper-button-prev {
		left:10px;
	}
	.swiper-chat-story .swiper-button-next {
		left:60px;
	}
	.swiper-chat-story .swiper-button-prev:after,
	.swiper-chat-story .swiper-button-next:after {
		content: none;
	}
	.swiper-chat-story video::-webkit-media-controls-current-time-display,
	.swiper-chat-story video::-webkit-media-controls-time-remaining-display,
	.swiper-chat-story video::-webkit-media-controls-fullscreen-button {
		display: none;
	}

	.swiper-chat-story video::-webkit-media-controls-mute-button {
		margin-right: auto;
	}
</style>
<div class="modal-container slider" id="slider-stories">

	<div class="swiper-chat-story">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			@foreach ( $stories as $key => $value )
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
							<div class="@if( Cookie::get('video-muted') === 'true' )<?php echo 'icon-mute-on' ?>@elseif( Cookie::get('video-muted') === 'false' || ! Cookie::get('video-muted') )<?php echo 'icon-mute-off' ?>@endif" data-id="<?= $value['id'] ?>"></div>
						</div>
						<video id="video-<?= $value['id'] ?>"controls paused="true" @if( Cookie::get('video-muted')==='true' )<?php echo 'muted' ?> @endif onTimeUpdate="video_progress('<?= $value['id'] ?>')" poster="" ended="" onloadeddata="init_stories_video_duration(this)">
							<source src="<?= $value['src'] ?>" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
						</video>

					</div>
				</div>
			</div>
			@endforeach
		</div>
		<div class="swiper-pagination"></div>
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



	init_video_controls()

	$('#slider-stories').parent().siblings().find('.count-slides').html(chat_count_stories)
</script>

<script>
	const swiperChatStory = new Swiper('.swiper-chat-story', {
		// centeredSlides: true,
		// slidesPerView: 'auto',
		slidesPerView: 5,
		spaceBetween: 60,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: "fraction",
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
</script>


