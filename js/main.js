var numArray = [];

function themSo() {
    var num = Number(document.getElementById("number").value);

    numArray.push(num);

    document.getElementById("txthienso").innerHTML = "xuất mảng: " + numArray;
}


function tinhTongSoDuong() {
    var tong = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            tong += numArray[i]
        }

    }
    document.getElementById("txtXuatTong").innerHTML = "Tổng số Dương: " + tong;
}

