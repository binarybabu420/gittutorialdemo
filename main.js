
var form=document.getElementById('my-form');
form.addEventListener('submit',saveLocal);
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/0c4d8d4bb3fb46a2812c96a548c9b3cc/appointmentData").then((response)=>{
    console.log(typeof(response));
    var d=response.data
    for(var key in d)
      {
        var ul=document.getElementById('users');
    var li=document.createElement('li');
    li.className="item";
        var btn=document.createElement('button');
        var editBtn=document.createElement('button');
        editBtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(document.createTextNode(d[key].name+" "+d[key].email+" "+d[key].phone));
        li.id=d[key]._id;
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
        var par=editBtn.parentElement;
        var cid=par.id;
        let op;
        axios.get(`https://crudcrud.com/api/0c4d8d4bb3fb46a2812c96a548c9b3cc/appointmentData/${cid}`,).then((res)=>{
             const obj=res.data;
             
                nameEdit.value=obj.name,
                emailEdit.value=obj.email;
                phoneEdit.value=obj.phone;
                 
                op=
                {
                    name:obj.name,
                    email:obj.email,
                    phone:obj.phone
                }
                

        }).catch(err=>console.log(err));
         
       
        par.childNodes[0].remove();
        par.childNodes[0].remove();
        par.childNodes[0].remove();
        
        axios.put(`https://crudcrud.com/api/0c4d8d4bb3fb46a2812c96a548c9b3cc/appointmentData/${cid}`,op).then((res)=>console.log(res)).catch(err=>console.log(err));
       // localStorage.removeItem(myObj.email);
        

    }
    function removeIt(e)
    {
    e.preventDefault();
     var par=e.target.parentElement;
     var id=par.id;
     console.log(id);
     axios.delete(`https://crudcrud.com/api/0c4d8d4bb3fb46a2812c96a548c9b3cc/appointmentData/${id}`).then(res=>alert("one element got deleted!!")).catch(err=>console.log(err));

     par.childNodes[0].remove();
     par.childNodes[0].remove();
     par.childNodes[0].remove();
     
     
    }
    

    
    
    console.log(document.getElementsByTagName('li'));
      }
    }).catch((err)=>console.log(err));
})
 
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
    var oid;
     axios.post("https://crudcrud.com/api/0c4d8d4bb3fb46a2812c96a548c9b3cc/appointmentData",myObj).then((response)=>{
     
    oid=response.data._id;
    console.log(oid);
    }).catch(err=>console.log(err))
       
    axios.get("https://crudcrud.com/api/0c4d8d4bb3fb46a2812c96a548c9b3cc/appointmentData").then((response)=>{
      var j=JSON.stringify(response)  
    }).catch((err)=>console.log(err));

     //var obj=JSON.parse(text);
    console.log(myObj.name);
    var btn=document.createElement('button');
    var editBtn=document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(document.createTextNode(myObj.name+" "+myObj.email+" "+myObj.phone));
    li.id=oid;
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
    
     var par=e.target.parentElement;
     //btn.parentElement;
     var id=par.id;
     
     axios.delete(`https://crudcrud.com/api/0c4d8d4bb3fb46a2812c96a548c9b3cc/appointmentData/${id}`).then(res=>alert("element got deleted")).catch(err=>console.log(err));
    par.remove();
     //  par.childNodes[0].remove();
    //  par.childNodes[0].remove();
    //  par.childNodes[0].remove();
     
     
    }

    

    
    
    console.log(document.getElementsByTagName('li'));
}

