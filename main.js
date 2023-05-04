
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
    var btn=document.createElement('button');
    li.appendChild(document.createTextNode(obj.name+" "+obj.email+" "+obj.phone));
    btn.appendChild(document.createTextNode('Delete'));
    li.appendChild(btn);
    ul.appendChild(li);
    btn.addEventListener('click',removeIt);
    function removeIt(e)
    {
    e.preventDefault();
     var par=btn.parentElement;
     localStorage.removeItem(obj.email);

     par.childNodes[0].remove();
     par.childNodes[0].remove();
     
     
    }
    

    
    
    console.log(document.getElementsByTagName('li'));
}

