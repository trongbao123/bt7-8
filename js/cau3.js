function TimSoNhoNhat() {
    var min = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }
    document.getElementById("txttimsonhonhat").innerHTML = "số nhỏ nhất : " + min;
}