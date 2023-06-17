const prompt=require("prompt-sync")(); //prompt()won't works in nodejs environment
var user=prompt("Enter your name:");
console.log("user entered :", user)