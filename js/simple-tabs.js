$(document).ready(function() {

  // Change tab class and display content
  $('div.tab-content').not('[data-tab=1]').addClass('hide');

  $('.tabs-nav li').first().addClass('active');
  $('.tabs-nav li').on('click', function() {
  $(this).addClass("active");
  $('.tabs-nav li').not(this).removeClass('active');

  //start sort
  var sortable = $(this).attr('data-tab');
    $('div[data-tab = '+sortable+']').removeClass('hide');
    $('div.tab-content').not('[data-tab='+sortable+']').addClass('hide');
  });

  //add an all option - to show all tabs when clicked
  $('li[data-tab=all]').on('click', function() {
    $(this).addClass('active');
    $('div.tab-content').removeClass('hide');
  });

});