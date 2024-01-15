/**
 *
 *  == Bom
 *  -- location
 *  -- navigator
 *  -- history
 * -----------------
 * == Events
 * -------------------
 */

// function execute() {
// 	location.reload();
// 	location.assign("https://www.google.com.eg/");
// 	location.replace("https://www.google.com.eg/");
// 	location.pathname = "/about.html";
// 	console.log(location.pathname);
// 	location.href = "https://www.google.com.eg/";
// 	console.log(location.href); // get
// }
// function execute() {
// 	location.assign("https://www.google.com.eg/");
// 	// console.log(history);
// }
// function successCB(x) {
// 	console.log(x.coords.latitude);
// 	console.log(x.coords.longitude);
// }

// function errorCB() {
// 	console.log("Incase rejection");
// }

// navigator.geolocation.getCurrentPosition(successCB, errorCB);
/**
 * Events
 * ---------------------
 * 1- add attribute on the element
 * 2- attach function
 * 3- addEventListener
 */

var btn = document.getElementsByTagName("button")[0];
var p = document.getElementsByTagName("p")[0];

// btn.addEventListener("click", changeText);
// btn.addEventListener("click", changeStyle);

// btn.onclick = function (x) {
// 	changeStyle("green");
// };

// var input1 = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");

// input1.addEventListener("focus", function (e) {
// 	input1.style.border = "2px solid blue";
// });
// input1.addEventListener("blur", function (e) {
// 	input1.style.border = "2px solid orange";
// });
// input1.addEventListener("input", function (e) {
// 	if (input1.value.length >= 3) {
// 		input1.style.border = "2px solid green";
// 		errorMsg.style.display = "none";
// 	} else {
// 		input1.style.border = "2px solid red";
// 		errorMsg.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log(e);
// 	console.log("Login success");
// }

// function first() {
// 	console.log("first");
// }
// function second(e) {
// 	e.stopPropagation();

// 	console.log("Second");
// }
// function third(e) {
// 	// e.stopPropagation();
// 	console.log("third");
// }

// function changeText() {
// 	p.innerHTML = "Welcome SWF";
// }

// function changeStyle() {
// 	p.style.background = "red";
// }

// btn.addEventListener("click", changeStyle);
// btn.addEventListener("click", changeText);

// setTimeout(function () {
// 	console.log("Stopped");
// 	btn.removeEventListener("click", changeStyle);
// }, 3000);
/**
 *  == Cookies
 *  == Error Handling
 *
 */

// document.cookie = "username=ali";

// var myDate = new Date();
// myDate.setDate(myDate.getDate() + 3);

// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() - 1);
// // document.cookie = "username=ali;expires=" + myDate;
// // document.cookie = "username=ahmed;expires=" + myDate;
// // document.cookie = "password=1234;expires=" + expireDate;

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + myDate;
// }

// function getAllCookies() {
// 	return document.cookie;
// }

// function deleteCookie(key) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }
// saveCookie("email", "a@a.come");
// try {
// 	//
// 	console.log("ahmed");
// 	console.log("ali");
// 	console.log("End");
// } catch (error) {
// 	console.log(error);

// 	document.write("Connection Error ,,, please try again");
// } finally {
// 	console.log("Final Output");
// }

// throw "My Error";

// function add(x, y) {
// 	if (arguments.length == 0) {
// 		throw "must pass at least two arguments";
// 	}
// 	console.log(x + y);
// }

// add();

var fname = "mona";

for (var i = 0; i < 5; i += 2) {
	console.log(i);
}
