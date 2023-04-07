let greetings: string = "Hello world";
console.log(greetings);

// the greetings variable was defined with a string and will not accept any other types.
// greetings = 45;
// greetings = {};
// greetings = [];

// accepts only string
greetings = "Green";

// Numbers
// in javascript there is no distinction between intgers and float, as they are all considered number data type.
const userId: number = 456;

// Type inference
// typescript can automatically infer the right data type from the assigned value
let luckyNum = 7;
// luckyNum = 'sdk'