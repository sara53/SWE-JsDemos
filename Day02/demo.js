/**
 *  == Agenda
 * =========================================
 * == Functions
 *     -- User defined Functions
 *            -- function statement
 *            -- function expression
 *            -- call back function
 *            -- (IIFE) -- (Search)
 *
 *     -- built in Functions
 *
 * ===========================================
 *  == String Object
 *  == Array Object
 */

// functions params 2

// user defined -- function statement
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("x : ", x);
// 	console.log("y : ", y);

// 	console.log(x + y);

// 	return "ITI";
// }

// add(3, 7);

// var output = add(10, 20);
// console.log(output);

// add("mona", "ali");
// console.log("============");
// add(true, true);
// console.log( "===========" );
// add()
// add(3, 6, 677, 11);

// // arguments
// add(2, 4); // call
// console.log("--------");
// add(5, 6);
// console.log("------------");
// add(10, 23);

// var result = function () {
// 	console.log("Welcome result");
// };

// result();

// var add = function (x, y) {
// 	return "Welcome from iti";
// };

// var result = add(5, 7);

// console.log(result);

// console.log(fname); // undefined, ali
// var fname = "ali";
// console.log(fname);

// var fname;
// console.log(fname);
// fname = "Ali";
// console.log(fname);
// function add(x, y) {
// 	console.log(x + y);
// }

// add(4, 5);
//add(4, 5);
// console.log(add);

// var add = function (x, y) {
// 	console.log(x + y);
// };

// add(4, 6);

// var dotNet = function () {
// 	console.log("Hello dot net");
// };
// var mearn = function () {
// 	console.log("Hello mearn track");
// };

// IIFE
// (function () {
// 	console.log("welcome");
// } )();

// function greet(x) {
// 	console.log(" x : ", x);
// 	dotNet();
// }

// greet("mona");

// greet(dotNet);
// console.log("======");

// greet(mearn);
// console.log("======");

// greet(function () {
// 	console.log("Welcome inner");
// });

/** ---------
 * String
 * -----------------------
 *  == length
 * ----------------------
 * == concat
 * == charAt --> return char
 * == indexOf --> return index
 * == lastIndexOf --> return index
 * == toUpperCase
 * == toLowerCase
 * == includes
 * == startsWith
 * == endsWith
 * == trim
 * == trimStart
 * == trimEnd
 * == split
 *
 *
 * --------- */

// var fname = "HEllo;from;iti";

// var result = fname.split("");

// console.log(result);

// console.log(fname.length);
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }
/**===========
 * length
 *----------------------------
 * == push ==>
 * == unshift ==>
 * == pop ==>
 * == shift
 * == concat
 * == reverse
 * == sort --> (search)
 * == join
 * ======== */

// var fname = "ahmed"; // demha

// console.log(fname.split("").reverse().join(""));

// var studentsNames = ["mona", true, "123", "ahmed"];

// var result = studentsNames.join("==");
// console.log(result);
// console.log(studentsNames);

// studentsNames.reverse();
// studentsNames.sort(function () {});
// var result = studentsNames.concat([1, 3, 5]);
// console.log(result);
// studentsNames.shift();
// studentsNames.shift();
// studentsNames.pop();
// studentsNames.unshift("123");
// studentsNames.unshift( true );

// studentsNames.push(123);
// studentsNames.push(true);

// studentsNames[0] = "mona"; // set
// studentsNames[1] = "ali"; // set

// console.log(String("[1,2,3]"));
