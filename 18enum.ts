//constant defined karte h matlb eske alava or koi value na aaye ge

enum WhoType{
    student="student",
    teacher="teacher",
    management="management",
    labStaff="labStaff",

}

var who:WhoType= WhoType.teacher;

who =WhoType.teacher

console.log(WhoType.management);

enum Fruit {
    a="Apple",
    b="banana",
    c="cherry"
}

var myFruit:Fruit=Fruit.a

myFruit=Fruit.c

console.log(myFruit);

enum Roles{
    admin,
    manager,
    qa,
    developer,
    user
}

var userRole:Roles=Roles.qa;

console.log(userRole);