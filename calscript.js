function getValue(value){
 document.getElementById("result").value += value;
}
function clearValue(){
    document.getElementById("result").value ="";
}
function calculate(){
    let result= document.getElementById("result").value;
    try{
    let calculatedValues= eval(result);
    document.getElementById("result").value=calculatedValues;

    }catch(error){
        document.getElementById("result").value= error;
    }
}


let checkPromise = new Promise((resolve,reject) => {
 let age = 20;
 if(age>80){
    resolve("You are Eligible");
 }
 else{
    reject("You are rejected");
 }
})
checkPromise.then((result)=> console.log(result)).catch((error) => console.log(error));


function handleError(){
    try{
        if(a)
         console.log("Variable defined");
    }
catch(error){
    console.log("Variable not defined");

}
}
handleError();

