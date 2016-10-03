//Cat Clicker Premium

//declare cats
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

//loop over cats in array
for (var i = 0; i < cats.length; i++) {
	var cat = cats[i];

	//create DOM element for catItem (name)
	var catItem = document.createElement("li");
	catItem.textContent = cat.name;
	console.log(cat.name);

	//Add image and count
	 var catPic = cats[i].image;
	 var catClicks = cats[i].clickCount;
	 console.log(catPic, catClicks);

	 //Create image elements to display catPic & catClicks
	 var currentCat = document.createElement("img");
	 var currentCount = document.createElement("p");

	 //Event listener when user clicks catItem, display catPic & catClicks
	 catItem.addEventListener("click", (function(catpicCopy) {
	 	return function () {
	 		currentCat.src = catpicCopy;
	 		currentCount.innerHTML = catClicks;
	 		document.body.appendChild(currentCat);
	 		document.body.appendChild(currentCount);
	 	};
	 })(catPic));

	 //Event listerner when user clicks catPic
	 currentCat.addEventListener("click", (function(catclicksCopy) {
	 	return function () {
	 		currentCount.innerHTML = catclicksCopy++;
	 	};
	 })(catClicks));


	 //Add catItem to document
	 document.body.appendChild(catItem);

};

