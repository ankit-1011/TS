//jab kise object pe bhoot sari key/valuse pair honge tab use karte h


//aapke pas ek object h & oske key dynamic h unka hame type specify karna h tab use hoti h



// type userData7Type={ -->baje unte type crete kiya hoe indexsign kum likh vata h
//     [key:string]:number|string
// }

// var userData7:userData7Type={
//     mobile:9999,
//     id:10,
//     marks:90,
//     age:40,
//     semester:3,
//     name:'anil'
// }

//type define kiya h
type userData7Type = {
    name:string,
    id:number,
    mobile:number,
    // jaruri nhi h ke eske value present ho ese flexible object shape kehte h
    readonly [key: string]: number | string //readonly bajah se ese ke andar or key/value add nhi ho sakti
}

var userData7: userData7Type = {
    name: 'anil',
    mobile: 9999,
    id: 10,
    marks:90,
    age:40,
    semester:3,
}