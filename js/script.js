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




$("#top").click(function() {
    $("html").animate({ scrollTop: 0 }, "slow");
    });



    let mybutton = document.getElementById("top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
        mybutton.style.opacity = 0;
      } else {
        mybutton.style.opacity = 1;
      }
    }


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    }

    
