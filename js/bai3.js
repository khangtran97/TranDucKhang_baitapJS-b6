document.getElementById('btnTinh').addEventListener('click', () => {
    var n = document.getElementById('inpN').value;
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
        console.log(giaiThua);
    }

    document.getElementById('thongBao').innerHTML = giaiThua;
})