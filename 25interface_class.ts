//interface se class ,function ,object ka struture define kar sakte ho

interface CollegeDataType{
    name:string;
    displayTeachersName():void;
    getStudentList():string[]
}

//implement use karna class mai
class CollegeData implements CollegeDataType{
    name:string;
    constructor(cName:string){
        this.name=cName
    }
    displayTeachersName(): void {
        console.log("anil",'sam','peter');
        
    }
    getStudentList(): string[] {
        return ['anil','sam','bruce']
    }

}

var college1= new CollegeData('IIT Delhi')

// college1.displayTeachersName();
console.log(college1.getStudentList());