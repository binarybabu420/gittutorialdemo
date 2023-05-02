
var form=document.getElementById('my-form');
form.addEventListener('submit',saveLocal);
function saveLocal(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    localStorage.setItem(name,email);
    console.log(localStorage.getItem(name));
}