// SYNCHONENCE BEHAVIOR --> Line By Line Execute Karanawa
// console.log("Started");
// console.log("Middle");
// console.log("End");

// ASYNCHRONENCE BEHAVIOUR --> Line By Line newe Execute wenne 
console.log("Started");
setTimeout(()=>{
console.log("Middle")
},
2000);
console.log("End");

////////// OUTPUT -  Started End Middle
