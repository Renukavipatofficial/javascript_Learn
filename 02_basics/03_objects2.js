// const tinder = new Objects()
//  
//fullname //yeh apne app me ek object hoga
//how tonassign objects
//two methods to assign 
//const obj3 = {obj1,obj2}
//.assign(source,target)
//source hai jisme hum target ko save karte hai
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);
// const obj3 = {...obj1,..obj2};

// .hasownpropeerty
// Object.keys()
// Object.values()
// Object.entries
const course ={
    course : "engg",
    price:"999",
    courseInstructor : "hitesh"
}
//abb value ko kese use kare

//const {courseInstructor}= course
//yeh use kareke hume baar course.courseInstructor nh
//i likhna padega jabi use karna ho
//jsut hume yeh use larna apdega
//console.log(courseInstructor);
//hum isse apna naaam bhi de sakte hai
const{courseInstructor: instructor} = course
console.log(instructor);


