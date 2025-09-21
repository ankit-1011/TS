//asunc function mai use karte h q ke jo bada function h ya jisme API call ho rahi hoti h os ko time lagta h par hum chate h vo jada time na le tab hum promises use karte h


//promises mai type kaise define karan h


 interface  resultType{
    name:string,
    id:number,
    email:string
}

interface  resultType2{
    name:string,
    id2:number,
}


function complexLogic():Promise<resultType> {
    return  new Promise((resolved)=>{
          setTimeout(() => {
              resolved({
                name:'anil',
                id:10,
                email:'anil@codestepbystep'
              })
          }, 2000);
      })
  }
  

  async function handlePromise() {
    try {
      const result = await complexLogic();
      console.log(result); 
    } catch (error) { 
      console.error("Error:", error);
    }
  }
  
  handlePromise(); 