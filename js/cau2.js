function demSoDuong() {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }

    document.getElementById("txtdemsoDuong").innerHTML = "có : " + count + " số dương trong mảng";
}