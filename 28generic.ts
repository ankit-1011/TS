//generic ke help se reusable code  cretae kar sakte ho oske type saftey maintaion rahege hate ge nhi

//generic use kar k koi bhi type ka data return & as a pass kar sakte ho
function fruits10<T>(name:T):T{//T type 
    return name
}

function fruitsAny(name:any):any{
    return name
}

//any ka use es liye nhi kar rahe q ke vo any type he return karega koi particukar type nhi
// let onlyFruit=fruitsAny("apple")
// let onlyNum=fruitsAny(100)
// let onlyBool =fruitsAny(true)

let onlyFruit=fruits10("apple")
let onlyNum=fruits10(100)
let onlyBool =fruits10(true)


//array bhi use kar sakte ho
function Users17<T>(data:T[]):T {
    return data[0]
}

let userCollection = Users17([10,30,40])