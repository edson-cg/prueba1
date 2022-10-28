//Darle el valor por defecto

let count = 0;

//Seleccionar los botones (atraparlos)

const value = document.querySelector('#value');
const items = document.querySelectorAll('.btn');

items.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }else if (styles.contains('increase')){
            count++;
        }else {
            count = 0;
        }

        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent = count
    });
});