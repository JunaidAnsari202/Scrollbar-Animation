const scrollbar = document.querySelector('.scrollbar');

window.addEventListener('scroll',()=>{
    let percentage=(window.scrollY/(document.body.scrollHeight-window.innerHeight))
    scrollbar.style.width=percentage
})