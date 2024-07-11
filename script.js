// 00:00 Introduction
// 04:31 Fundamentals of JavaScript
// 24:24 Objects in JavaScript
// 28:31 Functions and return
// 32:34 Asynchronous JavaScript coding
// 06:21 Arrays [ foreach , map , filter , find , indexof ]


let myArr = [1 , 2 , true , "Mubashir" , 21 ] ;
console.log(myArr.length);

// foreach loop
myArr.forEach(function(val) {
    console.log(val * 2) ;
}) ;



// map function
let doubledArr = myArr.map(function(val) {
    return val + 10 ;
}) ;
console.log(doubledArr) ;
// map jo hamen deta hy wo smae to same utni hi array values return kar ke deta hy  



// filter function
let filteredArr = myArr.filter(function(val) {
    return typeof val === "number" ;
}) ;
console.log(filteredArr) ;
// Filted bhi new array deta hy lekin filter kar ke deta hy array me se condition ke hisab se 


// find function
let findNumber = myArr.find(function(val) {
    if(val === 21)
    return true ;
}) ;
console.log(findNumber) ;


// indexOf function
let indexOfNumber = myArr.indexOf(21) ;
let CheckVal = myArr.indexOf(211) ;
console.log(indexOfNumber) ;
console.log(CheckVal) ;
// -1 means k nhi hy agr hoga toh value mil jayegi



//Objects
let person = {
    name : "Mubashir" ,
    age : 21 ,
    address : {
        street : "Street 1" ,
        city : "City 1"
    },
    greet : function() {
        return "Hello World!" ;
    }
} ;
Object.freeze(person)

console.log(person.address.street);
console.log(person.greet());

person.name = "Mubashir M.Ibrahim" ;
console.log(person.name);

console.log(Object.keys(person));
console.log(Object.values(person));


//Function
function addNumbers(num1 , num2) {
    return num1 + num2 ;
}
console.log(addNumbers(5 , 10));
console.log(addNumbers.length); //NUM of parameters are length



//palindrome function in js
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome('madam')); // true



//async js coding
const asyncFunction = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    //fetch only 20
    data = (await response.json()).slice(0, 5);
    console.log(data);
}
asyncFunction();

//line by line code chly issy kehty hyn synchronous

// jo bhi code async nature ka ho ussy side stack me bhej doo and agly code ko chlaoo jo bhi sync nature ka hoo jb bhi sara sync code chl jaye yani ke main stack khali ho jaye , tab check karoo async code complete hua ya nhi and agar wo complete hua ho toh ussy main stack me laoo.
const asyncFunctionCheck = async () => {
    // ----------------- pehly ye line chly gi 
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // issy side stack par le jaya jayega
    // ----------------- phir ye line chly gi 
}
