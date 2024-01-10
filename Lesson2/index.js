const fs = require("fs");

// file create kror jonno
// fs.writeFile("demo1.txt","My name is Ridoy Sharif. I am a web developer.",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successful");
//     }
// })

// file data added sustem
// fs.appendFile("demo1.txt","I am 17 years old.",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successful");
//     }
// })


// read file
// fs.readFile("demo1.txt","utf-8",(err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successful",data);
//     }
// })

// read rename
// fs.rename("demo1.txt","demo2.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successful");
//     }
// })

// file delete
// fs.unlink("demo2.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successful");
//     }
// })



// fs.writeFile("demo2.txt","My nam is ridoy",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

fs.exists("demo2.txt",(result)=>{
    if(result){
        console.log("Found");
    }else{
        console.log("not Found");
    }
})