// a way to logically group related code, such as classes, interfaces, functions, and variables, to prevent naming conflicts and organize large codebases by providing a dedicated scope for these elements

//namespacemk andar export likhna jaruri h
//agar namespace ko dosre fiel mai import karna h tho import karne k jarurat nhi h

namespace  UserNameSpace{
    export class Auth{
        login(){
            console.log("user login function");            
        }
        
    }
    export function getList(){
        console.log("list of users",apiURL);        
    }
    const apiURL="wwww.com"    
}

namespace AdminNameSpace{
    export class Auth{
        login(){
            console.log("admin login function");            
        }
    }
    export function getList(){
        console.log("list of admins")        
    }    
}

//call kiya h
// var user8=new UserNameSpace.Auth()
// user8.login()
// UserNameSpace.getList()