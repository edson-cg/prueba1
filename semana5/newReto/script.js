let array1 = [
    {
        marca: 'toyota',
        modelo: 'yaris',
        color: 'rojo'
    },
    {
        marca: 'nissan',
        modelo: 'sentra',
        color: 'black'
    },
    {
        marca: 'mazda',
        modelo: 'CX-30',
        color: 'black'
    }
];

let recorrer = document.querySelector('.a1');

console.log(array1);

for(let i = 0; i < array1.length; i++){
    console.log(array1[i])
    let b = array1[i];
    recorrer.innerHTML = b;
}