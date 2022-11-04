const btnPrueba = document.querySelector('#btn-prueba');
btnPrueba.onclick = function(event){
    console.log('click desde el boton');
    console.log(event);
    Swal.fire('Hola mundo');
}

const btnPregunta = document.querySelector('#btn-pregunta');
btnPregunta.onclick = function(){
    Swal.fire('alguna pregunta', 'aca el texto de la pregunta en cuestion');
}

const btnError = document.querySelector('#btn-error');
btnError.onclick = function(){
    showAlert('error', 'hubo un error', 'email or password erroneos');
}

//-------------------------------------------------------------------

//definimos una nueva funcion para el sweet alert

function showAlert(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer: "<a href = 'https://google.com'> mas info"
    })
}

/* const btnError = document.querySelector('#btn-error');
btnError.onclick = function(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
} */

const btnWarning = document.querySelector('#btn-warning');
btnWarning.onclick = function(){
    showAlert2('warning','titulo del warning', 'contenido del warning');
}

function showAlert2(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer: "<a href = 'https://google.com'> peligro"
    })
}

const btnSuccess = document.querySelector('#btn-success');
btnSuccess.onclick = function(){
    Swal.fire('el success', 'contenido del success');
}

const btnAlertBotones= document.querySelector("#btn-alert-botones")

btnAlertBotones.onclick = function(){
    Swal.fire({    
        title: "Alerta",
        text: "Texto de Alerta",
        showDenyButton :true,
        showCancelButton: true,
        confirmButtonText : "guardar",
        denyButtonText: "negar"
    }).then((resultado)=>{
        console.log("resultado",resultado);
        if(resultado.isConfirmed){
            showAlert("success","conrirmado", "se confirmo la operacon");
            console.log("marco la confirmacion")
        }
        if(resultado.isDenied){
            showAlert("error","negado", "se nego la operacion");
            console.log("nego la operacion")
        }
       

    })
}

