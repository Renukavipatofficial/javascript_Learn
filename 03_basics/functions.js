// function satmyname(){

// }
// saymyname//is refrence
// saymyname()//function execution

// function sum(number1,number2)//these are pameter
// {
//     console.log(number1 + number2);
// }
//jab function ko call karte usme jo pass karte hai woh arguments hai

// function sum(number1,number2)//these are pameter
// {
//     console.log(number1 + number2);
// }

// const result = sum(3,6)
// console.log("Result:",result);
//abb yeh result console me undefined dega not 8

//iss liye hum 
// function sum(number1,number2)//these are pameter
// {
//     let result = number1 + number2 
//     return result;
//     console.log(number1 + number2);
// }
// const result = sum(3,6);
// console.log("Result:",result);


//... is a spread oprator aor rest opretot
//this group  up the elements

function calculatecartprize(val1,val2,...num1)
{
    return num1;
}
console.log(calculatecartprize(200,300,400,500));
//yeh outupt me 400,500 hi dega becoz first doo value val1 aur val2 me chali gyi hai


//object ke satth kese use kar sajkte hai
const user ={
    username: "hitesh",
    price: 199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}