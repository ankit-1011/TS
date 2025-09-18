 //function execute he nhi hota  
 // ya kuch return nhi kar pa raha
 //ya error  aa raha h properly execute nhi kar raha
 function loopFunction():never{   
    while (true) {
        console.log("loop")
    }    
 }

 function simple1():never {
    throw new Error("output and  data not found");    
 }