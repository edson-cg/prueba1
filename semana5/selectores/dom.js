let container1 = document.querySelector('.form1');
let container2 = document.querySelector('.form2');
let container3 = document.querySelector('.form3');
let container4 = document.querySelector('.form4');

container1.style.backgroundColor = 'red';
container1.style.color = 'white';
container1.style.fontFamily = 'Arial';
container1.style.fontSize = '40px';

container2.style.backgroundColor = 'blue';
container2.style.color = 'white';
container2.style.color = 'white';

container3.style.backgroundColor = 'green';
container3.style.color = 'white';
container3.style.color = 'white';

container4.style.backgroundColor = 'yellow';
container4.style.color = 'white';
container4.style.color = 'white';


const input = Array.from (document.querySelectorAll('input'));

const contenedor = document.querySelector('.atrapado');

const ul = document.createElement('ul')

input.map((element)=>{
    const li = document.createElement('li');
    const elementText = document.createTextNode(element.value);
    li.appendChild(elementText)
    ul.appendChild(li)
})

contenedor.appendChild(ul);
console.log(ul)

const body = document.body;
body.style.backgroundColor = 'red';
body.style.fontFamily = 'arial';
body.style.color = 'white';