const btnContainer = document.querySelector('.buttons-container');
const imgContainer = document.querySelector('.img-container');
const windowImg = document.querySelector('.window-img')
const closeBtn = document.querySelector('.close')
btnContainer.addEventListener('click',(e)=>{
    if(e.target!=btnContainer){
        let dir=e.target.textContent
        for(let i=0;i<imgContainer.children.length;i++){
            imgContainer.children[i].setAttribute('src',`./img/${dir}/img${i+1}.jpg`)
        }
    }
})
imgContainer.addEventListener('click',(e)=>{
    if(e.target!=imgContainer){
        windowImg.classList.add("show-window")
        windowImg.children[1].setAttribute("src",e.target.src)
    }
})
closeBtn.addEventListener('click',()=>{
    windowImg.classList.remove("show-window")
})