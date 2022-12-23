<?php if( count( $profiles ) > 0 ): ?>
<?php $__currentLoopData = $profiles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

<style>

</style>

<div class="matches-element" data-id="<?= $item['id'] ?>" data-matches="<?= $item['matches'] ?>" data-timeout="<?= $item['timeout'] ?>" style="z-index:<?= $zindex ?>">
	<div class="header">
		<div class="pic" style="background:url('<?= $item['pic'] ?>')"><a href="<?= $item['link'] ?>"></a></div>
		<div class="person-info">
			<span class="name"><?= $item['name'] ?>, <?= $item['age'] ?> <span class="icons icon-fire status"></span></span>
			<span class="city"><?= isset($_SESSION["user-city"]) && !empty($_SESSION["user-city"]) ? $_SESSION["user-city"] : 'Tokio' ?></span>
		</div>
	</div>

	<div class="pics flexslider">

		<div class="swiper-find-matches">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				<?php $__currentLoopData = $img; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $pic): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				<div class="swiper-slide">
					<img src="<?php echo $pic ?>" alt="">
				</div>
				<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				...
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

		<div class="icon-del transition-03">&#9932;</div>
		<div class="icon-add transition-03">
			<div class="icons icon-fire"></div>
		</div>

	</div>
	<div class="button link"><a href="<?= $item['link'] ?>">Whatch profile</a></div>

</div>

<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php else: ?>
<div class="matches-element" style="padding:200px 0;text-align:center;font-size:20px">Все... Киски закончились...</div>
<?php endif; ?>

<script>
	const swiper = new Swiper('.swiper-find-matches', {
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
</script><?php /**PATH E:\_aX\OD_3.0_all\OD_3.0_mix_dev_swiper\resources\views/ajax-load-more-profiles-matches.blade.php ENDPATH**/ ?>