let showbtn=document.querySelector('#show-btn')
let modal=document.querySelector('#modal')
let close=document.querySelector('#close-btn')
let overlay=document.querySelector('#overlay')
showbtn.addEventListener('click',()=>{
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
})
close.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
overlay.addEventListener('click',()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
document.addEventListener('keydown',(e)=>{
    if(e.key=='Escape'){
        console.log("You are clicked escape");
    }
})