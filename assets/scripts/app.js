import { apikey } from "./util.js";

console.log(apikey)

const user = {
    name:"karan",
    age: 30,

    greet(){
        return console.log("Hello"); 
    }
}

console.log(user.name);
user.greet();

const hobbies = ["Travel", "Cricket", "Photography"];
console.log(hobbies[0]);

hobbies.push("Video Editing");
console.log(hobbies);


const index = hobbies.findIndex((item) =>  item === 'Cricket');

console.log(index);

const newHobbies = hobbies.map((item) => ({text: item}))
console.log(newHobbies);

// destrcturing

const [firstName, lastName] = ['Karan', 'Oza']; //array destructuring
console.log(firstName);
console.log(lastName);

const {name:userName, age} = {  // object destructuring
    name: 'Karan',
    age: 30
}
console.log(userName, age);

//Spread operator

const interest =["cricket", "travel"];
const newInterest = ["reading"];

const mergeInterest = [...interest, ...newInterest];
console.log(mergeInterest);

const users = {
    name:"karan",
    age: 30,
}

const extendUsers = {
    isAdmin: true,
    ...users
}

console.log(extendUsers);

const password = prompt('Your Password');

if(password === 'Hello'){
    console.log("hello works"); 
}
else{
    console.log("Access not granted");
}

function handleTimeout(){
    console.log("Timed out...");
    
}

const handleTimeout2 = () => {
    console.log("Timed out again...")
}

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
   console.log("more timing out...");
    
}, 5000);













