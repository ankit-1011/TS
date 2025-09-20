//manipulate ya transform kart h ki sata type mai hum kuch he type property dal sake 

//partial(data optional ho jaruri nhi h jo data type define kiya h vahi ho)

//jp optional vo bhi chaye h tho required bna do

//agar value freez ho jaye matlb jo value dal de vo change na ho tho readonly use karo

//jab hame kuch ho propert chaye tho pick use karo





interface CollegeType{
    name:string,
    location:string,
    students:number,
    branch:number
} 

//omit kis chiz ko use nhi karna h omit karna tab use karte h
var CollegeData7:Omit<CollegeType,'students'| 'branch'>={
    name:'iit delhi',
    location:'delhi',
    // students:1000
}
type APIStatus="loading" | 'error' | 'pending' | 'success';


//exclude es liye kiya h pending hamne exclude kar diya h ose hum use nhi kare ge
var APICall:Exclude<APIStatus,'pending'>='success';
APICall="loading";

//exctract kis kis use karna chate ho
var APICall2:Extract<APIStatus,'error'| 'success'>;
APICall2='error';


//notnullable null & undefined ko hta deta h
type RandomType=string| number | undefined | null | string[];

var randomData:NonNullable<RandomType>=20;


//record se object ka tarh use kar pa te h(Record<Keys, Type>)
type SiteRole = 'Admin' | 'user' | 'guest'
var siteRoleOption:SiteRole='Admin'
var RoleName:Record<SiteRole,string>={
    Admin:'Anil',
    user:'sidhu',
    guest:'peter'

}
// APICall="pending"
// let CollegeData3:Partial<CollegeType>={
//     name:'iit delhi',
//     location:'delhi',
//     students:600,
// }


function getCollegeData(data:Partial<CollegeType>){
return data
}

getCollegeData({name:'iit bombay',location:'bombay'}) 


function getCollegeData2(data:Required<CollegeType>){
    return data
    }

    getCollegeData2({name:'iit bombay',location:'bombay',students:30,branch:3}) 

var CollegeData4:Readonly<CollegeType>={
    name:'iit delhi',
    location:'delhi',
    students:400,
    branch:5
}
// CollegeData4.name="iit gurgaon"

var CollegeData5:Pick<CollegeType,'name'|'location'>={
    name:'iit delhi',
    location:'delhi',
   
}