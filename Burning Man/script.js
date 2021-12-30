window.onload = function () {
	let email = document.getElementById('email')
	let ok = document.getElementById('ok')
	let captcha = document.getElementById('cap');
	let err = document.getElementById('email_err');

	let pubg = document.getElementById('pubg');
	let popups = document.querySelectorAll('#pubg > *');
	let names = ['tickets', 'contacts'];
	function clear() {
		pubg.style.display = 'none';
		popups.forEach(el => {
			el.style.display = 'none';
			el.style.opacity = '0';
		});
	}

	names.forEach(function (el, ind) {
		window[el] = function () {
			captcha.checked = false;
			err.innerHTML = '&nbsp;';
			clear();
			pubg.style.display = 'flex';
			popups[ind].style.display = 'flex';
			// let delta = 25;

			let vals = {
				op: 0,
				sz: 25
			};
			let _a = setInterval(() => {
				vals.op += (1 / 5);
				vals.sz += 15;
				['opacity&__x&op', 'transform&scale(__x%)&sz'].forEach(prop => {
					let parts = prop.split('&');
					let func = parts[1].replace('__x', vals[parts[2]]);
					popups[ind].style[parts[0]] = func;
				});
				if (vals.op >= 1) clearTimeout(_a);
			}, 15);
		}
	});
	[...document.getElementsByClassName('close')].forEach(el =>
		(el.onclick = () => clear())
	);

	let regex = /\w+@\w+.\w+/;
	ok.onclick = () => {
		let exc = '';
		let emv = email.value.trim();

		if (emv == '' || emv.replace(regex, '') != '') exc = 'Your email looks incorrect';
		else if (!captcha.checked) exc = 'Please send the captcha';
		else return valid(emv);

		err.innerHTML = exc;
	}
	function valid(em) {
		alert(em);
		clear();
		setTimeout(() => alert('BOO'), 1500);
	}
}