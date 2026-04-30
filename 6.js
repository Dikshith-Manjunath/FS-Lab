const obj1 = {name: "Dikshith", age: 21};

const obj2 = new Object();
obj2.name = "Rahul"; obj2.age = 25;

function user(name, age) { this.name = name; this.age = age; }
const obj3 = new user("Rajesh", 29)

const obj4 = new Object()
obj4.name = "Rakesh", obj4.age = 23;

console.log("Object1 : " , obj1);
console.log("Object2 : " , obj2);
console.log("Object3 : " , obj3);
console.log("Object4 : " , obj4);

const add = (a,b) => { return a+b; }
function sub (a,b){ return a-b; }
const mul = function(a,b) { return a*b; }
const div = function divname(a,b) { return a/b; }

console.log("Addition: ",add(41,53));
console.log("Subtraction: ",sub(41,53));
console.log("Multiplication: ",mul(41,53));
console.log("Division: ",div(41,53));

console.log("Iterative Object: ");
for(let i in obj1){
    console.log(i + " : " + obj1[i]);
}