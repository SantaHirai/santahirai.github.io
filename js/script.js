$(function(){
   var pagetop = $('#page-top');
   pagetop.hide();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
         pagetop.fadeIn();
      } else {
            pagetop.fadeOut();
      }
   });
   pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
   });
});

document.addEventListener('DOMContentLoaded', () => {
   const sections = document.querySelectorAll('.section');

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
            observer.unobserve(entry.target);
         }
      });
   }, {
      threshold: 0.4
   });

   sections.forEach(section => {
      observer.observe(section);
   });
});
