var form=document.getElementById('my-form');
form.addEventListener('submit',saveCrudC);
window.addEventListener("DOMContentLoaded",()=>{
    axios.get(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList`).then((response)=>{
     console.log(response.data)
    var obj=response.data
    
    for(var key in obj)
    {
        var ul=document.getElementById("list")
        console.log('control babe')
    
    var li=document.createElement('li')
    
    var buy1=document.createElement('button')
    buy1.appendChild(document.createTextNode('Buy 1'))
     //btn.id='buy1';
    var buy2=document.createElement('button')
    console.log('control babe')
    buy2.appendChild(document.createTextNode('Buy 2'))
    //btn2.id='buy2';
    var buy3=document.createElement('button')
    buy3.appendChild(document.createTextNode('Buy 3'))
    // btn2.id='buy3';
    
        li.id=obj[key]._id;
        li.appendChild(document.createTextNode(obj[key].ItemName+" "+obj[key].Description+" "+obj[key].Price+" "+obj[key].Quantity+" "))
        li.appendChild(buy1)
       
        li.appendChild(buy2)
        li.appendChild(buy3)
        ul.appendChild(li)
        console.log("hii")
        buy1.addEventListener('click',buyOne1);
       buy2.addEventListener('click',buyTwo1);
       buy3.addEventListener('click',buyThree1);
       function buyOne1(e)
{
    let car=e.target.parentElement.id;
    console.log(car);
    obj[car].Quantity=obj[car].Quantity-1;
    axios.put(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList/${car}`,myObj).then(res=>console.log(res)).catch(err=>console.log(err));
   // myObj.Price=myObj-1;
}
function buyTwo1(e)
{let car=e.target.parentElement.id;
    console.log(car);
    obj[car].Quantity=myObj[car].Quantity-2;
    axios.put(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList/${car}`,myObj).then(res=>console.log(res)).catch(err=>console.log(err));
}
function buyThree1(e)
{
    let car=e.target.parentElement.id;
    console.log(car);
    obj[car].Quantity=obj[car].Quantity-3;
    axios.put(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList/${car}`,myObj).then(res=>console.log(res)).catch(err=>console.log(err));
} 


    }


    }).catch(err=>console.log())
})
function saveCrudC(e)
{
    e.preventDefault();
    let myObj={
        ItemName:document.getElementById('ItemName').value,
        Description:document.getElementById('Description').value,
        Price:document.getElementById('Price').value,
        Quantity:document.getElementById('Quantity').value
    }
    
 axios.post(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList`,myObj).then((res)=>{
    var coid=res.data._id; 
 console.log(coid);
   var ul=document.getElementById("list");
   var li=document.createElement('li');
   li.id=coid;
   var btn=document.createElement('button');
   btn.appendChild(document.createTextNode('Buy 1'));
   //btn.id='buy1';
   var btn2=document.createElement('button');
   btn2.appendChild(document.createTextNode('Buy 2'));
   //btn2.id='buy2';
   var btn3=document.createElement('button');
   btn3.appendChild(document.createTextNode('Buy 3'));
   //btn2.id='buy3';
   
      // li.id=obj[key]._id;
       li.appendChild(document.createTextNode(myObj.ItemName+" "+myObj.Description+" "+myObj.Price+" "+myObj.Quantity+" "))
       li.appendChild(btn);
       li.appendChild(btn2);
       li.appendChild(btn3);
       ul.appendChild(li);
       btn.addEventListener('click',buyOne);
       btn2.addEventListener('click',buyTwo);
       btn3.addEventListener('click',buyThree);
      
}).catch(err=>console.log(err));
function buyOne(e)
{
    let car=e.target.parentElement.id;
    console.log(car);
    myObj.Quantity=myObj.Quantity-1;
    axios.put(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList/${car}`,myObj).then(res=>console.log(res)).catch(err=>console.log(err));
   // myObj.Price=myObj-1;
}
function buyTwo(e)
{let car=e.target.parentElement.id;
    console.log(car);
    myObj.Quantity=myObj.Quantity-2;
    axios.put(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList/${car}`,myObj).then(res=>console.log(res)).catch(err=>console.log(err));
}
function buyThree(e)
{
    let car=e.target.parentElement.id;
    console.log(car);
    myObj.Quantity=myObj.Quantity-3;
    axios.put(`https://crudcrud.com/api/c82fd812014b4fd9b750426dccc2cb56/ShopkeeperList/${car}`,myObj).then(res=>console.log(res)).catch(err=>console.log(err));
} 



    
}