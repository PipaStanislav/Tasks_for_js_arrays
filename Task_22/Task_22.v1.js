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
var arr = [];
function randomArr ( min, max, numbers, sortingType){
	console.log (arr);
	for ( var i = 0; i <= numbers ; i++ ){
		arr[i] =  Math.floor(Math.random() * (max - min)) + min;
	}
	if (sortingType == 0){
		var result = arr.concat();
		result.sort(sortAscending);
		document.write (""
			,"<br>" + arr
			,"<br>" + result
			,"<br>" + "By ascending"
			,"<br>"
			);
		return [arr, result]
	}
	if (sortingType == 1){
		var result = arr.concat();
		result.sort(sortDecrease);
		document.write (""
			,"<br>" + arr
			,"<br>" + result
			,"<br>" + "By decrease"
			,"<br>"
			);
		return [arr, result]
	}		
}
