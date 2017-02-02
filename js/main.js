$(function() {
  $('.col-lg-4').on('click','.card-box',function() {
    $(this).toggleClass('selected');
  });

  $('.btn-compare').on('click',function() {
    if ($('.card-box.selected').length > 1)
    {
      $('.card-box').not('.selected').parent('.col-lg-4').hide(500);
      $('.card-box').removeClass('selected');
    }
  });

  $('.btn-reset').on('click',function() {
    $('.card-box').parent('.col-lg-4').show(500);
    $('.card-box').removeClass('selected');
  });
});
