
var form=document.getElementById('my-form');
form.addEventListener('submit',saveLocal);
let myObj={
    name:'Domenic',
    age:56
} 
function saveLocal(e)
{
    e.preventDefault();
    // var name=document.getElementById('name').value;
    // var email=document.getElementById('email').value;
    localStorage.setItem('myObj',JSON.stringify(myObj));
    console.log(localStorage.getItem(myObj).name);
}
