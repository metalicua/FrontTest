document.addEventListener("DOMContentLoaded", function(){
    let burger = document.querySelector('.header__burger')
        navigation = document.querySelector('.nav'),
        selects = document.querySelectorAll('.select'),
        selectContentAll = document.querySelectorAll('.select__content'),
        color = document.getElementById('color'),
        plus = document.querySelector('.plus'),
        input = document.getElementById('inputNumber'),
        data = document.getElementById('data'),
        city = document.getElementById('city'),
        delivery = document.getElementById('delivery'),
        minus = document.querySelector('.minus'),
        selectTitle = document.querySelectorAll('.select__title'),
        obj = {},
        formBtn = document.getElementById('form-btn'),
        stepsDots = document.querySelectorAll('.dot'),
        slideCategory= document.querySelectorAll('.s-slider__category');
       
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

    // selects

    function dropDown (el){
            selectSingle_title = el.querySelector('.select__title'),
            selectSingle_labels = el.querySelectorAll('.select__label'),
            selectContent = el.querySelector('.select__content');

            clear();
            closeCalendar();
            
              if ('active' === el.getAttribute('data-state')) {
                el.setAttribute('data-state', '');
                selectContent.classList.remove('df');
              } else {
                el.setAttribute('data-state', 'active');
                selectContent.classList.add('df')
              }

            for (let i = 0; i < selectSingle_labels.length; i++) {
                selectSingle_labels[i].addEventListener('click', (evt) => {
                selectSingle_title.textContent = evt.target.textContent;
                el.setAttribute('data-state', '');
                selectContent.classList.remove('df');
              });
            }     
    }

    function clickToSelect() {
     
        selects.forEach(el => {
            let dataId = el.getAttribute('data-id');

            el.addEventListener('click', function(e){
                let targetId = e.target.getAttribute('data-id');

                if (dataId == targetId) {
                    dropDown (el);
                    return;
                }
            })
        })
    }

    function clear() {
        selects.forEach(element =>{element.setAttribute('data-state', '');});
        selectContentAll.forEach(element => {element.classList.remove('df') });
    }
        
    // Input change value

    function plusValue (){
        plus.addEventListener('click', function() {
            currentValue = Number.parseInt(input.value) || 100;
                input.value = currentValue + 1;
                return input.value;
        })
    }
    function minusValue (){
        minus.addEventListener('click', function() {
            currentValue = Number.parseInt(input.value) || 100;
                input.value = currentValue - 1;
                return input.value;
        })
    }



    function getColor(){
        if (color.textContent == 'Colors'){
            console.log(`Select ${color.textContent}`); 
            return;
        }
        return obj.color = color.textContent 
    }
    function getSize(){
        if (size.textContent == 'Size'){
            console.log(`Select ${size.textContent}`); 
            return;
        }
        return obj.size = Number.parseInt(size.textContent);
    }
    function getCity(){
        if (city.textContent == 'City'){
            console.log(`Select ${city.textContent}`); 
            return;
        }
        return obj.city = city.textContent;
    }
    function getDelivery(){
        if (delivery.textContent == 'Delivery'){
            console.log(`Select ${delivery.textContent}`); 
            return;
        }
        return obj.delivery = delivery.textContent;
    }
  
    function reset(){
        color.textContent = 'Colors';
        size.textContent = 'Size';
        city.textContent = 'City';
        delivery.textContent = 'Delivery';
        data.textContent = '18.02.2021';
        input.value = 100;
        return obj = {};
    }
  
    formBtn.addEventListener('click', function(e){
        e.preventDefault();
        getColor();
        getSize();
        getCity();
        getDelivery();

        obj.numb = Number.parseInt(input.value);
        obj.data = data.textContent;
        console.log(obj)
        reset()
    })

    // Steps Slider 
    
    function stepAnimation(){
        stepsDots.forEach(el =>{
            let  currentStep = el.getAttribute('data-step'),
                 currentLine = document.getElementById(`step-${currentStep}`),
                 allLine = document.querySelectorAll('.steps__line--active'),
                 stepsName = document.querySelectorAll('.steps__name');
    
            el.addEventListener('click', function(){
    
                if (this.classList.contains('dot--active') == false){
    
                    for (i = 0; i < currentStep; i++){
                       stepsDots[i].classList.add('dot--active'); 
                       stepsName[i].classList.add('steps__name--active');
                    }
                    for (i = 0; i <currentStep - 1; i++) {
                        if (allLine[i].offsetWidth == '0'){
                            allLine[i].animate([
                                {width: '0'},
                                {width: '100%'}
                            ],
                            {
                                duration: 700,
                              })
                          
                            setTimeout(function(){
                                for (i = 0; i <currentStep - 1; i++) {
                                    allLine[i].style.width = '100%';
                                }
                            }, 600); 
                        }
                        currentLine.animate([
                            {width: '0'},
                            {width: '100%'}
                        ],
                        {
                            duration: 700,
                          })
                          setTimeout(function(){
                            currentLine.style.width = '100%';
                        }, 600);
                       
                    }                
                    return;
                }
    
                for (i=currentStep - 1; i<allLine.length; i++){
                    allLine[i].style.width = '0';
                }
                for (i=currentStep; i<stepsDots.length; i++){
                    stepsDots[i].classList.remove('dot--active');
                    stepsName[i].classList.remove('steps__name--active');
                }   
            })
        })
    };

    function deActiovation(){
        slideCategory.forEach(el => {el.classList.remove('s-slider__category--active');})
    }

    slideCategory.forEach(el => {
        

        el.addEventListener('click', function(){
            deActiovation()
            this.classList.add('s-slider__category--active');
        })
    });


    clickToSelect();
    plusValue ();
    minusValue ();
    stepAnimation();
  
    // jQuery calendar

    $('.data').on('click', function(){
        clear()
        var $calendar = $("#calendar");

        if ($calendar.css('display') == 'none'){
            $calendar.show('slow');

            $calendar.ionCalendar({
                lang: "en",                     
                sundayFirst: false,            
                years: "50",                    
                format: "DD.MM.YYYY",           
                onClick: function(date){        
                    $('.calendar-date').text(date);
                    closeCalendar()
                }   
            });
        }
    
    });

    function closeCalendar(){
        $("#calendar").hide('slow');
    }

});
