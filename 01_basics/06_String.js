// canbe denoted with single cotes as well as double coates

const name = "Renuka"
const repoCount = 50

console.log(name + repoCount + "value");//outdated syntax 
//use backticks `` modern way for syntax also known as string interpolation
console.log(`hello my name is ${name} ansd my repo count is ${repoCount}`);
//


// another way to intianlixze string
const gamename = new  String('renuka')// yah objects use karte hai javascript ke
//yeh use karne s e bht sarre cheexe milti hai hame like length prototype ets

 
console.log(gamename[0]);//this will gige output as "r" jo ki ek object hai not array
//isse hum krey value pair access kar skate hai 
// hum prototype bhi aaccress kar sakte hai iska use karke
console.log(gamename.__proto__);//output {} object milega
//{} yeh//example empty  nhi hai isme bht sarri methode hsi jo ki brwser se dekh skte hai
//console.log(gamename.length);//output 6 dega
//console.log(gamename.toUpperCase);//yeh method prototype me mention hai
// but yeh hamri original string ko change nhi karega becoz yeh string is a primitibe datatype hai
// like charAt(2);//n
// indexOf('u');//3
//ase bht saare hai
const anotherString = gamename.slice(0,4)
console.log(anotherString);
 const url = "https://renuka.com/renuka vipat"//here space b/w renuka and vipat is 
 //automatoically converted to %20 by brower as browser do not understand whitespaces
 //to remo such we user replace()
 console.log(url.replace(' ','-'));
  console.log(url.includes('hitesh'));//false
  console.log(url.includes('renuka'))//true

