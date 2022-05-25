function doicho() {
    for (var j = 0; j < numArray.length - 1; j++) {
        if (numArray[j] > numArray[j - 1]) {
            var temp = numArray[j];
            numArray[j] = numArray[j - 1];
            numArray[j - 1] = temp;
        }
    }

document.getElementById('doicho').innerHTML ="đổi chổ các phần tử trong mảng :" + numArray;
}