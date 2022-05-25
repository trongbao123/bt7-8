function SoChanCuoi() {
    var arraychan = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            arraychan.push(numArray[i]); 
        }
    }
    document.getElementById('txtsochancuoi').innerHTML = " số chẵn cuối cùng của mảng : " + arraychan[arraychan.length-1];
    return -1;
}

