//objects

const stud = {
    name :"romesh",
gender: "male",
"full  name": "Ramesh Sharma ", // if the key is more than one word then we use ""  to write a key 
email: "ramesh@gmail.com",
age : 18 ,
location : "ghaziabad ",
loginDays :["Sat ","Sun", "Tues"],
isLogin : true.value,
login:()=> {

}
,
const : print=(s)=>console.log(stud.name)




};
// console.log(stud);
// console.table(stud);
// console.table(stud.age);
// console.table(stud["full  name"]);
// console.table(stud["age"]);
// console.log(typeof stud);


stud.name = "Ramesh Sharma" ;
// console.log(stud);
// console.log(stud.age);
// console.log(stud["full  name"]);
// console.log(stud["email"]);
// console.table(stud);


// console.log(stud.name);
// console.log(stud["full  name"]);
// console.log(stud["name"]);
// if(stud.isLogin){
//     console.log(stud.loginDays);
    
// }
// if(stud.Mobile){
//     console.log(stud.Mobile);
    
// }
// if(stud.email){
//     console.log(stud.email);
    
// }

// in anything except false,null is true in js

// stud.greeting= ()=> console.log("hello");
// stud.greeting()

// const sum = (...num) =>{
//     console.log(num);
    
// }

// sum(10,120);
// sum(10);
// console.log(10,1,2,3,4,5,6);
// sum(10,1,2,3,4,5,6);

// immediately invoked function expression = IIFE
(()=>{
console.log("I am IIFE");
})() ;
((uname)=>{
console.log(`${uname} is logged in`);
})() ;
