document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector(".header__burger");navigation=document.querySelector(".nav"),t.addEventListener("click",function(){return this.classList.toggle("header__burger--open"),"block"==navigation.style.display?(navigation.animate([{transform:"translate3D(0, 0, 0)"},{transform:"translate3D(0, -300px, 0)"}],{duration:1e3}),void setTimeout(function(){navigation.style.display="none"},900)):(navigation.style.display="block",void navigation.animate([{transform:"translate3D(0, -300px, 0)"},{transform:"translate3D(0, 0, 0)"}],{duration:1e3}))})});