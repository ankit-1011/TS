//union jab ek se jada data type store karna h
//   | union





var studentData: string | number | [] = "Anil";

studentData = 9999;

studentData = []

function fruitsData(): string | string[] | number {
    var item = 1
    if (item > 1) {
        return ['apple', 'banana']
    } else {
        return "Apple"
    }

}

console.log(fruitsData())


function studentInfo(name:string| number | boolean) {

    if( typeof name=='string'){
        return "student name is "+ name
    }

    if( typeof name=='number'){
        return "student age is "+ name
    }
    
}
studentInfo('anil sidhu');

studentInfo(999);