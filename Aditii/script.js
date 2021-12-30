window.onload = function () {
	document.querySelector('img.burger').onpointerup = () => {
		document.querySelector('.topmenu').classList.add('burger-active');
	}
	document.querySelector('.topmenu li.close').onpointerup = () => {
		document.querySelector('.topmenu').classList.remove('burger-active');
	}
}