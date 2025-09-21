//multiple data type ko combine karta h
// &


// type personTA={name:string}
// type personTB={age:number}
// type personTC=personTA & personTB

interface personTA {name:string}
interface personTB{age:number}
type personTC = personTA & personTB //a & b k structure aa jayege


var PersonDataA:personTA={name:'Anil sidhu'}
var PersonDataB:personTB={age:30}


var PersonDataC : personTC=
{name:'Sidhu',age:30}