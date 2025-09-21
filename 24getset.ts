//getter & setter ke help se class k andar ke properties ko modify kar sakte h jab hum get ya set karte h

class EmpInfo{
    _name:string="Anil";
    _email:string="anil@test.com"

    get name():string{
        return "MR. "+this._name;
    }

    set email(val:string){
        this._email="emp_"+val
    }
}

var emp1= new EmpInfo();

emp1.email="peter@test.com";
console.log(emp1._email);