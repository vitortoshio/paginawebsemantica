//capturar eventos no formulario
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',function(e){
e.preventDefault();
const inputpeso= e.target.querySelector('#peso');
const peso =parseFloat(inputpeso.value);

const inputaltura= e.target.querySelector('#altura');
const altura=parseFloat(inputaltura.value);

const imc = calcularimc(peso,altura)

console.log(peso)
console.log(altura)
console.log(imc)
})

//função para calcular o imc e retornar o seu valor

function calcularimc(peso,altura){
    let imc = (peso/(altura**2));//formula do imc 
    console.log(imc)
    return imc.toFixed(2); //tofixed para formatarcasa decimal 
}