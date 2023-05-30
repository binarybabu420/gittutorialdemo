
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
    ////---localStorage.setItem(myObj.email,myJSON);
     axios.post("https://crudcrud.com/api/95f01ea808004f7f9b43f506560d5e12/appointmentData",myObj).then((response)=>console.log(response)).catch(err=>console.log(err))
    axios.get("https://crudcrud.com/api/95f01ea808004f7f9b43f506560d5e12/appointmentData").then((response)=>{
      var j=JSON.stringify(response)  
    }).catch((err)=>console.log(err));

     //var obj=JSON.parse(text);
    console.log(myObj.name);
    var btn=document.createElement('button');
    var editBtn=document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(document.createTextNode(myObj.name+" "+myObj.email+" "+myObj.phone));
    btn.appendChild(document.createTextNode('Delete'));
    
    li.appendChild(btn);
    li.appendChild(editBtn);
    ul.appendChild(li);
    btn.addEventListener('click',removeIt);
    editBtn.addEventListener('click',editIt);
    function editIt(e)
    {
        e.preventDefault();
        var nameEdit=document.getElementById('name');
        var emailEdit=document.getElementById('email');
        var phoneEdit=document.getElementById('phone');
        nameEdit.value=myObj.name;
        emailEdit.value=myObj.email;
        phoneEdit.value=myObj.phone;
        var par=editBtn.parentElement;
        par.childNodes[0].remove();
        par.childNodes[0].remove();
        par.childNodes[0].remove();
        localStorage.removeItem(myObj.email);
        

    }
    function removeIt(e)
    {
    e.preventDefault();
     var par=btn.parentElement;
     localStorage.removeItem(myObj.email);

     par.childNodes[0].remove();
     par.childNodes[0].remove();
     par.childNodes[0].remove();
     
     
    }
    

    
    
    console.log(document.getElementsByTagName('li'));
}

