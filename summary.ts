// Number Type
// Manually infering the type
let myNum: number = 50;
// Automtically infering the type
let newNum = 40;

// String Type
const myName = "hello"; // type automatically inferred
const yourName: string = "Green"; // manually assigned type

// *A good rule of thumb is to allow typescript infer the type.

// Boolean Type
let isStrongPassword: boolean = "password".length >= 6;
let isStrongPassword2 = "password".length >= 6;

// When to assign types
// when you have a variable that is not assigned a value, then a good practise is to manually specify the type

// BAD PRACTISE
let output;

output = [];
output = "";

// GOOD PRACTISE
let outputGood: string;

outputGood = "this is an output";

// multiple types
let strNum: string | number;

strNum = 45;
strNum = "45";

// Object
const obj: {
  fName: string;
  lName: string;
  phone: string;
  age: number | string;
} = {
  fName: "Bright",
  lName: "Green",
  phone: "234 607 4904",
  age: 50,
};

obj.age = "45";

// Arrays

const arrOfStr = ["bright", "random", "thoughts"];

// multiple types
const arrOfStr2: (string | number)[] = [];
arrOfStr2[0] = "sdsd";
arrOfStr2.push(45);

// Array of objects
const arrObj: { name: string; isAdmin: boolean }[] = [];

arrObj.push({
  name: "Bright",
  isAdmin: false,
});

// Array of arrays
// An array of an array of strings
const arrayOfArrays: string[][] = [["", "dfd"]];
arrayOfArrays.push(["bright"]);

// typically an array of string is represented => string[]
const arrayOfArrayOfArrays: (string | string[])[] = [];
arrayOfArrayOfArrays.push(["sd", "sdsd"], "sdsd");

// Functions

// in this function the type has been infered to any
const add = (num1, num2) => {};

// this function would only accepts only number arguments
const subtract = (num1: number, num2: number) => {
  return num2 - num1;
};
subtract(2, 4);

const compare = (num1: number, num2: number): boolean => {
  return true;
};

function compare2(val: number, val2: number): boolean {
  return val > val2;
}

// if a function return type is not explicitly defined then the return type will be set to void.
const greet = () => {
  return "hello";
};
greet();

// union type allows multiple types to be used on a value => |

let storage: null | {
  items: string[];
  date: string;
} = null;

storage = {
  items: ["rice", "beans", "bread"],
  date: "22-11-02",
};

// liteal type allows us to specify the exact value we need
// let rainbowColor: "red";
// rainbowColor = "blue";

// let favNum: 5;
// favNum = 4;

const isUser: true | false = true;

// enums => A better way to specify the exact values needed, or you have a set amount of values you want to assign to a variable

enum newRainbow {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  INDIGO,
  VIOLET,
}

const preferredRainbowColor: newRainbow = newRainbow.BLUE;

// optional properties => when you have a property that is optional

const storeObj: {
  name: string;
  owner?: string;
} = {
  name: "bright green",
};

// Interfaces => can be used to define an interface, which is an object type

interface Person {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const createUser: Person = {
  name: "Bright Green",
  age: 89,
};

// An interface is mostly used to define the type for an object

// An unusual alternative to interface is 'type', buh it is more of a genealist as it can be used to define any type not just object

// mostly used when we want to specify something that's not really an object

type PersonType = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

const user2: PersonType = {
  name: "Bright Green",
  age: 89,
};

// Classes

class Car {
  name;
  model;
  speed;
  constructor(name: string, model: string, speed: string) {
    this.name = name;
    this.model = model;
    this.speed = speed;
  }
}

const myCar = new Car("benz", "545eefe", "12Km/h");
