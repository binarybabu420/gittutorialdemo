const myObj={
    name:"Sushant",
    email:"sushant09450@gmail.com"
}
axios.post("https://crudcrud.com/api/95f01ea808004f7f9b43f506560d5e12/appointmentData",myObj).then((response)=>console.log(response)).catch(err=>console.log(err));
var obj=axios.get("https://crudcrud.com/api/95f01ea808004f7f9b43f506560d5e12").then((response)=>console.log(response)).catch(err=>console.log(err));
console.log(obj);
