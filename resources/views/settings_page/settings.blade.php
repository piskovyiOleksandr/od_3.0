@extends('layout/layout')

@section('title') Cats Matches @endsection

@section('content')

<div class="main main-settings">
	<div class="header">
		<h1>Settings</h1>
	</div>
	<div class="settings-content">

		<div class="settigs-nav-block">
			<div class="usr-settings">
				<div class="usr-block">
					<div class="usr-pic">
						<img class="usrPhoto" src="{{ asset('/images/user_guest.png') }}">
						<div class="usr-pic-change">
							<input type="file" id="usrPhotoFile">
						</div>
					</div>
					<div class="usr-wrap">
						<div class="usr-name">Artem Kotov</div>
						<div class="usr-email">artemkotov@gmail.com</div>
					</div>
				</div>

				<div class="tabs-settings">
					<div class="tab profile active" data-tab="profile">
						<span class="tab-icon tab-icon-user"></span>
						<span class="tab-name">My profile</span>
					</div>
					<div class="tab notifications" data-tab="notifications">
						<span class="tab-icon tab-icon-notif"></span>
						<span class="tab-name">Notifications</span>
					</div>
					<div class="tab security" data-tab="security">
						<span class="tab-icon tab-icon-sec"></span>
						<span class="tab-name">Security</span>
					</div>
					<div class="tab plan" data-tab="plan">
						<div class="tariff">Tariff plan: <span class="plan-vl">Free plan</span> </div>
						<div class="btn-chng-plan">
							<span class="icon-chng-paln"></span>
							Change plan
						</div>
					</div>
				</div>
			</div>

			<div class="profile-settings">
				<button class="btn-deact" type="button">Deactivate profile</button>
				<button class="btn-out" type="button">Log out</button>
			</div>

		</div>

		<div class="tab-settings-content">
			<div class="tab-content profile active">
				<div class="tab-ttl">My profile</div>

				<div class="input-wrap">
					<input class="input" required='' type='text'>
					<label class="input-label" alt='Nickname' placeholder='Nickname'></label>
					<div class="icon icon-input-delete"></div>
					<div class="err-msg">Error message</div>
				</div>


				<div class="radio-wrap">
					<div class="radio-ttl">Gender</div>
					<div class="radio-labels">
						<label>
							<input type="radio" checked="checked" name="gender" value="male" class="user-gender"> Male
						</label>
						<label>
							<input type="radio" name="gender" value="female" class="user-gender"> Female
						</label>
					</div>

				</div>

				<div class="input-wrap">
					<input class="input" required='' type='text'>
					<label class="input-label" alt='Age' placeholder='Age'></label>
					<div class="icon icon-input-delete"></div>
					<div class="err-msg">Error message</div>
				</div>

				<div class="input-wrap">
					<input class="input user-language" required=''  type='text'>
					<label class="input-label" alt='Language' placeholder='Language'>
					</label>
					<div class="icon icon-input-edit"></div>
					<div class="err-msg">Error message</div>
				</div>
				<button type="button" class="btn-save-profile">
					Save changes
				</button>
			</div>




			<div class="tab-content notifications">

				<div class="tab-ttl">Notifications</div>


				<div class="settings-toggle on">
					<input type="checkbox">
					<span class="settings-slider"></span>
					<span class="label">New chat</span>
				</div>
				<div class="settings-toggle on">
					<input type="checkbox">
					<span class="settings-slider"></span>
					<span class="label">New match</span>
				</div>
				<div class="settings-toggle on">
					<input type="checkbox">
					<span class="settings-slider"></span>
					<span class="label">New message</span>
				</div>
				<div class="settings-toggle">
					<input type="checkbox">
					<span class="settings-slider"></span>
					<span class="label">New user nearby</span>
				</div>
				<div class="settings-toggle on">
					<input type="checkbox">
					<span class="settings-slider"></span>
					<span class="label">Сontests, news and platform updates</span>
				</div>


			</div>


			<div class="tab-content security">

				<div class="tab-ttl">Security</div>
				<div class="input-wrap">
					<input class="input" required='' type='email'>
					<label class="input-label" alt='Email' placeholder='Email'></label>
					<div class="err-msg">Error message</div>
				</div>

				<div class="input-wrap">
					<input class="input" required=''  type='password'>
					<label class="input-label" alt='New password' placeholder='New password'></label>
					<div class="icon icon-input-delete"></div>
					<div class="err-msg">Error message</div>
				</div>

				<div class="input-wrap">
					<input class="input" required=''  type='password'>
					<label class="input-label" alt='Repead password' placeholder='Repead password'>
					</label>
					<div class="icon icon-input-edit"></div>
					<div class="err-msg">Error message</div>
				</div>
				<button type="button" class="btn-save-profile">
					Save changes
				</button>
			</div>

			<div class="tab-content plan">
				<div class="tab-ttl">Pricing Plan</div>
				<div class="tab-txt">Choose the plan that suits you best</div>

				<div class="plan-cards">

					<div class="plan-card">
						<div class="price-wrap">
							<span class="price">$10</span>
							<span class="period">/ per week</span>
						</div>
						<div class="plan-name">Basic</div>
						<ul class="plan-includ-list">
							<li>Up to 5 users</li>
							<li>Max 200 objects / month</li>
							<li>Unlimited queries</li>
							<li>Unlimited analytics</li>
						</ul>
						<button type="button" class="btn-plan">Get started</button>
					</div>

					<div class="plan-card optimum">
						<div class="optimum-wrap">
							<div class="price-wrap">
								<span class="price">$0,01</span>
								<span class="period">/ per month</span>
							</div>
							<div class="plan-name">Optimum</div>
							<ul class="plan-includ-list">
								<li>Up to 50 users</li>
								<li>Unlimited objects</li>
								<li>Unlimited queries</li>
								<li>Unlimited analytics</li>
							</ul>
							<button type="button" class="btn-plan">Buy for free</button>
						</div>
						<div class="sale-timer-wrap">
							<div class="sale-timer">
								<div class="timer"></div>
								<div class="sale">Sale</div>
							</div>
							<div class="sale-info">
								Two hourse sale
							</div>
						</div>
					</div>

					<div class="plan-card">
						<div class="price-wrap">
							<span class="price">$299</span>
							<span class="period">/ per year</span>
						</div>
						<div class="plan-name">Full</div>
						<ul class="plan-includ-list">
							<li>Up to 50 users</li>
							<li>Unlimited objects</li>
							<li>Unlimited queries</li>
							<li>Unlimited analytics</li>
						</ul>
						<button type="button" class="btn-plan">Get started</button>
					</div>

				</div>

			</div>
		</div>
	</div>
</div>
@endsection

@section('script')
<script type="text/javascript">
	// Change user photo 
	document.querySelector('#usrPhotoFile').addEventListener("change", function() {
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			localStorage.setItem("user-image", reader.result);
			const recentImageDateUrl = localStorage.getItem("user-image");

			if (recentImageDateUrl) {
				document.querySelectorAll(".usrPhoto").forEach(element => {
					element.setAttribute("src", recentImageDateUrl);
				});
				document.querySelectorAll(".usrPhoto")
			}
		});

		reader.readAsDataURL(this.files[0]);
	});
</script>
@endsection