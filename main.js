
var form=document.getElementById('my-form');
form.addEventListener('submit',saveLocal);
 
function saveLocal(e)
{
    e.preventDefault();
    // var name=;
    // var email=document.getElementById('email').value;
    let myObj={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value
    };
    var ul=document.getElementById('users');
    var li=document.createElement('li');
    li.className="item";
    var myJSON=JSON.stringify(myObj);
    localStorage.setItem(myObj.email,myJSON);
    var text=localStorage.getItem(myObj.email);
    var obj=JSON.parse(text);
    //console.log(obj.name);
    var st=
    li.appendChild(document.createTextNode(obj.name+" "+obj.email+" "+obj.phone));
    ul.appendChild(li);
    
    
    console.log(document.getElementsByTagName('li'));
}

