<!-- <script src="/js/ion.slider.js" defer></script>
<link rel="stylesheet" href="/css/ion.rangeSlider.min.css"> -->

<script src="{{ asset('/js/ion.slider.js') }}" type="text/javascript" defer></script>
<link href="{{ asset('/css/ion.rangeSlider.min.css') }}" rel="stylesheet" type="text/css" />

<input type="hidden" id="min-age-overall" value="<?= $min_max_age_overall['min-age'] ?>" />
<input type="hidden" id="max-age-overall" value="<?= $min_max_age_overall['max-age'] ?>" />


<div class="filter">
	<div class="header">
		<span class="mrzv-popup-close" onclick="mrzv_hide_popup(this, 1)"></span> Filter
	</div>
	<?php
	//echo '<pre>';print_r($min_max_age);echo '</pre>';
	?>
	<div class="title">Who are looking for ?</div>

	@if ( count( $filter_goal ) > 0 )
	<div class="select">
		<div class="select-title">I'm looking for</div>
		<select id="filter-goals">
			<option value="0">choose goal</option>
			<?php foreach ($filter_goal as $goal) { ?>
				<option value="<?= $goal['id'] ?>" <?= isset($_COOKIE['matches-filter-goal']) ? ($_COOKIE['matches-filter-goal'] == $goal['id'] ? 'selected' : '') : '' ?>><?= $goal['name'] ?></option>
			<?php } ?>
		</select>
	</div>
	@endif
	@if ( count( $filter_type ) > 0 )
	<div class="select">
		<div class="select-title">Preferenses</div>
		<select id="filter-types">
			<option value="0">choose type</option>
			<?php foreach ($filter_type as $type) { ?>
				<option value="<?= $type['id'] ?>" <?= isset($_COOKIE['matches-filter-type']) ? ($_COOKIE['matches-filter-type'] == $type['id'] ? 'selected' : '') : '' ?>><?= $type['name'] ?></option>
			<?php } ?>
		</select>
	</div>
	@endif

	<div class="range-slider">
		<div class="age">
			<span class="name">Age</span>
			<input class="age-min" value="<?= $_GET['min-age'] ?>" /> - <input class="age-max" value="<?= $_GET['max-age'] ?>" />
		</div>
		<input type="text" class="js-range-slider" value="" />
	</div>

	<div class="filter-others">
		<!-- <input type="checkbox" id="" value="" checked /> With photo
				<input type="checkbox" id="" value="" /> Verified user -->

		<div class="checkbox-wrap">
			<input type="checkbox" class="checkbox" checked>
			<label class="checkbox-label">With photo</a></label>
		</div>

		<div class="checkbox-wrap">
			<input type="checkbox" class="checkbox" checked>
			<label class="checkbox-label">Verified user</label>
		</div>
	</div>

	<div class="select-box">
            <div class="selected">
                <div class="selected-label">Country</div>
                <div class="selected-value"></div>
            </div>
            <div class="options-container">
                <input id="select-search-country" class="select-search" type="text" placeholder="Find your country..." />
                <div class="option option-country">
                    <input type="text" class="option-value" id="country-1" value="country-1" />
                    <label for="country-1">country-1</label>
                </div>
                <div class="option option-country">
                    <input type="text" class="option-value" id="country-2" value="country-2" />
                    <label for="country-2">country-2</label>
                </div>
                <div class="option option-country">
                    <input type="text" class="option-value" id="country-3" value="country-3" />
                    <label for="country-3">country-3</label>
                </div>
                <div class="option option-country">
                    <input type="text" class="option-value" id="country-4" value="country-4" />
                    <label for="country-4">country-4</label>
                </div>
                <div class="option option-country">
                    <input type="text" class="option-value" id="country-5" value="country-5" />
                    <label for="country-5">country-5</label>
                </div>
                <div class="option option-country">
                    <input type="text" class="option-value" id="country-6" value="country-6" />
                    <label for="country-6">country-6</label>
                </div>
            </div>
        </div>

	<div class="button filter-apply">To apply</div>

	<div class="banner">
		<img src="{{ asset('/images/banner.png') }}" alt="">
	</div>

</div>


<!-- <script src="/js/filter-matches.js" defer></script> -->
<script src="{{ asset('/js/filter-matches.js') }}" type="text/javascript" defer></script>
<script src="{{ asset('/js/select.js') }}" type="text/javascript" defer></script>