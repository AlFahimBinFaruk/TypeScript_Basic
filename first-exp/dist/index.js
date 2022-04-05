"use strict";
//normal
let id = 5;
let myName = "fahim";
let isCoding = true;
let x = "This can be anything";
//********************************************** */
//some extra
//this has to be an array that contains only number
let arr = [1, 2, 3, 4];
//this can be an array of anything
let arrTwo = [1, 4243, "fahim", false, { name: "fahim" }];
//******************************************************* */
// **** if you want an array to hold more than one type use Tuple *****
//Tuple(everything have to be in the same order and number)
let person = [
    423,
    "alfahimbin",
    true,
    { x: "someone" },
];
//Tuple Array(order must be maintained)
let company;
company = [
    [1, "fahim"],
    [2, "suhan"],
];
//*************************************************** */
// **** if you want an Variable to hold more than one type use Union *****
//Union
let pid = 22;
//************************************************** */
//Enum
//***** Enum allow us to define a set of named constant either numeric or string
//values will be numeric values by default
var dirOne;
(function (dirOne) {
    dirOne[dirOne["up"] = 1] = "up";
    dirOne[dirOne["down"] = 2] = "down";
    dirOne[dirOne["left"] = 3] = "left";
    dirOne[dirOne["right"] = 4] = "right";
})(dirOne || (dirOne = {}));
var dirTwo;
(function (dirTwo) {
    dirTwo["up"] = "up";
    dirTwo["down"] = "down";
    dirTwo["left"] = "left";
    dirTwo["right"] = "right";
})(dirTwo || (dirTwo = {}));
//************************************************** */
//objects normal way
const userOne = {
    id: 1,
    name: "al fahim",
};
const user = {
    id: 1,
    name: "fahim",
};
//**************************************************** */
//Type Assertion
let cid = 33;
//*******1st method
//let customerId=<number>cid;
//*******2nd method
let customerId = cid;
//*************************************************** */
//Functions
//you can also specify what type of data you will return
function addNum(x, y) {
    return x + y;
}
//console.log(addNum(2,4))
//if you dont want to specify what type of data you want to return
function log(x) {
    console.log("data is", x);
}
const userThree = {
    id: 33,
    name: "al fahim",
};
const p1 = 62;
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.register = () => {
            return `fahim`;
        };
        (this.id = id), (this.name = name);
    }
}
const fahim = new Person(1, "fahim");
//console.log("fahim", fahim);
//extend class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "suhan", "CEO");
//console.log("emp",emp.register())
//Generics -->use to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["fahim", "suhan", "al fahim"]);
//This will throw error as strArr type is string
//strArr.push(5)
