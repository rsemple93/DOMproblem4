/* Write function that displays item in the list 
and counts number of items in the dropdown list */

function numOfItems() {
	let num = document.getElementById("color").length;
	console.log("Number of items in the dropdown list: " + num);

	let list = document.getElementById("color");
	let opts = list.options;
	let array = new Array();
	for(i = 0; i < opts.length; i++) {
		array.push(opts[i].value);
	}
	console.log(array)
}

numOfItems();  