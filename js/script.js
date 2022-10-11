$(document).ready(function() {
    $("#burger").click(function(){
        $(".header__burger").toggleClass("active");
        $(".burger__nav").toggleClass("closed");
        $("body").toggleClass("lock");

    });     
});



$(document).ready(function() {
    $("#aboutme").click(function(){
        $(".header__burger").toggleClass("active");
        $(".burger__nav").toggleClass("closed");
        $("body").toggleClass("lock");

    });     
});

$(document).ready(function() {
    $("#portf").click(function(){
        $(".header__burger").toggleClass("active");
        $(".burger__nav").toggleClass("closed");
        $("body").toggleClass("lock");

    });     
});

$(document).ready(function() {
    $("#work").click(function(){
        $(".header__burger").toggleClass("active");
        $(".burger__nav").toggleClass("closed");
        $("body").toggleClass("lock");

    });     
});

$(document).ready(function() {
    $("#price").click(function(){
        $(".header__burger").toggleClass("active");
        $(".burger__nav").toggleClass("closed");
        $("body").toggleClass("lock");

    });     
});

$(document).ready(function() {
    $("#slide").click(function(){
        $(".header__burger").toggleClass("active");
        $(".burger__nav").toggleClass("closed");
        $("body").toggleClass("lock");

    });     
});

$(document).ready(function() {
    $("#ask").click(function(){
        $(".header__burger").toggleClass("active");
        $(".burger__nav").toggleClass("closed");
        $("body").toggleClass("lock");

    });     
});

$(document).ready(function() {
    $('[id^="popup"]').click(function(e){
        $(".modal").toggleClass("none");
        $("body").toggleClass("lock");

    });     
});
$(document).ready(function() {
    $(".modal__close").click(function(e){
        $(".modal").addClass("none");
        $("body").removeClass("lock");

    });     
});






const tabsBtn = document.querySelectorAll(".tab__header");
const tabsItems = document.querySelectorAll(".content");

tabsBtn.forEach(function(item){
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(! currentBtn.classList.contains("active")) {

        }

        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('visible');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('visible');
    });
});

document.querySelector(".tab__header").click();

$(document).ready(function(){
    $('.reviews__slider').slick({
        dots:true,
        speed:1700,
        easing:'ease-in',
        responsive: [
            {
              breakpoint: 971,
              settings: {
                dots: false,
                speed:700,
              }
            },
          ]
        });
    });

// Header hide

$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
if ((st > lastScrollTop) && (lastScrollTop>0)) {
       // downscroll code
      $("header").css("top","-70px");
  
   } else {
      // upscroll code
      $("header").css("top","0px");
   }
       lastScrollTop = st;
    });
});

  
// ------


$("a[href^='#about']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top +50;

	$("body, html").animate({
		scrollTop: position
	}, 1100 /* speed */ );
});
$("a[href^='#portfolio']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 1300 /* speed */ );
});
$("a[href^='#steps']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top -20;

	$("body, html").animate({
		scrollTop: position
	}, 1300 /* speed */ );
});

$("a[href^='#prices']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top -20;

	$("body, html").animate({
		scrollTop: position
	}, 1300 /* speed */ );
});
$("a[href^='#reviews']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top -20;

	$("body, html").animate({
		scrollTop: position
	}, 1300 /* speed */ );
});

$("a[href^='#contacts']").click(function(e) {
	e.preventDefault(e);
	
	var position = $($(this).attr("href")).offset().top -50;

	$("body, html").animate({
		scrollTop: position
	}, 1300 /* speed */ );
});

$("#aboutf").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});
$("#portff").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top -100
    }, 2000);
});
$("#workf").click(function() {
    $('html, body').animate({
        scrollTop: $("#steps").offset().top -100
    }, 2000);
});
$("#pricesf").click(function() {
    $('html, body').animate({
        scrollTop: $("#prices").offset().top -100
    }, 2000);
});
$("#revf").click(function() {
    $('html, body').animate({
        scrollTop: $("#reviews").offset().top -100
    }, 2000);
});
$("#conf").click(function() {
    $('html, body').animate({
        scrollTop: $("#contacts").offset().top -300
    }, 2000);
});




$("#top").click(function() {
    $("html").animate({ scrollTop: 0 }, "slow");
    });





 

    $(document).ready(function() {
        var url = window.location.href;
        console.log(url);
        if( url.indexOf('#') < 0 ) {
            window.location.replace(url + "#");
        } else {
            window.location.replace(url);
        }
    });

    let mybutton = document.getElementById("top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        mybutton.style.opacity = 1;
      } else {
        mybutton.style.opacity = 0;
      }
    }



SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 600,
    // Размер шага в пикселях 
    stepSize         : 65,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 20,  
    // Максимальное ускорение
    accelerationMax   : 2,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})
