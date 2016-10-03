
var cats = [
	{
		"name":"Sleepy Cat",
		"image":"img/cat_sleepy.jpeg",
		"clickCount":"0"
	},
	{
		"name":"Dopey Cat",
		"image":"img/cat_dopey.jpeg",
		"clickCount":"0"
	},
	{
		"name":"Bashful Cat",
		"image":"img/cat_bashful.jpeg",
		"clickCount":"0"
	},
	{
		"name":"Grumpy Cat",
		"image":"img/cat_grumpy.jpeg",
		"clickCount":"0"
	},
	{
		"name":"Doc",
		"image":"img/cat_doc.jpeg",
		"clickCount":"0"
	}

];



for (var i = 0; i < cats.length; i++) {
	var cat = cats[i];
	var catList = document.getElementById("catList");

	var catItem = document.createElement("li");
	catItem.textContent = cat.name;
	console.log(cat.name);
	catList.appendChild(catItem);

	document.body.appendChild(catList);

	//Add image and count to div
	 var catPic = cats[i].image;
	 var catClicks = cats[i].clickCount;
	 console.log(catPic, catClicks);

	//Listen for clicks on cat name
	var index = i;
	var elem = document.getElementsByTagName("li");
	elem[index].addEventListener("click", function() {

		//Put image in selectedCat div
		var currentCat = document.getElementById("selectedCat");

		var catDisplay = document.createElement("img");
		catDisplay.src = cats[index].image;
		//catDisplay.src = catPic;
		//catDisplay.innerHTML = catClicks;
		console.log(elem, catDisplay.src);
		currentCat.appendChild(catDisplay);

		document.body.appendChild(currentCat);

	});

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