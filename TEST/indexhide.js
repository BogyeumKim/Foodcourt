$('.js-click-modal').click(function(){
  $('.container').addClass('modal-open');
});

$('.js-close-modal').click(function(){
  $('.container').removeClass('modal-open');
});

$('.js-click-modal_korea').click(function(){

  $('#wrap_kiosk').addClass('modal-open');
});




//   $(document).ready(function(){
    $('.menuOpt > a').on('click', function(){
    
        var GetaName = $(this).attr('href').split('#');
        $('html,body').animate({scrollTop : $('a[name ='+GetaName[1]+']').offset().top},10000);
       
    });
// });



  
  