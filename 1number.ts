//NUMBER DATA TYPES
//var var_name : data_type = value
var num1:number=10;
var num2:number=30
var num3:number=30

var total:number=num1+num3;
console.log(total);

//binary
var oct:number=0o100001;//0o1
var hexa:number=0b00001;//0b
var binary:number=0x00001;//0x

console.log(oct+10);

var item:number=100;
var item2="50";
// var item2Converted=Number(item2)-->ese bhi kar sakte h
var item2Converted=+item2//+ laga k string mai ypecast hogaye
console.log(item+ +item2Converted);

//TYPE INFERENCE (matlb tsc automaticaaly bta deta h ke data kis type ka bina type likhe hue)
//var data =30;
// data=40
// data="anil sidhu"

// var data: number | string =30-->agar do data type ek var mai dal na 
// data="anil"
