$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
      }
      else{
        $('.navbar').removeClass("sticky");
      }
      if(this.scroll>500){
        $('.scroll-up-btn').addClass("show");
      }else{
        $('.scroll-up-btn').removeClass("show");
      }     
 });

  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

   //toggle navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.navbar-btn i').toggleClass("active");
  });

  /*typing animation script
  var typed = new Typed(".typing",{
      strings:["Hallo","Molo","Lotjhani","Sawubona","Dumela","Dumela","Avuxeni","Sawubona"],
      typeSpeed:100,
      backSpeed: 60,
      loop:true
  });*/

  
  
});