//function ka bhi return type hiota h
function fruits():number{
    return 10
}
//note:agar  function ka return nhi kar rahe ho tho void hoag
function simple():boolean{
    return true
}

function complex():number|string| boolean{
    let data=10;
    let name="anil sidhu"
    let type="age";

    if(type=='age'){
        return data;
    }else{
        return name
    }
}
//koi bhi value returnb kar sakti h
function anything():any{
    return 
}