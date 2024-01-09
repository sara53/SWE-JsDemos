/** var
 *
 * == redeclare
 * == reassign
 */

// var fname;

// fname = "ali";
// console.log(fname);

// var fname = null;
// console.log(typeof fname);

// var fname = "ali"; // string

// fname = "ahmed";

// fname = true;

// console.log(fname);
// var fname = "mona"; //

// console.log(typeof fname);
// var num1 = 123; // integer

// var flag = true; // boolean

// camelCase
// first
// firstSecond
// firstSecondThird

/** Datatypes
 * -----------------------
 * == primitive Datatype
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 *
 * == Reference Datatype
 *  == object
 *
 *
 */
/** typeof */
// console.log(typeof fname);
// console.log(typeof num1);
// console.log(typeof flag);
/** */

// var fname = String(10);
// console.log(fname);
// console.log(typeof fname);

/** Falsy Values
 * -----------------
 *  == 0
 *  == false
 *  == ""
 *  == NaN
 *  == undefined
 *  == null
 *
 *
 */
// var flag = true;

// var flag = Boolean("asdfgh");
// console.log(flag);
// console.log("===================");
// // var num = 10;

// var num = Number("mona");
// console.log(num); // Not a number
// console.log(typeof num);
/**======================================= */
/** Arith operator ( + , - , / , *)
 * --------------------------------------
 *
 *  [+] ==> number + number ==> add
 *     ==> string + string ==> concat
 * ===========================================
 * [==]  --> (values Only)
 * [===] --> (values & Datatype)
 *
 */

// var x = true; // boolean --> 1 --> Number

// var y = "true"; // string --> NaN --> Number

// console.log(x == y);
// console.log(x === y);

// coercion - js engine converts automatic from datatype to anther datatype

// var num1 = 10;
// var num2 = "mona";

// console.log(num1 - num2);
/** ================Logical Operator
 * and
 *
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 *------------------------------- or
        true || true --> true
        true || false --> true
        false || true --> true
        false || false --> false
 *

        Not 

        true ==> false 
        false ==> true
 * ============= */
/*****
 *
 * "mona" && "ola"
 *  true && true
 *
 *
 * 0 && "ahmed"
 * false && --> false
 *
 *
 *
 * 0 || "ahmed"
 *
 *
 * alaa ||
 * **** */

var color = "green";

// (condition) ? // true : // false
// if ( color == "red" )
//     console.log( "red" );
// else console.log("else");

// color == "red" ? console.log("red") : console.log("Else");
// for (var i = 0; i < 4; i++) {
// 	console.log(i);
// }

// switch ( color ) {
//     case "red":
//         console.log( "red" )
//         break;

//     default:
//         console.log("defa")
// }

// var test = NaN;

// if (isNaN(test)) {
// 	console.log("ali");
// }
/**  */
// var num = Number(prompt("enter your Number", 40));
// console.log(num + 20);

// alert("you deleted this item");

// var result = confirm("are you sure you want to delete this item");
// result ? console.log("Item deleted") : console.log("Operation cancelled");

// document.writeln("Hello SWF");

// document.writeln("<h1 class='test'>Welcome from js class</h1>");
// var i = 5;

// for (var i = 1; i < 7; i++) {
// 	document.writeln("<h" + i + ">Welcome SWF<h" + i + "/>");
// }

// var fname = "ali";

// document.writeln("<h"+i+"> welcome " + fname + " from iti</h1>");
