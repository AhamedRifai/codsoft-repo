const button = document.getElementsByClassName('visit-btn');
button.addEventListener('click',function()){
    const link = document.createElement('Visit Github');
    link.href = 'https://github.com/AhamedRifai';
    
}





const menuicon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuicon.onclick = () => {
    navlinks.classList.toggle('active');
}