//conditional block k aandar variable k type ko narrow down kar pao matlb actaual data type check kar paoo

// Types of TypeGuard
// typeof

// instanceof -->class ka type check kar ne k liye

// Custom Type-->interface k type check karne k liye



// use TypeGaurd ?


// Provides better type safety actual type check karne k liye

// Apply conditions with data type

// Helps TypeScript infer types automatically


let userData20: number | string | boolean = "Anil sidhu"

// userData20=true
// if(typeof userData20 =="boolean"){
//     console.log('this is a bool data type');

// }
// else if(typeof userData20 =="string"){
//     userData20
//     console.log('this is a string data type');

// }else{
//     console.log("this is a number");

// }






// function checkDataType(data:string | number){

//     if(typeof data =='number'){
//         console.log("this is a number");

//     }else{

//         console.log("this is a string");
//     }

// }

// checkDataType('anil')



class Product21 {

}

var p1 = new Product21()
class Order21 {

}

var o1 = new Order21();


// function checkDetails(data :Order21 |Product21 ){
//     if(data instanceof Order21){
//         console.log('this is a order');

//     }else{

//         console.log('this is a product');
//     }
// }

// checkDetails(o1);


interface userData {
    name: string,
    city: string

}
interface userInfo {
    id: number,
    email: string
}
var userData22: userData | userInfo
userData22 = {
    name: 'anil sidhu',
    city: 'gurgaon'
}


var userData21: userData | userInfo = {
    id: 100,
    email: 'anil@test.com'
}
function checkUserInfo(data: userData | userInfo) {
    if ((data as userData).name != undefined) {
        console.log('this is a user data');

    } else {
        console.log('this is a user info');

    }
}
checkUserInfo(userData22)