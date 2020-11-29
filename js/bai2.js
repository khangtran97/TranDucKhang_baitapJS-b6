function luyThua(x, n) {
    return Math.pow(x, n);
}

document.getElementById('btnTinh').addEventListener('click', () => {
    var x = document.getElementById('inpX').value;
    var n = document.getElementById('inpN').value;
    var kq = 0;
    for (var i = 1; i <= n; i++) {
        kq += luyThua(x,i);
        console.log(kq, i);
    }
    
    document.getElementById('thongBao').innerHTML = kq;
})