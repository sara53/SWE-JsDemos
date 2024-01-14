/** Dom
 * = How to change Style
 *  == style
 *  == className
 *  == classList
 * 		-- add
 * 		-- remove
 * 		-- toggle
 *
 * == How to deal with attributes
 * == attributes
 * --getAttribute
 * -- setAttribute
 * -- hasAttribute
 * -- removeAttribute
 * ==CreateElement From js and append it to dom tree
 */

/** Bom
 *  == Window
 *  == screen // self study
 *  == History
 *  == navigation
 *  == location
 *
 *
 */
// var myP = document.getElementById("myP");

// var link1 = document.links[0];

// var img = document.images[0];
// function execute() {
// img.setAttribute("src", "./Images/3.jpg");
// console.log(img.getAttribute("src"));
// if (link1.hasAttribute("id")) {
// 	link1.removeAttribute("id");
// } else {
// 	link1.setAttribute("id", "newID");
// }
// link1.removeAttribute("id");
// link1.setAttribute("class", "jsClass");
// console.log(link1.getAttribute("href"));
// }

// style object
// function changeStyle() {
// 	myP.style.backgroundColor = "red";
// 	myP.style.padding = "30px";
// 	myP.style.color = "white";
// }

// ClassName
// function changeStyle() {
// 	myP.className += " jsClass"; // override
// 	// console.log(myP.className); // get
// }
//classList
// function changeStyle() {
// 	myP.classList.toggle("jsClass");
// 	// myP.classList.remove("content");
// 	// myP.classList.add("jsClass");
// 	// console.log(myP.classList);
// }

// insertBefore()
//AddAdjustElement
// var parent = document.getElementById("parent");
// var p = document.createElement("p");
// var span = document.createElement("span");
// var text = document.createTextNode("Welcowe SWF");

// p.append(text);

// var result = p.appendChild(span);
// console.log(result);
// span.innerHTML = "Welcome Span";
// span.setAttribute("class", "jsClass");

// function execute() {
// 	parent.after(p);
// 	// parent.append(p, span);
// 	// parent.appendChild(p, span);
// }

// p.setAttribute("id", "myID");
// p.setAttribute("class", "jsClass");
// p.innerHTML = "Welcome SWF";
// var myWind;
// function openNewWindow() {
// 	myWind = window.open("about.html", "", "width=200,height=200");
// }
// function closeWindow() {
// 	myWind.close();
// }
// function moveToWindow() {
// 	myWind.moveTo(400, 400);
// }
// function moveByWindow() {
// 	myWind.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWind.resizeTo(300, 300);
// }
// function resizeByWindow() {
// 	myWind.resizeBy(100, 100);
// }

//alert("Test");

// alert("Second");

// setTimeout(function () {
// 	open("about.html");
// }, 3000);

// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 3000);

// var p = document.getElementById("result");
// var myInterval;
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		p.innerHTML = i++;
// 	}, 1000);
// }
// function stop() {
// 	clearInterval(myInterval);
// }

// var output = document.getElementById("output");
// function execute() {
// 	output.style.display = "block";
// 	setTimeout(function () {
// 		output.innerHTML = "<a>Download Now</a>";
// 	}, 3000);
// }
