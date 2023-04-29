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
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0]=textContent='Hello';
var odd =document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';
}
