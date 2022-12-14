<?php if( isset( $profile ) ): ?>

<div class="main profile chat-page flex">
	<div class="header">
		<div class="header-left">
			<span class="icons backbtn-icon"></span>
			<span class="ttl">Profile</span>
		</div>
	</div>

	<div class="content">

		<div class="profile-wrapper flex">
			<div class="pic" style="background:url('<?= $profile['avatar'] ?>')">
				<div class="profile-control-buttons flex">
					<div class="button report flex"><span class="icons report-icon"></span>Report spam</div>
					<div class="button start-chat flex"><span class="icons start-chat-icon"></span>Start chat</div>
				</div>
			</div>

			<div class="profile-info flex">
				<h1 class="name"><?= $profile["name"] ?></h1>
				<span class="status">Online now</span>
				<div class="age"><?= $profile['age'] ?> years</div>
				<div class="profile-location"><?= $profile['location'] ?> km from you in</div>
			</div>

		</div>

		<div class="user-about flex">

			<div class="single-item status">
				<div class="label badge-<?= $profile['status'] ?>">Status</div>
				<div class="value"><?= $profile['status'] ?></div>
			</div>

			<div class="single-item description">
				<div class="label">Fit the description</div>
				<?php $__currentLoopData = $spec_type; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="value">#<?= $val->type_name ?></div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>

			<div class="single-item about">
				<div class="label">About</div>
				<div class="value"><?= $profile['desc'] ?></div>
			</div>

			<div class="single-item looking-for">
				<div class="label">I'm looking for</div>
				<?php $__currentLoopData = $spec_goal; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="value"><?= $val->goal_name ?></div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>

		</div>

		<div class="tab-wrapper">
			<div class="tabs flex">
				<div class="tab stories active" data-tab="stories">4 Stories</div>
				<div class="tab photos" data-tab="photos">4 Photos</div>
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
				<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="image_wrapper">
					<img src="<?= $val ?>" />
				</div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="image_wrapper">
					<img src="<?= $val ?>" />
				</div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>
		</div>

	</div>
</div>

<div class="overlay dark">

	<div class="modal modal-photos">
		<div class="close-icon">&#10005;</div>
		<div class="modal-header">
			<div class="modal-header-left">
				<div class="count"><span class="index-slides"></span> of <span class="count-slides"><?= count($img) ?></span></div>
			</div>
			<div class="modal-header-right">

			</div>
		</div>
		<div class="modal-container slider" id="slider-photos">
			<div class="slides">
				<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="img"><img src="<?= $val ?>" /></div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>
		</div>
		<div class="modal-footer" id="carousel-photos">
			<div class="flex-viewport" id="">
				<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $val): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="image" style="background:url('<?= $val ?>')"></div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>
		</div>
	</div>


	<?php if( isset( $stories ) ): ?>
	<div class="modal modal-stories">
		<div class="close-icon">&#10005;</div>
		<div class="modal-header">
			<div class="modal-header-left">
				<div class="count"><span class="index-slides"></span> of <span class="count-slides"><?= count($stories) ?></span></div>
			</div>
		</div>
		<div class="modal-container slider" id="slider-stories">
			<div class="slides">
				<?php $__currentLoopData = $stories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="story_wrapp">
					<div class="story">
						<div class="video-progressbar">
							<div class="positionBar" id="positionBar-<?= $item['id'] ?>"></div>
						</div>
						<video id="video-<?= $item['id'] ?>" paused="true" <?php if( Cookie::get('video-muted')==='true' ): ?><?php echo 'muted' ?><?php endif; ?> onTimeUpdate="video_progress('<?= $item['id'] ?>')" ended="" poster="" onloadeddata="init_stories_video_duration(this)">
							<source src="<?= $item['src'] ?>" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
						</video>
						<div class="controls">
							<div class="icon-play" data-id="<?= $item['id'] ?>"></div>
							<div class="<?php if( Cookie::get('video-muted') === 'true' ): ?><?php echo 'icon-mute-on' ?><?php elseif( Cookie::get('video-muted') === 'false' || ! Cookie::get('video-muted') ): ?><?php echo 'icon-mute-off' ?><?php endif; ?>" data-id="<?= $item['id'] ?>"></div>
						</div>
					</div>
				</div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>
		</div>
		<div class="modal-footer" id="carousel-stories">
			<div class="flex-viewport" id="">
				<?php $__currentLoopData = $stories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="slide-nav-bt image">
					<video poster="" paused="true" muted="true">
						<source src="<?= $item['src'] ?>" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
					</video>
				</div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
			</div>
		</div>
	</div>
	<?php endif; ?>
</div>

<?php endif; ?>

<script>
	add_city_in_profile()

	$('.stories').on('click', '.story_wrapper', function() {
		$('.overlay').addClass('show')
		$('.modal-stories').css({
			display: 'block'
		})
		$('.modal-photos').css({
			display: 'none'
		})
		init_stories_flexslider_profile($(this).index() + 1)
	})
	$('.photos').on('click', '.image_wrapper', function() {
		$('.overlay').addClass('show')
		$('.modal-stories').css({
			display: 'none'
		})
		$('.modal-photos').css({
			display: 'block'
		})
		init_photos_flexslider_profile($(this).index() + 1)
	})
	$('.modal .close-icon').on('click', function() {
		$('.overlay').removeClass('show')
		$('.modal-stories-container').css({
			opacity: '0'
		})
	})
	init_video_controls()
</script><?php /**PATH E:\_aproachX\OD_3.0_mix_????????????\resources\views/ajax-chat-item-profile.blade.php ENDPATH**/ ?>