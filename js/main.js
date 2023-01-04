const btnEl=document.querySelector('.header > button')
const navEl=document.querySelector('.header > nav')

btnEl.addEventListener('click',handleBtnClick)

function handleBtnClick(e){
    if(navEl.style.display === 'block'){
        navEl.style.display='none'
    }else{
        navEl.style.display='block';
       

    }
}



