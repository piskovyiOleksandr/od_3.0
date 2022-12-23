<div class="slider-menu <?php if( Cookie::get('menu-open') == 'y' ): ?><?php echo 'open' ?><?php endif; ?>">
	<div class="header">
		<a href="/" class="logo">
			<span class="logo-short">
				<svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.3194 29.1562L19.8946 27.8704C17.4389 25.6232 15.4117 23.6829 13.8132 22.0496C12.2146 20.4163 10.9404 18.9567 9.99053 17.6709C9.04067 16.3851 8.3746 15.221 7.99234 14.1784C7.61008 13.1359 7.41895 12.0818 7.41895 11.0161C7.41895 8.93102 8.11976 7.18767 9.52139 5.78604C10.923 4.38441 12.6548 3.68359 14.7167 3.68359C16.0372 3.68359 17.2593 3.99635 18.3829 4.62187C19.5066 5.2474 20.4854 6.15093 21.3194 7.33247C22.2924 6.08142 23.3234 5.16052 24.4123 4.56975C25.5011 3.97898 26.6711 3.68359 27.9221 3.68359C29.984 3.68359 31.7158 4.38441 33.1174 5.78604C34.5191 7.18767 35.2199 8.93102 35.2199 11.0161C35.2199 12.0818 35.0287 13.1359 34.6465 14.1784C34.2642 15.221 33.5982 16.3851 32.6483 17.6709C31.6984 18.9567 30.4242 20.4163 28.8257 22.0496C27.2271 23.6829 25.2 25.6232 22.7442 27.8704L21.3194 29.1562Z" fill="black" />
					<path d="M17.1495 35.8283L15.7247 34.5425C13.2689 32.2953 11.2418 30.355 9.64324 28.7217C8.04468 27.0884 6.77047 25.6288 5.82061 24.3431C4.87074 23.0573 4.20468 21.8931 3.82242 20.8506C3.44015 19.808 3.24902 18.7539 3.24902 17.6882C3.24902 15.6031 3.94984 13.8598 5.35147 12.4582C6.7531 11.0565 8.48486 10.3557 10.5468 10.3557C11.8673 10.3557 13.0894 10.6685 14.213 11.294C15.3366 11.9195 16.3155 12.823 17.1495 14.0046C18.1225 12.7535 19.1535 11.8326 20.2423 11.2419C21.3312 10.6511 22.5012 10.3557 23.7522 10.3557C25.8141 10.3557 27.5459 11.0565 28.9475 12.4582C30.3491 13.8598 31.0499 15.6031 31.0499 17.6882C31.0499 18.7539 30.8588 19.808 30.4766 20.8506C30.0943 21.8931 29.4282 23.0573 28.4784 24.3431C27.5285 25.6288 26.2543 27.0884 24.6557 28.7217C23.0572 30.355 21.03 32.2953 18.5743 34.5425L17.1495 35.8283Z" fill="#DBEA8D" />
				</svg>
			</span>
			<span class="logo-full">Matchmaker</span>
		</a>
		<div class="header-open-close close-icon icons"></div>
	</div>
	<div class="header-open-close slide-icon icons"></div>
	<div class="content">
		<nav>
			<a href="/chat" class="transition-03 active">
				<span class="icons all-chats-icon"></span>
				<span class="name">All chats</span>
			</a>
			<a href="/matches" class="transition-03" data-id="matches">
				<span class="icons matches-icon"></span>
				<span class="name">Matches</span>
				<span class="count transition-03"></span>
			</a>
			<a href="/find-matches" class="transition-03">
				<span class="icons find-icon"></span>
				<span class="name">Find Matches</span>
			</a>
			<a href="/search" class="transition-03">
				<span class="icons search-icon"></span>
				<span class="name">Search nearby</span>
			</a>
			<a href="#" class="transition-03">
				<span class="icons cams-icon"></span>
				<span class="name">Livecams</span>
			</a>
			<hr>
			<a href="#" class="transition-03">
				<span class="icons full-icon"></span>
				<span class="name">Full Version (free)</span>
			</a>
			<a href="/settings" class="transition-03">
				<span class="icons settings-icon"></span>
				<span class="name">Settings</span>
			</a>
			<a href="#" class="premium-btn">
				<span class="icons premium-icon"></span>
				<span class="name">Premium</span>
			</a>
		</nav>
	</div>
	<div class="nav-footer" data-href="/ajax/modal_auth" onclick="constriction_chat('thin'); mrzv_popup_ajax(this)">
		<div class="guest-icon-wrap">
			<!-- <div class="icons guest-icon"></div> -->
			<img src="<?php echo e(asset('/images/user_guest.png')); ?>" class="usrPhoto">
		</div>
		<div class="guest-info">
			<div>Guest</div>
			<div>Unknown</div>
		</div>
		<div class="icons dots-icon"></div>
	</div>
</div><?php /**PATH E:\_aX\OD_3.0_all\OD_3.0_mix_dev_swiper\resources\views/layout/layout-menu.blade.php ENDPATH**/ ?>