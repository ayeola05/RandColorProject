const bttn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

bttn.addEventListener('click', function(){
    const newColor = rand();
    h1.innerText = newColor;
    document.body.style.backgroundColor  = newColor
})



const rand = function(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}