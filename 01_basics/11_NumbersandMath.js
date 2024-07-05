const score = 400;// yeh sirf 400 dega
//num eddicatedly define kar dajyte hai number
const balance = new Number(100)// yeh define bhi karega ki yeh number hai

console.log(balance);
console.log(balance.toString().length);//yaha sath string bana ke humne 
//sath hi me length property bhi de hi di hai givr output AS 3
console.log(balance.toFixed(1));//yeh pricise value dega bracket me number hai ki kitne tak hi precision bvalue cahiye

const another= 1123.456
console.log(another.toPrecision(3));
//wil give output as 23.5 asswe ask for precison till third point
// for 123.9888 it we give precision value as 3 it will give putput as 124 
// and for 1123.8999 we ask for 3 ir willgive 12e+3 it will automatically convert ir into 
//exponentiall value
 const hunderds = 10000000
 console.log(hunderds.toLocaleString('en-IN'));
 //thi method will divides the zero digits but it is according to us standards using en-IN it is for indian standards
  //+++++++++++++++++++++++++Mlog++++++++++++++++++++
console.log(Math);
//math library contain various prooerty in itself it contain various types of methods in it 
//like .abs() convert positive to negative, .round()