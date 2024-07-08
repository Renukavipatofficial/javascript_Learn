//how to declare objects 
//two ways : litreals , constructor  
//singleton: 
//litrals se singleton nhi banega but constryctore se

//single tn hi banga
//object litrals
//const jsuser = {}//object formed
//Object.create//yeh cnstrutor wali methode hai
const jsuser = {
    name : "Renuka",
    [mysym] :"renuka"
    age: 18,
    location:"indore",
    isLoggedIn: false'
    let LoginDays : ["monday"]
}
//how to accress object
console.log(jsuser["age"]);
generally symbol se hinhi jata usko alg se natana padta HTMLDetailsElement

//object ko access kar sakte hai
jsuser.age = 18;(
//to lock value use freeze
Object.freeze(jsuser);
jsuser.age = "29";
console.log(jsuser);

//functin using object
//method 1
jsuser.greeting = function (){
    console.log(("hello"));
}

jsuser.greetingtwo = function(){
    console.log(`hello jsuser ${this.name}`);
}


