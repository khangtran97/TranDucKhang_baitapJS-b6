document.getElementById('btnTinh').addEventListener('click', () => {
    var content = '';
    for(var i = 1; i<=10;i++) {
        if(i%2!=0) {
            content+= "<div style='background: blue;width:100%;height:25px'></div>"; 
        } else {
            content+= "<div style='background: red;width:100%;height:25px'></div>"; 
        }
    }
    document.getElementById('thongBao').innerHTML = content;
})