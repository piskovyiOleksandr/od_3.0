<!-- <script src="/js/ion.slider.js" defer></script>
<link rel="stylesheet" href="/css/ion.rangeSlider.min.css"> -->
<!-- <script src="js/ion.slider.js" defer></script>
<link rel="stylesheet" href="css/ion.rangeSlider.min.css"> -->

<script src="<?php echo e(asset('/js/ion.slider.js')); ?>" type="text/javascript" defer></script>
<link href="<?php echo e(asset('/css/ion.rangeSlider.min.css')); ?>" rel="stylesheet" type="text/css" />


<input type="hidden" id="min-age-overall" value="<?= $min_max_age_overall['min-age'] ?>" />
<input type="hidden" id="max-age-overall" value="<?= $min_max_age_overall['max-age'] ?>" />
<input type="hidden" id="min-age" value="<?= $_GET['min-age'] ?>" />
<input type="hidden" id="max-age" value="<?= $_GET['max-age'] ?>" />


<div class="filter">
	<div class="header">
		<span class="mrzv-popup-close" onclick="mrzv_hide_popup(this, 1)"></span> Filter
	</div>

	<div class="title">Who are looking for ?</div>

	<?php if( count( $filter_goal ) > 0 ): ?>
	<div class="select">
		<div class="select-title">I'm looking for</div>
		<select id="filter-goals">
			<option value="0">choose goal</option>
			<?php foreach ($filter_goal as $goal) { ?>
				<option value="<?= $goal['id'] ?>" <?= isset($_COOKIE['filter-goal']) ? ($_COOKIE['filter-goal'] == $goal['id'] ? 'selected' : '') : '' ?>><?= $goal['name'] ?></option>
			<?php } ?>
		</select>
	</div>
	<?php endif; ?>

	<?php if( count( $filter_type ) > 0 ): ?>
	<div class="select">
		<div class="select-title">Preferenses</div>
		<select id="filter-types">
			<option value="0">choose type</option>
			<?php foreach ($filter_type as $type) { ?>
				<option value="<?= $type['id'] ?>" <?= isset($_COOKIE['filter-type']) ? ($_COOKIE['filter-type'] == $type['id'] ? 'selected' : '') : '' ?>><?= $type['name'] ?></option>
			<?php } ?>
		</select>
	</div>
	<?php endif; ?>

	<!-- Мої стратр -->
	<?php if( count( $filter_goal ) > 0 ): ?>
	<div class="select-box">
		<div class="selected">
			<div class="selected-label">I'm looking for</div>
			<div class="selected-value"></div>
		</div>
		<div class="options-container">
			<?php foreach ($filter_goal as $goal) { ?>
				<div class="option" <?= isset($_COOKIE['matches-filter-goal']) ? ($_COOKIE['matches-filter-goal'] == $goal['id'] ? 'selected' : '') : '' ?>>
					<input type="text" class="option-value" id="<?= $goal['id'] ?>" value="<?= $goal['name'] ?>" />
					<label for="<?= $goal['name'] ?>"><?= $goal['name'] ?></label>
				</div>
			<?php } ?>
		</div>
	</div>
	<?php endif; ?>

	<?php if( count( $filter_type ) > 0 ): ?>
	<div class="select-box">
		<div class="selected">
			<div class="selected-label">Preferenses</div>
			<div class="selected-value"></div>
		</div>
		<div class="options-container">
			<?php foreach ($filter_type as $type) { ?>
				<div class="option" <?= isset($_COOKIE['matches-filter-type']) ? ($_COOKIE['matches-filter-type'] == $type['id'] ? 'selected' : '') : '' ?>>
					<input type="text" class="option-value" id="<?= $type['id'] ?>" value="<?= $type['name'] ?>" />
					<label for="<?= $type['name'] ?>"><?= $type['name'] ?></label>
				</div>
			<?php } ?>
		</div>
	</div>
	<?php endif; ?>

	<!-- Мої фініш -->

	<div class="range-slider">
		<div class="age">
			<span class="name">Age</span>
			<input class="age-min" value="<?= $_GET['min-age'] ?>" /> - <input class="age-max" value="<?= $_GET['max-age'] ?>" />
		</div>
		<input type="text" class="js-range-slider" value="" />
	</div>

	<div class="filter-others">

		<div class="checkbox-wrap">
			<input id="with_photo" class="checkbox" type="checkbox" value="" checked>
			<label for="with_photo">With photo</label>
		</div>

		<div class="checkbox-wrap">
			<input id="verified" class="checkbox" type="checkbox" value="" >
			<label for="verified">Verified user</label>
		</div>

	</div>



	<!-- <div class="filter-clear">Clear</div> -->


	<div class="button filter-apply">To apply</div>


	<div class="banner">
		<img src="<?php echo e(asset('/images/banner.png')); ?>" alt="">
	</div>

</div>


<!-- <script src="/js/filter.js" defer></script> -->
<script src="<?php echo e(asset('/js/filter.js')); ?>" type="text/javascript" defer></script>
<script src="<?php echo e(asset('/js/select.js')); ?>" type="text/javascript" defer></script><?php /**PATH E:\_aproachX\OD_3.0_all\OD_3.0_mix_dev_swiper\resources\views/ajax-load-filter.blade.php ENDPATH**/ ?>