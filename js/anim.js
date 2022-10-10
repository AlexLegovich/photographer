 // preloader
 function counter() {
  var count = setInterval(function(){
    var c = parseInt($('.counter').text());
    $('.counter').text((++c).toString());
    $('body').addClass('lock');
    if(c == 100){
      clearInterval(count);
      $('.counter').addClass('hide');
      $('.preloader').addClass('active');
      // $('body').removeClass('lock');

    }
    setTimeout(function(){
      $("body").removeClass("lock");
  }, 5500);
    
  }, 10);
  

}


counter();
//preloader end



 //Main block animation
 const tl = gsap.timeline();
 const main = document.querySelector('.main');
 const mainContent = document.querySelector('.main__content');
 const header = document.querySelector('.header');

 tl.to(main, { delay:3.4, clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)', ease: "circ.in"});
 tl.to(mainContent, { y:0, opacity:1, ease: "power4.out", duration:0.9}, '+=0.5');
 tl.to(header, {y:0, opacity:1, ease: "power4.out"});
 //main block animation end


gsap.to('.about__image-main', {
  scrollTrigger:'.about__image-main',
  opacity:1,
  start:'top center',
  delay: 0.2,
  duration:0.4,
  y:0,
  ease: "power1.inOut"
})

gsap.to('.about__third-sec', {
  scrollTrigger:'.about__wrapper',
  opacity:1,
  start:'top center',
  delay: 0.4,
  duration:0.4,
  y:0,
  ease: "power1.inOut"
})

gsap.to('.about__image-sec', {
  scrollTrigger:'.about__image-sec',
  opacity:1,
  start:'top center',
  delay: 0.2,
  duration:0.4,
  ease: "power1.inOut"
})





gsap.to('.about__content', {
  scrollTrigger:'.about__content',
  opacity:1,
  start:'top center',
  delay: 0.4,
  duration:0.3,
  y:0,
  ease: "power1.inOut"
})



gsap.to('#first-step', {
  scrollTrigger:'.steps',
  opacity:1,
  start:'top center',
  delay: 0.4,
  duration:0.3,
  y:0,
  ease: "power1.inOut"
})
gsap.to('#sec-step', {
  scrollTrigger:'.steps',
  opacity:1,
  start:'top center',
  delay: 0.8,
  duration:0.1,
  y:0,
  ease: "power1.inOut"
})
gsap.to('#third-step', {
  scrollTrigger:'.steps',
  opacity:1,
  start:'top center',
  delay: 1.0,
  duration:0.3,
  y:0,
  ease: "power1.inOut"
})
gsap.to('#fourth-step', {
  scrollTrigger:'.steps',
  opacity:1,
  start:'top center',
  delay: 1.3,
  duration:0.3,
  y:0,
  ease: "power1.inOut"
})

gsap.to('.steps__image', {
  scrollTrigger:'.steps__image',
  start:'bottom',
  delay: 0.0,
  duration:0.7,
  clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  ease: 'easeIn'
})

gsap.to('.prices__card', {
  scrollTrigger:'.prices',
  start:'center',
  delay: 0.,
  y:0,
  opacity:1,
  duration:0.4,
  ease: 'easeIn'
})

gsap.to('.reviews__slider', {
  scrollTrigger:'.reviews',
  start:'center',
  delay: 0.3,
  opacity:1,
  duration:0.4,
  ease: 'easeIn'
})

gsap.to('.blog__row', {
  scrollTrigger:'.blog__container',
  start:'center',
  delay: 0.3,
  y:0,
  opacity:1,
  duration:0.4,
  ease: 'easeIn'
})









//scroll to top on refresh

$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});

//scroll to top on refresh end





  
