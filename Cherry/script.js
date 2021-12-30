window.onload = function () {
    let els = document.querySelectorAll('.fl-hl, a, li::marker, footer ul');
    // let els = [document.body];
    let deg = 0;
    let keyword = 'emerald';
    let comb = '';
    let tmo;
    window.onkeydown = (evt) => {
        comb += evt.key;
        clearTimeout(tmo);
        tmo = setTimeout(() => {
            comb = '';
        }, 1500);
        if (comb.slice(-keyword.length) == keyword) {
            // alert("Ooops, looks like I ate not a cherry... That was a mushroom :(");
            setInterval(() => {
                [...els].forEach(el => {
                    el.style.filter = `hue-rotate(${deg}deg)`;
                    deg++
                });
            }, 15);
        }
    }
}