//console.dir(document);Examin the document object
// console.log(document);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';
// headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';
// var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].textContent='Hello 2';
// //items[2].style.fontWeight='bold';
// //items[3].style.fonntWeight='bold';
// items[2].style.backgroundColor='yellow';
// // items.style.backgroundColor='#f4f4f4';
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }
// var li=document.getElementsByTagName('li');
// li[2].textContent='hello2';
// li[2].style.backgroundColor='yellow';
// for(var i=0;i<li.length;i++)
// {
//     li[i].style.fontWeight='bold';
// }
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0]=textContent='Hello';
// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }
//parentNode
// var itemlist=document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);
//parentElement
// var itemlist=document.querySelector('#items');
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f3f3f3s';
// console.log(itemlist.parentElement.parentElement.parentElement);
// var itemlist=document.querySelector('#items');
// //console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';
// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);
// var newDiv=document.createElement('div');
// //add class
// newDiv.className='hello';
// //add id
// newDiv.id='hello1';
// newDiv.setAttribute('title','hello div');
// //create text node
// var newDivText=document.createTextNode('hello World');
// newDiv.appendChild(newDivText);
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// console.log(container);
// console.log(h1);
// container.insertBefore(newDiv,h1);
// var nDiv=document.createElement('div');

// console.log(newDiv);
// console.log(nDiv);

// nDiv.className='hello2';
// nDiv.id='hello2';
//  nDiv.setAttribute('title','Hello world');
//  var ndivText=document.createTextNode('hello world');
//  nDiv.appendChild(ndivText);
//  var item=document.querySelectorAll('body .container');
//  console.log(item[1].children[0]);
//  var container2=document.querySelectorAll('body .title');
//  console.log(container2[1]);

// // 
// // newDiv.style.fontSize='30px';

//  item[1].children[0].insertBefore(nDiv,container2[1]);
var form =document.getElementById('addForm');
var itemlist=document.getElementById('items');
form.addEventListener('submit',addItem);
//delete event
itemlist.addEventListener('click',removeItem);
function addItem(e)
{

    e.preventDefault();
    var newItem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    li.className='list-group-item';
    console.log(li);
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'))
 li.appendChild(deleteBtn);
    itemlist.appendChild(li);
}
function removeItem(e)
{
    if(e.target.classList.contains('delete')){
    console.log(1);
    if(confirm('Are you Sure?'))
    {
        var li=e.target.parentElement;
        itemlist.removeChild(li);
    }
}
   // console.log();
}