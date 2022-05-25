function ktsn() {
    var dem = 0;
    for (var i = 0; i <= numArray.length; i++) {
        if (numArray % i == 0) {
            dem = dem + 1;
        }
    }
    return 0;
}


function mangsothuc() {
    var songuyen = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] = ktsn) {
            songuyen++;
        }
    }
    document.getElementById("txtsonguyentocuamang").innerHTML= "có: " + songuyen + " số nguyên trong mảng số thực";
}