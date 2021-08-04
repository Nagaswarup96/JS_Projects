const inps = document.querySelector("input");
const btnd = document.querySelector("#dot");
const btne = document.querySelector("#equal");
const btnc = document.querySelector("#clear");

const btnNum = document.querySelectorAll("#number");
const btnOp = document.querySelectorAll("#operator");
let num = '';

function numValue(){

    inps.value += this.value;
    num = inps.value;
}

btnNum.forEach( btn => btn.addEventListener("click", numValue));
btnOp.forEach( btn => btn.addEventListener('click', numValue));

btne.addEventListener('click', ()=>{

inps.value = eval(num);

});

btnc.addEventListener('click', ()=>{
    inps.value = "";
    num = 0;
})