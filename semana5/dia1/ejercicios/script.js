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

/* Ejercicio 9 */

let edad = document.querySelector('.ejercicio9');

function contrato() {
    let num1 = parseFloat(document.getElementById('nac').value);
    let num2 = 2022;
    let resultado = num2 - num1;
    
    if (resultado == resultado) {
        edad.innerHTML = resultado;
    } else {
        edad.innerHTML = 'Rellena los campos';
    }
};

/* Ejercicio 10 */

let ages = document.querySelector('.ejercicio10');

function menor() {
    let nam1 = document.getElementById('name1').value;
    let num1 = parseInt(document.getElementById('age1').value);
    let nam2 = document.getElementById('name2').value;
    let num2 = parseInt(document.getElementById('age2').value);
    let nam3 = document.getElementById('name3').value;
    let num3 = parseInt(document.getElementById('age3').value);
    
    let resultado1 = `La persona menor de edad se llama: ${nam1} y tiene ${num1} años`;
    let resultado2 = `La persona menor de edad se llama: ${nam2} y tiene ${num2} años`;
    let resultado3 = `La persona menor de edad se llama: ${nam3} y tiene ${num3} años`;
    let resultado4 = `La edad de ${nam1} es igual a la de ${nam2} y ${nam3}, escriba edades diferentes`;
    let resultado5 = `La edad de ${nam2} es igual a la de ${nam3}, escriba edades diferentes`;
    let resultado6 = `La edad de ${nam1} es igual a la de ${nam2}, escriba edades diferentes`;
    let resultado7 = `La edad de ${nam1} es igual a la de ${nam3}, escriba edades diferentes`;
    /* let resultado8 = 'Rellena los campos'; */
    
    if (num1 < num2 && num1 < num3) {
        ages.innerHTML = resultado1;
    } else if (num1 < num2 && num1 > num3){
        ages.innerHTML = resultado3;
    } else if (num1 > num2 && num2 < num3){
        ages.innerHTML = resultado2;
    } else if (num1 === num2 && num1 === num3){
        ages.innerHTML = resultado4;
    } else if (num2 === num3){
        ages.innerHTML = resultado5;
    } else if (num1 === num2){
        ages.innerHTML = resultado6;
    } else if (num1 === num3){
        ages.innerHTML = resultado7;
    } else{
        ages.innerHTML = 'Rellena los campos';
    }

    if (nam1 == '' || nam2 == '' || nam3 == ''){
        ages.innerHTML = 'Rellena los campos';
    }

    /* if (num1 == null || num2 == null || num3 == null){
        ages.innerHTML = 'Rellena los campos';
    } */
};

/* Ejercicio 11 */

let bono = document.querySelector('.ejercicio11');

function servicio() {
    let num1 = parseInt(document.getElementById('trabajo').value);
    
    if (num1 === 1) {
        bono.innerHTML = `Su bono es de $100`;
    } else if (num1 === 2) {
        bono.innerHTML = `Su bono es de $200`;
    } else if (num1 === 3) {
        bono.innerHTML = `Su bono es de $300`;
    } else if (num1 === 4) {
        bono.innerHTML = `Su bono es de $400`;
    } else if (num1 === 5) {
        bono.innerHTML = `Su bono es de $500`;
    } else if (num1 > 5) {
        bono.innerHTML = `Su bono es de $1000`;
    } else {
        bono.innerHTML = 'Rellena el campo';
    }
};

/* Ejercicio 12 */

let salario = document.querySelector('.ejercicio12');

function ganancia() {
    let num1 = parseInt(document.getElementById('sala').value);
    let num2 = 0.1;
    let resultado = num1 + (num1 * num2);
    let resultado2 = resultado + (resultado * num2);
    let resultado3 = resultado2 + (resultado2 * num2);
    let resultado4 = resultado3 + (resultado3 * num2);
    let resultado5 = resultado4 + (resultado4 * num2);
    let resultado6 = resultado5 + (resultado5 * num2);

    if (num1 == 1500) {     
        salario.innerHTML = `El primer año gana: $${resultado} <br>
        El segundo año gana: $${resultado2} <br>
        El tercer año gana: $${resultado3} <br>
        El cuarto año gana: $${resultado4} <br>
        El quinto año gana: $${parseInt(resultado5)} <br>
        El sexto año gana: $${parseInt(resultado6)}`;
    } else {
        salario.innerHTML = 'Rellene el campo correctamente';
    }
}

/* Ejercicio 13 */

let evaluar = document.querySelector('.ejercicio13');

function notas() {
    let num1 = parseFloat(document.getElementById('not').value);
    let num2 = parseFloat(document.getElementById('not1').value);
    let num3 = parseFloat(document.getElementById('not2').value);
    let num4 = parseFloat(document.getElementById('not3').value);

    let desaprobado = 0;
    let aprobado = 0;
    
    if (num1 >= 10.5 && num1 < 20) {
        aprobado = aprobado + 1
    } else {
        desaprobado = desaprobado + 1
    }

    if (num2 >= 10.5 && num2 < 20) {
        aprobado = aprobado + 1
    } else {
        desaprobado = desaprobado + 1
    }

    if (num3 >= 10.5 && num3 < 20) {
        aprobado = aprobado + 1
    } else {
        desaprobado = desaprobado + 1
    }

    if (num4 >= 10.5 && num4 < 20) {
        aprobado = aprobado + 1
    } else {
        desaprobado = desaprobado + 1
    }

    evaluar.innerHTML = `Aprobados: ${aprobado} y Desaprobados: ${desaprobado}`;
};

/* Ejercicio 13-2 */

function forma(){
    let resu = document.querySelector('.ejercicio13-2');
    let cant = +(prompt('Ingrese la cantidad de notas'));
    
        let aprobado = 0;
        let desaprobado = 0;
    
    for (i = 0; i < cant; i++){
            let res = +(prompt('Ingrese una nota'));
        if (res >= 11 && res <= 20){
            aprobado = aprobado + 1;
        } else {
            desaprobado = desaprobado + 1;
        };
        let dio = `Los aprobados son: ${aprobado} <br> Los desaprobados son: ${desaprobado}`;
        resu.innerHTML = dio;
    };
}

/* Ejercicio 14 */

function focos(){
    let fo = document.querySelector('.ejercicio14');
    let cants = +(prompt('Ingrese la cantidad de focos'));

        let fRojo = 0;
        let fVerde = 0;
        let fBlanco = 0;

        for(let i = 0; i < cants; i++){
            let foco = prompt("Ingrese color foco " + (i +1) + ": ");
            if(foco == "rojo"){
                fRojo++;
            } else if (foco == "verde"){
                fVerde++;
            } else if (foco == "blanco"){
                fBlanco++;
            } else if(foco !== "rojo" || foco !== "verde" || foco !== "blanco"){
                return "color no encontrado, digitar solo rojo, verde o blanco";
            }
        }
        return fo.innerHTML = "Focos Verdes: " + fVerde +
        "\nFocos Blancos: " + fBlanco +
        "\nFocos Rojos: " + fRojo;
    }


/* Ejercicio 15 */

let votar = document.querySelector('.ejercicio15');

function voto() {
    let num1 = parseInt(document.getElementById('ed').value);
    
    if (num1 >= 18) {
        votar.innerHTML = `Puedes votar`;
    } else if (num1 < 18){
        votar.innerHTML = 'No puedes votar';
    } else {
        votar.innerHTML = 'Rellena el campo';
    }
};