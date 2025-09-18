export class Auth{
    login(name: string, password: string) {
        if (name && password) {
            return "Student Login"
        } else {
            return "not Login"
        }
    }
}

class Student extends Auth{
 
    result(marks:number){
        if(marks>33){
            return "Pass"
        } else{
             return "failed"
        }
    }
}

var s1= new Student();
console.log(s1.result(60));


class Teacher extends Auth {

    subject(subject:number){
       return "he tech"+subject
    }
}

var t1 = new Teacher();
console.log(t1.login("sam","12345"));