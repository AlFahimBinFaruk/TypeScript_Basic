//normal
let id: number = 5;
let myName: string = "fahim";
let isCoding: boolean = true;
let x: any = "This can be anything";

//********************************************** */

//some extra
//this has to be an array that contains only number
let arr: number[] = [1, 2, 3, 4];

//this can be an array of anything
let arrTwo: any[] = [1, 4243, "fahim", false, { name: "fahim" }];

//******************************************************* */

// **** if you want an array to hold more than one type use Tuple *****

//Tuple(everything have to be in the same order and number)
let person: [number, string, boolean, object] = [
  423,
  "alfahimbin",
  true,
  { x: "someone" },
];

//Tuple Array(order must be maintained)
let company: [number, string][];
company = [
  [1, "fahim"],
  [2, "suhan"],
];

//*************************************************** */

// **** if you want an Variable to hold more than one type use Union *****
//Union
let pid: string | number = 22;

//************************************************** */

//Enum
//***** Enum allow us to define a set of named constant either numeric or string

//values will be numeric values by default
enum dirOne {
  up = 1,
  down,
  left,
  right,
}

enum dirTwo {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

//************************************************** */

//objects normal way
const userOne: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "al fahim",
};

//objects organized way
type UserTwo = {
  id: number;
  name: string;
};

const user: UserTwo = {
  id: 1,
  name: "fahim",
};

//**************************************************** */

//Type Assertion
let cid: any = 33;

//*******1st method
//let customerId=<number>cid;

//*******2nd method
let customerId = cid as number;

//*************************************************** */

//Functions
//you can also specify what type of data you will return
function addNum(x: number, y: number): number {
  return x + y;
}
//console.log(addNum(2,4))

//if you dont want to specify what type of data you want to return
function log(x: string | number): void {
  console.log("data is", x);
}

//************************************************** */

//Interfaces --> interface and type are same,but always use interface in case of Objects and type in case of others.

//*** read only means you can only read the data cannot assign anything to it */

//***** ? means optional */
interface userInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const userThree: userInterface = {
  id: 33,
  name: "al fahim",
};

//you cannot use premitives and unions with interface,

//but you can use them with Type(this is the main difference between interface and types)
type Point = number | string;
const p1: Point = 62;

//************************************************* */

//Using an interface with function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

//************************************************* */

//classes

//****private can only be accessed inside the same class
//****protected can be accessed inside the class and the class that it has extended to

interface PersonInterface {
  id: number;
  name: string;
  //register in a function which will return a string.
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
  register = () => {
    return `fahim`;
  };
}

const fahim = new Person(1, "fahim");
//console.log("fahim", fahim);

//extend class
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "suhan", "CEO");
//console.log("emp",emp.register())

//Generics -->use to build reusable components

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["fahim", "suhan", "al fahim"]);

//This will throw error as strArr type is string
//strArr.push(5)
