
var cats = [
	{
		"name":"Sleepy Cat",
		"image":"img/cat_640.jpg",
		"clickCount":"0"
	},
	{
		"name":"Dopey Cat",
		"image":"",
		"clickCount":"0"
	},
	{
		"name":"Bashful Cat",
		"image":"",
		"clickCount":"0"
	},
	{
		"name":"Grumpy Cat",
		"image":"",
		"clickCount":"0"
	},
	{
		"name":"Doc",
		"image":"",
		"clickCount":"0"
	}

];



for (var i = 0; i < cats.length; i++) {
	var cat = cats[i];
	var catList = document.getElementById("catList");

	var elem = document.createElement("li");
	elem.textContent = cat.name;
	console.log(cat.name);
	catList.appendChild(elem);

	document.body.appendChild(catList);
};







	// <script>
	// // create variable for counter
	// var clickCount = 0

	// //listen for clicks on cat image and increase counter
	// var elem = document.getElementById("cat");
	// elem.addEventListener("click", function () {
	// 	count.innerHTML = clickCount +=1;
	// }, false);
	// </script>