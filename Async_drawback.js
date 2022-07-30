//Node.js is Asynchronous,single threaded open source platform for executing JavaScript code on server-side. 

//This is the drawbacks of Asynchronous programming i.e here console.log(a+b) print 30 because setTimeout function execute b=30 after 2sec so Asynchronous will not wait for 2sec for that situation.For solve this use promise and callback function.
/* let a = 20;
let b= 10;

setTimeout(()=>{
    b = 30;
},2000)

console.log(a+b); */


//We make promise or callback to solve drawback of the Asynchronous nature in Node.js.
let a = 20;
let b = 10;

let waitingData = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        b = 30;
        resolve(b);//number,array,object,strings can be passed as an argument in resolve function
    },2000)
})

//wait 2sec then print 50
waitingData.then((b) =>{
    console.log(a+b);  
})