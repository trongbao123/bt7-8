function sapXepTangDan() {
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtsapxep").innerHTML = "sắp xếp : " + numArray;
}