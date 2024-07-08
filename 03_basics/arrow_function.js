//this yeh objecyt me work karta hai 
// globally yeh niode environment me yeh {} dega
//and ywh function ke andar define  me denge toh yeh undefined dega
// function chai(){
//  let username = "renuka";
//  console.log(this.username);
// }
// chai();//yeh normally undefined dega becoz yeh function me define hua hai
//===============Arrow function==========

const chai = () =>{
    let username = "renuka";
    log(this.username)
}

//parenthesis ke andar return keyword likhna hi padega
//implecietly arrow function
const addTwo =(num1,num2) => {
    return num1+num2;
}

//withput parenthesis return likhna not compulsory
const addTwoo =(num1,num2) => (num1 + num2)
//explicitly keyword
console.log(addTwoo(3,4));
