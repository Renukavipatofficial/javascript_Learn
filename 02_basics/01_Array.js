//Array
//Array intialization
// const MYYYArray = [0,1,2,3,4,5,]
// const myferrri = ["fdg","fwfw"]
const myarr = new Array(0,1,2,3,4,5,6)
console.log(myarr);
//read Array documentaion
//in js Array is resizeable
//indexing is start from zero(zero based indexoing)

//Array make shallow copies(property have same refrence point)

//Array Method
//.length() array dekh sakte hai
//Array has prototyes contain further one more prototype
//Array methods

// /''
//used to convert array value to string

//slice, splice
 const myn1 = myarr.slice(1,3)
 console.log(myn1);
 console.log("B",myarr);
 //outputB [ 1, 2, 3 ]isme kast range include nhi hoti

 //splice
 const myn2 = myarr.splice(1,3)
 console.log("C",myarr);
 console.log(myn2);
 //output  [ 2, 3 ] isme last range include hoti hai


// diffrence betwee slice and splice
//slice original arrya ko manupukate karta hi 
//but splice original array ko manupulate nhi karta


//.concate used to concate two or more arrya or string
//... is used to spread te array
//  const marvel_hero = ["thor","ironman","spiderman"];
//  const dc_heros = ["shaktiman","kalia"]
//  const all_heros = marvel_hero.concat(dc_heros)
//  console.log(all_heros);
//  const all_new_heros = [...marvel_hero,...dc_heros]
//  //... se spred ho jaiga matla abb yeh arrya nhi rha hi ek ek lement spred ho gy
//  console.log(all_heros);

  const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
  const  real_another_array = another_array .flat(infinity)
  console.log(real_another_array);