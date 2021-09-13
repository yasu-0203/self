$(function(){

  $('button').click(function() {
    alert('うんこ');
  })

  $('.dropdwn li').hover(function(){
    $("ul:not(:animated)", this).slideDown();
}, function(){
    $("ul.dropdwn_menu",this).slideUp();
});
});