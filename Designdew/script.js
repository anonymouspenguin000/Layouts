window.onload = function () {
    let stl = '1px solid #f00';
    document.getElementsByTagName('form')[0].onsubmit = function () {
        if (this.query.value == '::bounds') {
            document.querySelectorAll('body *').forEach(function (el) {
                el.style.border = stl;
            });
            return false;
        }
    }
}