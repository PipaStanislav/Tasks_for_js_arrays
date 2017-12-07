function sortAscending(i, ii) { // По возростанию
	if (i > ii)
		return 1;
	else if (i < ii)
		return -1;
	else
		return 0;
}
function sortDecrease(i, ii) { // По убыванию
	if (i > ii)
		return -1;
	else if (i < ii)
		return 1;
	else
		return 0;
}
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var num = getRandomInt(1, 21); 
var arr2 = arr.concat();
		arr2.sort(compareRandom);
var x =	arr2.indexOf(num);
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function compareRandom() {
  return Math.random() - 0.5;
}
var dec = [];
var asc = [];
for (var i = 0; i <= arr2.length; i++){
	if (i < x){
		dec.push(arr2[i]);
	}
	if (i > x){
		asc.push(arr2[i]);
	}
}
var dec2 = dec.slice().sort(sortDecrease);
var asc2 = asc.slice().sort(sortAscending);

var unitedArray = dec2.concat(num, asc2);

console.log(""
	,"\n\t arr" , arr
	,"\n\t arr2" ,	arr2
	,"\n\t "
	,"\n\t numm" , num
	,"\n\t x" , x
	,"\n\t "
	,"\n\t dec" , dec
	,"\n\t dec2" , dec2
	,"\n\t "
	,"\n\t asc" , asc
	,"\n\t asc2" , asc2
	,"\n\t "
	,"\n\t Result" , unitedArray
);
document.write (""
	,"<br> arr " , arr
	,"<br> arr2 " ,	arr2
	,"<br> "
	,"<br> numm " , num
	,"<br> x " , x
	,"<br> "
	,"<br> dec " , dec
	,"<br> dec2 " , dec2
	,"<br> "
	,"<br> asc " , asc
	,"<br> asc2 " , asc2
	,"<br> "
	,"<br> Result " , unitedArray
	);