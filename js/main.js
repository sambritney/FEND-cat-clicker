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

	 //Create image element to display catPic
	 var currentCat = document.createElement("img");

	 //Event listener when user clicks catItem, display catPic
	 catItem.addEventListener("click", (function(catCopy) {
	 	return function () {
	 		currentCat.src = catCopy;
	 		document.body.appendChild(currentCat);
	 	};
	 })(catPic));

	 //Add catItem to document
	 document.body.appendChild(catItem);

};

