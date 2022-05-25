function soduongnhonhat() {
    var min = numArray[0];
    for (var i =0; i < numArray.length; i++) {
        if (numArray[i] <= min && numArray[i]>0) {
            min = numArray[i];
        }
    } 
    document.getElementById("txttimsoduongnhonhat").innerHTML = "số dương nhỏ nhất : " + min;
 
}
