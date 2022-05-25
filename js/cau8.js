
function ktnt()
{
	var dem=0;
	for(var i=1;i<=numArray.length;i++)
	{
		if(numArray%i==0)
		{
			dem=dem+1; 
		}
	}
	if(dem==2)
	{
		return 1;
	}
	return 0;
}

//Hàm số nguyên tố đầu tiên

function songuyento()
{
    var a = numArray[0];
	for(var i=0;i<numArray.length;i++)
	{
		if(ktnt(a[i])==1)
		{
			var lc=a[i];
			return lc;
		}
	}document.getElementById("txtsonguyento").innerHTML = a;
	return -1;
}
