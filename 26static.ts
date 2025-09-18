// use to define static property and methods vo instance ka part nhi hoti(instance k sath nhi use kar sakte) sirf class ka hota h

// Memory Efficiency sirf class k sath use hota h

// Utility Methods

// Global Constants


class Company{
     static name:string="Google"
     location="Noida"
    static getName(){
        return "gurgaon"
    }
}

Math.random()

var c1= new Company();
// console.log(c1.name);//object se access nhi kar sakt3e
// console.log(Company.name);//class se access kiya h
console.log(Company.getName());