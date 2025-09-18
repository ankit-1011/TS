//jasie object ke key hoti h vaise he type ke key hoti osko get karne k liye milte h tho union of string k andar mile ge

//eska use object ke type saftey k liye kiya jata h


type PersonT={
  name:string,
  age:number,
  isEmp:boolean
}
let PersonData:PersonT={
  name:'Anil sidhu',
  age:30,
  isEmp:true
}
type PersonX=keyof PersonT;
// let PersonDataX:PersonX;
let PersonDataX:keyof PersonT;;
PersonDataX="name";
PersonDataX="age";
PersonDataX="isEmp";

let UserX:keyof typeof PersonData="name"