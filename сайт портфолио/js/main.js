const tabsBtn = document.querySelectorAll(".catalog__list-tab");
const tabsItems = document.querySelectorAll(".catalog__tabs");

tabsBtn.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains("active") ){

            tabsBtn.forEach(function(item){
                item.classList.remove("active");
            });
    
            tabsItems.forEach(function(item){
                item.classList.remove("active");
            });
            
    
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    
        
    });
});

$(document).ready(function(){
    $('.description__slider-inner').slick({
        dots:true,
        arrows:false,
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:1500,
    })

})