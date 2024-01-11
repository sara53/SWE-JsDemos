/** Agenda
 * ----------------------
 *  == Object (access/read write)
 *  == Math Object
 *  == Dom Tree
 *  == Dom Object
 *      -- How to select Elements From Dom
 *      -- How to Change Content
 */

// Object --> Properties --> Methods
/**
 * Prop --> key:value [any datatype]
 * -------
 *  == dot notation
 *  == subscript notation
 */

// console.log(person[test]);

// console.log(person["test"]);
// console.log(person.test); //

// person["fname"] = "mona";
// person["gender"] = "female";
// console.log(person["address"]["city"]);
// console.log(person["address"].city);
// console.log(person.address["city"]);

// console.log(person["fname"]);
// console.log(person["colors"][0]); // get
// var colors = person.colors;

// for (var i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }

// console.log(person.address.city);
// console.log(person.address.code);

// var address = person.address;
// person.fname = "ahmed"; // set , override
// person.color = "red"; // add

// console.log(address.city);
// console.log(address.code);

// // get
// console.log(person.fname);
// console.log(person.age);
// console.log(person.address);
// console.log(person.color);

// user defined object
// var test = "Ali";
// var person = {
// 	fname: test,
// 	age: 20,
// 	// method
// 	display: function () {
// 		console.log("Welcome from display");
// 		return "ITI";
// 	},
// };
// var result = person.display;
// console.log(result());

// var fname = "hello";

// console.log(fname.length);

// var result = fname.charAt(0);
// console.log(result);

// console.log(Math);

// var fname = new String("hello");

/**
 * Date Object (self Study)
 *
 * ---------------------------
 * == PI
 * ------
 *  == sqrt
 *  == pow
 *  == abs
 *  == sign
 *  == max
 *  == min
 *  == round
 *  == floor
 *  == random
 *  == sin
 */

// console.log(Math.sin((90 * Math.PI) / 180));
// console.log(Math.floor(Math.random() * 40));

/***
 * Dom
 * --------------------------
 *  == getElementById --> element | null
 *  == getElementsByClassName -->  []
 *  == getElementsByTagName -->  []
 *  == getElementsByName -->  []
 * == querySelectorAll
 * == querySelector
 * ------------------------------------
 * == document.body
 * == document.links
 * == document.images
 * == document.forms
 * == firstChild
 * == lastChild
 * == firstElementChild
 * == lastElementChild
 * == childNodes
 * == children
 *
 *
 */
// var test = document.querySelector("#parent");
// console.log(element.children);
// console.log(test.childNodes);
// console.log(element.firstElementChild);

// console.log(document.images);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }

// var p = document.getElementById("myP");
// function show() {
// 	p.innerHTML = "Hello WSF";
// 	// p.innerHTML = "<h1>Hello SWF</h1>"; // set
// 	// console.log(p.innerText);
// }

var input1 = document.getElementById("input1");
var result = document.getElementById("result");
var inputs = document.getElementsByName("choose");
function execute() {
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			result.innerHTML = inputs[i].value;
		}
	}
}
