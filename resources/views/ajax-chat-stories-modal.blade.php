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

	.mainSwiper,
	.inSwiper {
		width: 100%;
		height: 100%;
	}

	.mainSwiper .swiper-wrapper {
		align-items: center;
	}

	.mainSwiper .swiper-slide {
		width: 164px;
		height: 300px;
		border-radius: 25px;
		overflow: hidden;
	}

	.mainSwiper .swiper-slide .inSwiper .swiper-slide {
		width: 100%;
		height: 100%;
	}

	.mainSwiper .swiper-slide-active,
	.mainSwiper .swiper-slide-active .inSwiper .swiper-slide {
		min-width: 400px;
		height: 640px;
		z-index: 100;
	}

	.modal-stories .mainSwiper .swiper-slide .story_wrapp .story .video-progressbar,
	.modal-stories .mainSwiper .swiper-slide .story_wrapp .controls {
		display: none;
	}

	/* .modal-stories .mainSwiper .swiper-slide-active .story_wrapp .story .video-progressbar,
	.modal-stories .mainSwiper .swiper-slide-active .story_wrapp .controls {
		display: flex !important;
		z-index: 1;
	} */
	.mainSwiper .story-profile {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10000;
	}

	.mainSwiper .swiper-slide-active .story-profile {
		display: none;
	}

	.mainSwiper .story_wrapp,
	.mainSwiper .story {
		width: 100%;
		height: 100%;
	}

	.mainSwiper img,
	.inSwiper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.mainSwiper .swiper-slide .inSwiper {
		opacity: 0.6;
		filter: blur(16px);
	}

	.mainSwiper .swiper-slide video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.mainSwiper .swiper-slide-active .inSwiper {
		opacity: 1;
		filter: blur(0);
	}

	.mainSwiper .swiper-pagination.main-sw {
		display: block;
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

	.mainSwiper .swiper-pagination-current,
	.mainSwiper .swiper-pagination-total {
		color: #FFFFFF;
	}

	.mainSwiper .swiper-button-prev.main-sw,
	.mainSwiper .swiper-button-next.main-sw {
		top: initial;
		bottom: 20px;
	}

	.mainSwiper .swiper-button-prev.main-sw {
		left: 45%;
	}

	.mainSwiper .swiper-button-next.main-sw {
		right: 45%;
	}

	.mainSwiper .swiper-button-prev.main-sw:after,
	.mainSwiper .swiper-button-next.main-sw:after {
		content: none;
	}

	.inSwiper .swiper-button-prev.in-main:after,
	.inSwiper .swiper-button-next.in-main:after {
		content: none;
		font-size: 22px;
		color: whitesmoke;
	}

	.inSwiper .swiper-pagination,
	.inSwiper .swiper-button-prev.in-main,
	.inSwiper .swiper-button-next.in-main {
		display: none;
	}

	.mainSwiper .swiper-slide-active .inSwiper .swiper-pagination,
	.mainSwiper .swiper-slide-active .inSwiper .swiper-button-prev.in-main,
	.mainSwiper .swiper-slide-active .inSwiper .swiper-button-next.in-main {
		display: block;
	}

	.mainSwiper .swiper-slide-active .inSwiper .swiper-pagination {
		display: flex;
		top: 10px;
		bottom: initial;
		padding: 0 10px;
	}

	.mainSwiper .swiper-slide-active .inSwiper .swiper-pagination .swiper-pagination-bullet {
		flex: 1;
		height: 4px;
		border-radius: 4px;
	}

	.mainSwiper .swiper-slide-active .inSwiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
		position: relative;
		background: white;
		/* opacity: .2; */
	}

	/* .mainSwiper .swiper-slide-active .inSwiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active:before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		display: inline-block;
		width: 50%;
		height: 100%;
		background: whitesmoke;
	} */

	.mainSwiper video::-webkit-media-controls-current-time-display,
	.mainSwiper video::-webkit-media-controls-time-remaining-display,
	.mainSwiper video::-webkit-media-controls-fullscreen-button {
		display: none;
	}

	.mainSwiper video::-webkit-media-controls-mute-button {
		margin-right: auto;
	}
</style>
<?php
$allStories = array(
	array(
		'name' => "mini_me",
		'avatar' => 'https://assets.topsrcs.com//profiles_video/131/img.jpg',
		'stories' => array(
			array(
				'type' => 'img',
				'url' => 'https://assets.topsrcs.com//profiles_video/131/img_1.jpg'
			),
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/131/video.mp4',
				'vd_id' => 1
			),
			array(
				'type' => 'img',
				'url' => 'https://assets.topsrcs.com//profiles_video/131/img_2.jpg'
			),
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/131/video1.mp4',
				'vd_id' => 2
			)
		)
	),
	array(
		'name' => "cutie_pie",
		'avatar' => 'https://assets.topsrcs.com//profiles_video/132/img.jpg',
		'stories' => array(
			array(
				'type' => 'img',
				'url' => 'https://assets.topsrcs.com//profiles_video/132/img_2.jpg'
			),
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/132/video.mp4',
				'vd_id' => 3
			),
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/132/video1.mp4',
				'vd_id' => 4
			)
		)
	),
	array(
		'name' => "senorita",
		'avatar' => 'https://assets.topsrcs.com//profiles_video/134/img.jpg',
		'stories' => array(
			array(
				'type' => 'img',
				'url' => 'https://assets.topsrcs.com//profiles_video/134/img_1.jpg'
			),
			array(
				'type' => 'img',
				'url' => 'https://assets.topsrcs.com//profiles_video/134/img_2.jpg'
			),
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/134/video1.mp4',
				'vd_id' => 5
			)
		)
	),
	array(
		'name' => "creambeann",
		'avatar' => 'https://assets.topsrcs.com//profiles_video/135/img.jpg',
		'stories' => array(
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/135/video1.mp4',
				'vd_id' => 6
			)
		)
	),
	array(
		'name' => "wetkitty",
		'avatar' => 'https://assets.topsrcs.com//profiles_video/133/img.jpg',
		'stories' => array(
			array(
				'type' => 'img',
				'url' => 'https://assets.topsrcs.com//profiles_video/133/img_1.jpg'
			),
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/133/video.mp4',
				'vd_id' => 7
			),
			array(
				'type' => 'img',
				'url' => 'https://assets.topsrcs.com//profiles_video/133/img_2.jpg'
			),
			array(
				'type' => 'video',
				'url' => 'https://assets.topsrcs.com//profiles_video/133/video1.mp4',
				'vd_id' => 8
			)
		)
	),

);
// $jsonAllStories = json_encode($allStories);
// echo ($jsonAllStories);
?>
<div class="modal-container slider" id="slider-stories">

	<div class="mainSwiper">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			@foreach ( $allStories as $value )
			<div class="swiper-slide">
				<a href="#" class="story-profile transition-03">
					<div class="avatar-wrapp">
						<div class="avatar" style="background:url(<?= $value['avatar'] ?>)"></div>
					</div>
					<div class="name"><?= $value['name'] ?></div>
				</a>

				<div class="swiper inSwiper inSwiper_<?= $value['name'] ?>">
					<div class="swiper-wrapper">
						@foreach ( $value['stories'] as $s )
						<div class="swiper-slide" data-type="<?= $s['type'] ?>">
							<div class="story_wrapp">
								<div class="story">
									<?php if ($s['type'] == 'img') : ?>
										<img src="<?= $s['url'] ?>" alt="">
									<?php endif ?>
									<?php if ($s['type'] == 'video') : ?>
										<video id="<?= $s['vd_id'] ?>" src="<?= $s['url'] ?>" controls controlslist="nofullscreen nodownload noremoteplayback"></video>
									<?php endif ?>
								</div>
							</div>
						</div>
						@endforeach
					</div>
					<div class="swiper-button-prev in-main">
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.666706 14C0.666706 21.36 6.64004 27.3333 14 27.3333C21.36 27.3333 27.3334 21.36 27.3334 14C27.3334 6.64 21.36 0.666664 14 0.666664C6.64004 0.666664 0.666706 6.64 0.666706 14ZM14 12.6667H19.3334V15.3333H14V19.3333L8.66671 14L14 8.66666V12.6667Z" fill="white" />
						</svg>
					</div>
					<div class="swiper-button-next in-main">
						<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M27.3333 14C27.3333 6.64 21.36 0.666667 14 0.666667C6.64 0.666667 0.666664 6.64 0.666664 14C0.666664 21.36 6.64 27.3333 14 27.3333C21.36 27.3333 27.3333 21.36 27.3333 14ZM14 15.3333H8.66666V12.6667H14V8.66667L19.3333 14L14 19.3333V15.3333Z" fill="white" />
						</svg>
					</div>
					<div class="swiper-pagination"></div>
				</div>

			</div>
			@endforeach
		</div>
		<div class="swiper-pagination main-sw"></div>
		<!-- <div class="swiper-button-prev main-sw">
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.666706 14C0.666706 21.36 6.64004 27.3333 14 27.3333C21.36 27.3333 27.3334 21.36 27.3334 14C27.3334 6.64 21.36 0.666664 14 0.666664C6.64004 0.666664 0.666706 6.64 0.666706 14ZM14 12.6667H19.3334V15.3333H14V19.3333L8.66671 14L14 8.66666V12.6667Z" fill="white" />
			</svg>
		</div>
		<div class="swiper-button-next main-sw">
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M27.3333 14C27.3333 6.64 21.36 0.666667 14 0.666667C6.64 0.666667 0.666664 6.64 0.666664 14C0.666664 21.36 6.64 27.3333 14 27.3333C21.36 27.3333 27.3333 21.36 27.3333 14ZM14 15.3333H8.66666V12.6667H14V8.66667L19.3333 14L14 19.3333V15.3333Z" fill="white" />
			</svg>
		</div> -->
	</div>


</div>
<script src="{{ asset('/js/jquery.3.6.0.js') }}" type="text/javascript" defer></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

<script>
	const mainSwiper = new Swiper('.mainSwiper', {
		// centeredSlides: true,
		// slidesPerView: 'auto',
		slidesPerView: 5,
		spaceBetween: 60,
		loop: true,
		pagination: {
			el: '.swiper-pagination.main-sw',
			type: "fraction",
		},
		// navigation: {
		// 	nextEl: '.swiper-button-next.main-sw',
		// 	prevEl: '.swiper-button-prev.main-sw',
		// },
		slideToClickedSlide: true,
		watchSlidesProgress: true,
		on: {
			activeIndexChange: function() {
				console.log('activeIndexChange')
			}
		}
		

	})

	let firstChild 
	let secondChild
	let needChild
	let needChildTagName

	function swiperSettings() {
		return {
			// spaceBetween: 30,
			// centeredSlides: true,
			// autoplay: {
			//   delay: 15000,
			//   disableOnInteraction: false,
			// },
			effect: "cube",
			grabCursor: true,
			cubeEffect: {
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94,
			},
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next.in-main",
				prevEl: ".swiper-button-prev.in-main",
			},
			on: {
				reachBeginning: function() {
					mainSwiper.slidePrev()
					$('video').trigger('pause')
				},
				reachEnd: function() {
					mainSwiper.slideNext()
					$('video').trigger('pause')
				},
				transitionEnd: function() {
					allSlideEl = document.querySelectorAll('.mainSwiper .swiper-slide-active .inSwiper .swiper-slide')
					console.log('this slides')
					console.log(this.slides)
					allSlideEl.forEach(el => {
						if (el.classList.contains("swiper-slide-visible")) {
							firstChild = el.children[0]
							secondChild = firstChild.children[0]
							needChild = secondChild.children[0]
							needChildTagName = needChild.tagName
							if (needChildTagName == 'IMG') {
								setTimeout(() => {
									this.slideNext()
								}, 15000)
							} else if (needChildTagName == 'VIDEO') {
								needChild.addEventListener('ended', () => {
									this.slideNext()
								})
							}
						}
					})
					let activeVideo = $('.mainSwiper .swiper-slide-active .inSwiper .swiper-slide-active video:visible')[0]

					console.log('slide img')
					if (activeVideo != undefined) {
						$('video').trigger('pause')
						activeVideo.play()
						console.log('slide video/play')
					}
				},
				touchStart: () => {
					console.log('touchStart')
					needChild.pause()
				},
				touchEnd: () => {
					console.log('touchEnd')
					needChild.play()
				},
			},
		}
	}
	let inSwiper_mini_me = new Swiper(".inSwiper_mini_me", swiperSettings())
	// let cntSw = 1
	// mainSwiper.on('slideChange', function() {
	// 	cntSw++
	// 	if (cntSw == 2) {
	// 		let inSwiper_cutie_pie = new Swiper(".inSwiper_cutie_pie", swiperSettings())
	// 	} else if (cntSw == 3) {
	// 		let inSwiper_senorita = new Swiper(".inSwiper_senorita", swiperSettings())
	// 	} else if (cntSw == 4) {
	// 		let inSwiper_creambeann = new Swiper(".inSwiper_creambeann", swiperSettings())
	// 	} else if (cntSw == 5) {
	// 		let inSwiper_wetkitty = new Swiper(".inSwiper_wetkitty", swiperSettings())
	// 	}

	// })


	// swiper.previousIndex	количество Индексный номер ранее активного слайда
	// swiper.realIndex количество Индексный номер текущего активного слайда с учетом дублированных слайдов в циклическом режиме
	// swiper.slides Дом7Массив	Коллекция HTML-элементов слайдов в виде массива Dom7. Чтобы получить конкретный HTML-элемент слайда, используйтеswiper.slides[1]
	// activeIndexChange Событие будет запущено при изменении активного индекса
	// beforeSlideChangeStart Событие будет запущено до начала перехода смены слайда
	// beforeTransitionStart Событие будет запущено до начала перехода
	// realIndexChange Событие будет запущено при изменении реального индекса
	// slideChange Событие будет запущено при изменении текущего активного слайда
	// touchEnd Событие будет запущено, когда пользователь отпустит Swiper. Получает touchendсобытие в качестве аргументов.
	// touchStart Событие будет запущено, когда пользователь коснется Swiper. Получает touchstartсобытие в качестве аргументов.
	// transitionEnd Событие будет запущено после перехода.
	// transitionStart Событие будет запущено в начале перехода.

	// inSwiper.on('slideChange', () => {
	// 	console.log(inSwiper.el)

	// })




	// $('.swiper-button-prev.in-main, .swiper-button-next.in-main').on('click', () => {

	// 	if ($('.mainSwiper .swiper-slide-active .inSwiper .swiper-slide-active video:visible')) {
	// 		// $('video:visible').play()
	// 		// console.log($('.mainSwiper .swiper-slide-active .inSwiper .swiper-slide-active video:visible'))
	// 		// let allVideo = document.querySelectorAll('.inSwiper video')
	// 		// console.log(allVideo)
	// 		// allVideo.forEach((e)=> {
	// 		// 	let v = e
	// 		// 	v.stop()
	// 		// })
	// 		let prevVideo = false
	// 		let activeVideo = $('.mainSwiper .swiper-slide-active .inSwiper .swiper-slide-active video:visible')[0]
	// 		$('video').trigger('pause')
	// 		console.log('pause')

	// 		if (activeVideo != undefined) {
	// 			$('video').trigger('pause')
	// 			activeVideo.play()
	// 			console.log('video play')
	// 		}
	// 		// if (activeVideo != undefined) {


	// 		// 	activeVideo.play()

	// 		// console.log(activeVideo.currentTime)
	// 		// console.log(activeVideo.duration)
	// 		// }

	// 	}

	// })
	// let storiesChat  =  document.querySelectorAll('.stories-block-bot-story')
	// storiesChat.forEach(el => {
	// 	el.addEventListener('click', () => {
	// 		console.log(el)
	// 	})
	// })
</script>