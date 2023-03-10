const swiper=new Swiper(".swiper",{
//default parameters
slidesPreView:1,
spaceBetween:10,

//Responsive breakpoints
breakpoints:{
    //wlhen window width is >=320px
    320:{
        slidesPerView:1,
        spaceBetween:10,
    }, 
    //when window width is >=480px
    480:{
        slidesPerView:2,
        spaceBetween:30,
    },
    //when window width is >=640px
    640:{
        slidesPerView:3,
        spaceBetween:40,
    },

},
});
loop:true;
centereSlides:true