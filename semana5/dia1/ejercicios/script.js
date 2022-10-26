/* Ejercicio 1 */

let operacion = document.querySelector('.ejercicio1');

function datos() {
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let resultado = num1 + num2;
    
    if (resultado == resultado) {
        operacion.innerHTML = resultado;
    } else {
        operacion.innerHTML = 'Rellena los campos';
    }
};

/* Ejercicio 2 */

let nota = document.querySelector('.ejercicio2');

function promedio(){
    let num1 = parseInt(document.getElementById('nota1').value);
    let num2 = parseInt(document.getElementById('nota2').value);
    let num3 = parseInt(document.getElementById('nota3').value);
    let num4 = parseInt(document.getElementById('nota4').value);
    let resultado = (num1 + num2 + num3 + num4) / 4;

    if (resultado == resultado) {
        nota.innerHTML = resultado;
    } else {
        nota.innerHTML = 'Rellena los campos';
    }
};

/* Ejercicio 3 */

let area = document.querySelector('.ejercicio3');

function rectangulo() {
    let num1 = parseFloat(document.getElementById('largo').value);
    let num2 = parseFloat(document.getElementById('ancho').value);
    let resultado = num1 * num2;
    
    if (resultado == resultado) {
        area.innerHTML = resultado;
    } else {
        area.innerHTML = 'Rellena los campos';
    }
};

/* Ejercicio 4 */

let area2 = document.querySelector('.ejercicio4');

function triangulo() {
    let num1 = parseFloat(document.getElementById('base').value);
    let num2 = parseFloat(document.getElementById('altura').value);
    let resultado = (num1 * num2) / 2;
    
    if (resultado == resultado) {
        area2.innerHTML = resultado;
    } else {
        area2.innerHTML = 'Rellena los campos';
    }
};

/* Ejercicio 5 */

let area3 = document.querySelector('.ejercicio5');

function circunferencia() {
    let num1 = parseFloat(document.getElementById('radio').value);
    let cal = Math.PI;
    let resultado = cal * (num1 * num1);
    
    if (resultado == resultado) {
        area3.innerHTML = resultado;
    } else {
        area3.innerHTML = 'Rellena el campo';
    }
};

/* Ejercicio 6 */

let sueldo = document.querySelector('.ejercicio6');

function calculo(){
    let num1 = parseInt(document.getElementById('sal').value);
    let num2 = parseInt(document.getElementById('di').value);
    let num3 = parseInt(document.getElementById('ho').value);
    let resultado = num1 * num2 * num3;

    if (num2 <= 7 && num3 <= 168) {
        sueldo.innerHTML = `s/${resultado}`;
    } else if (num2 > 7) {
        sueldo.innerHTML = 'Ingrese una cantidad de días a la semana correctamente';
    } else if (num3 > 168) {
        sueldo.innerHTML = 'Ingrese una cantidad de horas a la semana correctamente';
    } else {
        sueldo.innerHTML = 'Rellena los campos';
    }
};

/* Ejercicio 7 */

let metros = document.querySelector('.ejercicio7');

function pulgadas() {
    let num1 = parseFloat(document.getElementById('met').value);
    let pul = 39.3701;
    let resultado = num1 * pul;
    
    if (resultado == resultado) {
        metros.innerHTML = `${resultado} in`;
    } else {
        metros.innerHTML = 'Rellena el campo';
    }
};

/* Ejercicio 8 */

let cambio = document.querySelector('.ejercicio8');

function dolar() {
    let num1 = parseFloat(document.getElementById('sol').value);
    let num2 = parseFloat(document.getElementById('dol').value);
    let resultado = num1 * num2;
    
    if (resultado == resultado) {
        cambio.innerHTML = `$${resultado}`;
    } else {
        cambio.innerHTML = 'Rellena los campos';
    }
};