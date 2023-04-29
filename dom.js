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
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='Goodbye';
headerTitle.innerHTML='<h3>Hello</h3>';
header.style.borderBottom='solid 3px #000';