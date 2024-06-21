let open1 = document.getElementById('open');
let close1 = document.getElementById('close');
let container = document.querySelector('.container');

close1.addEventListener('click',function(){
    close1.classList.add('hide');
    container.classList.add('hide');
    open1.classList.remove('hide');
})
open1.onclick = function(){
    open1.classList.add('hide');
    close1.classList.remove('hide');
    container.classList.remove('hide');
}

