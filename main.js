// var pro = function(x, y){
//     return x*y;
// }
// console.log(pro(2,3))

// const pro = function(x, y){
//     return x*y;
// }
// console.log(pro(2,3))
///----------------------
//arrow functions
// const sum = (x, y)=> x+y

// console.log(sum(3, 4))
//-----------------------------

//spread operatios

// const q1 = ['jan', 'feb', 'mar']
// const q2 = ['apr', 'may', 'jun']
// const q3 = ['jul', 'aug', 'sept']
// const q4 = ['oct', 'nov', 'dec']

// const year = [...q1, ...q2, ...q3, ...q4]

// console.log(year)

// const nummbers = [12,42,33,45,,67,77]
// let maxValue = Math.max(...nummbers)

// console.log(maxValue)

//---------------------------------
//looping of an array

// const cars = ['BMMW', 'Benze', 'Porshe', 'Volvo']
// for (const myCar of cars) {
//     console.log(myCar)
// }

//looping of a string

// let lang = "javascript"
// for (const lg of lang) {
//     console.log(lg)
// }

//-------------------------------------
//Mapping

// const students = new Map([
//     [1, 'Joshua'],
//     [2, 'Swaroop'],
//     [3, 'John']
// ])

// console.log(students.get(1))
// console.log(students)

//----------------------------------
//set 

// const set1 = new Set()

// set1.add(100)
// set1.add(101)
// set1.add(102)
// set1.add(103)
// console.log(set1.size)
// console.log(set1)

//---------------------------------------
//class
//A JavaScript class is not an object.
//It is a template for JavaScript objects.

// class Students{
//     constructor(fName, lName, branch){
//         this.fName= fName
//         this.lName= lName
//         this.branch= branch
//     }
// }
 
// const s1 = new Students('Joshua', 'Swaroop', 'Mech')
// const s2 = new Students('Josh', 'M', 'CS')
// const s3 = new Students('Mike', 'S', 'Civil')

// console.log(s1.fName)
// console.log(s1)

//-----------------------------------------------
//promise

// let p = new Promise(function(resolve, reject){
// console.log("promise is pending")
// setTimeout(function(){
//     console.log("I am a promise and im fulfilled")
//     resolve(true)
// }, 5000)
// })

//or
//resolve
// let p1 = new Promise((resolve, reject)=>{
// console.log("Promise is pending")
// setTimeout(()=>{
//     //console.log("iam fulfilled")
//     resolve(true)
// }, 5000)
// })

// //reject

// let p2 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         //console.log("iam rejected")
//         reject(new Error("its an error"))
//     }, 5000)
//     })

//     console.log(p1,p2)

//     p1.then((value)=>{
//         console.log(value)
//     })
//     p2.catch((error)=>{
//         console.log("some error")
//     })

//-----------------------------------
//default parameters

// function sum( x, y=10){
//     return x+y
// }
// let sum1=sum(5)
// console.log(sum1)

//-----------------------------------
//function rest parameter

// function sum(...args){
//     let sum = 0
//     for (const arg  of args) {
//         sum+=arg  //sum= sum+arg
//     }
//     return sum
// }

// let x = sum(1,2,3,4,5,6,7,8,9,10)
// console.log(x)

//-------------------------------------
//string.includes

// let text = "Hello world, how are you all."
// text.includes("you")

//--------------------------------------
//String.startsWith
// let text = "Hello world, how are you all."
//  text.startsWith("Hello")


//--------------------------------------
//String.endssWith
// let text = "Hello world, how are you all."
//  text.endsWith("all")

//---------------------------------------
//array.from

// const myArr = Array.from("Joshua")
// console.log(myArr)

//--------------------------------------
//Array key

// const fruits = ["Mango", "orange", "Apple", "Lemon"]
// const keys = fruits.keys();

// //let text = ""
// for (const x of keys) {
//     //1st  //console.log(x)
//       //text +=x + "\n"
// }
// console.log(text)

//---------------------------------------
//Array find()

// const numbers = [1,2,3,4,5]
// let first = numbers.find(myFunction)

// function myFunction(value, index, array){
//     return value>3
// }
// console.log(first)

//---------------------------------------
//Array findIndex()

// const numbers = [1,2,3,4,5]
// let first = numbers.findIndex(myFunction)

// function myFunction(value, index, array){
//     return value>3
// }
// console.log(first)

//-----------------------------------------
//Math trunc

//console.log(Math.trunc(4.7))

//-----------------------------------------
//Math sign

//console.log(Math.sign(-4))

//-----------------------------------------
//Math cbrt

//console.log(Math.cbrt(8))

//-------------------------------------------
// object entries

// const fruits = ["Mango", "Apple", "Pineapple", "Lemon"]
// const f = fruits.entries()


// for (const x of f) {
//     console.log(x
//         )
// }

//-----------------------------------------------
//template literals
//without template literals
// let name = "Joshua"
// let role = "Software developer"

// console.log("Welcome!\n My name is " +name+ "\n I am a " +role)

//with template literals
// let name = "Joshua"
// let role = "Software Developer"

// console.log(`Welcome!
// My name is ${name}
// I am a ${role}`)