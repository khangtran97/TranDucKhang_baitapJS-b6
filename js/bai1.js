function timSoNguyenDuong() {
    var sum = 0;
    var n = 0;
    for (var i = 1; i <= 10000; i++) {
        if (sum + i <= 10000) {
            sum += i;
            n = i;
            console.log(sum, i);
        } else {
            sum += i;
            break;
        }
    }
    console.log(sum, i);
}

timSoNguyenDuong();