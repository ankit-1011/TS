//class , methods , properties or parameters k sath aatch karte h taki os ko acess kar k modify kar sake

//@classLogger decorators h jo yaha se liye h
function classLogger(constructor:Function){
  console.log(constructor.name);
  
}

function getKeyDetails(target:any,key:any){
  console.log(key.name);
  
}


@classLogger //jiske sath use karna h oske upar rakho
class CustomMaths{
  
  @getKeyDetails
  private value1:number;
  value2:number;
  constructor(x:number,y:number){
    this.value1=x;
    this.value2=y;
  }
}

var cm1 = new CustomMaths(10,20);