const navAnim = ( ) =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header-nav__list');
  const navs = document.querySelector('.header-nav__lists');
  const navLinks = document.querySelectorAll('.header-nav__lists li');

burger.addEventListener("click", ()=>{
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = "";
    
    } else{
      link.style.animation = `navLinkMove 0.5s ease forwards ${index / 7 + 0.35}s`;
    
    }
    });

    burger.classList.toggle("toggle");
});




};
navAnim();