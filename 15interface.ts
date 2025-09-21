//interface define kar k bar bar use kar sakte ho

interface Info {
    name:string,
    age:number,
    college:string
}

interface TeacherType extends Info {
    subject:string
}

var studentObj:Info ={
    name:'anil',
    age:30,
    college:'IET alwar',
}
var teacherObj:TeacherType={
    name:'Sam',
    age:40,
    college:'IET alwar',
    subject:'Math'
}

var management:Info={
    name:'Sam',
    age:40,
    college:'IET alwar'
}