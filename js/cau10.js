
function sosanh() {
    var count = 0;
    var soam = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        } else if (numArray[i] < 0) {
            soam++;
        }
    }

    var so = "";
    if (count < soam) {
        so = "số âm nhiều hơn số dương";
    } else if (count > soam) {
        so = "số dương nhiều hơn số âm";
    }
    document.getElementById("txtdemsoDuong").innerHTML = "có : " + count + " số dương trong mảng " + "<br> có :" + soam + " số âm trong mảng" + "<br>số lượng: " + so;
}

