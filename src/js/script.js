document.addEventListener("DOMContentLoaded", function(){
    let burger = document.querySelector('.header__burger')
        navigation = document.querySelector('.nav');

    
    // burger & mobile navigation

    burger.addEventListener('click', function(){
        this.classList.toggle('header__burger--open');

        if (navigation.style.display == 'block'){
            
            navigation.animate([
                { transform: 'translate3D(0, 0, 0)' },
                { transform: 'translate3D(0, -300px, 0)' }
              ], {
                duration: 1000,
              })
            setTimeout(function(){
                navigation.style.display = 'none';
            }, 900);
            return;
        }
        navigation.style.display = 'block';
        navigation.animate([
            { transform: 'translate3D(0, -300px, 0)' },
            { transform: 'translate3D(0, 0, 0)' }
          ], {
            duration: 1000,
          })
        
    
    });
});