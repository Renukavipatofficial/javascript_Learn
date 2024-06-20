// their are two types of memory 
// stack(primitive use ) yaha hame copy milta hai original value ka
//yah change copy me hoga 
// heap (non-primitive use) yaha refrence milta hai original value ka 
// yaha original me
//exampe 
let youtubename = " renukavipatdotcom"
 let anathorname = youtubename//2
 anothername = "heloo"

 console.log(youtubename);//yeh renuka vala part print karega
 console.log(anathorname);//yeh hello print karega
 // as in 2 waha copy change ho rhia hai original value nhi change horri hai

//yeh object hai (non primitive)

 let userOne = {
    email : "jilhed@.com",
    upi : "ghhh47",
 }
 //yeh value direct heap me store hogi
 


 let userTwo = userOne// yaha usertwo ne direct refrence liya heap se na ki copy ki value ko


 userTwo.email = "ygiuhbvb@.com"
  // yaha hu,ne usertwo  me email ki value ko change kar diya hai


 console.log(userOne.email);
 console.log(userTwo.email);
 //yah dono ki value"ygiuhbvb@.com" hi hai kyuki change jab hua value me to durect heap me hua tha toh userOnr ki value bhi chnage hogi
 