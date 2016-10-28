$( document ).ready(function() {
  var class_click;
  var thisSlide;
  var slideWidth = jQuery('.slide-item').outerWidth();
    //var arr = [];
   // arr = document.getElementsByTagName('img');
   // console.log(arr);
  //  function FirstSlider () {
        


    $('.navy').click(function() {
        //$('.slide-wrap').animate({})
        way = $(this).data("way");
      console.log(way);


var slide_curr =  $( ".first-slide" );
var slide_next = way == 'next' ? slide_curr.next('.slide-item') : slide_curr.prev('.slide-item');

if (!slide_next.length)
{
  slide_next = way == 'next' ? slide_curr.parent().find('.slide-item:first') : slide_curr.parent().find('.slide-item:last')
}

slide_curr.animate({
  left: (way == 'next' ? '-' : '') + '100%',
}, 500);

slide_next.show().css({
  left: (way == 'next' ? '' : '-') + '100%'
})
.animate({
  left: 0
}, 500);

      // if(way = 'next'){
      //   $( ".first-slide" ).next().css("display","block").animate({
      //       top: "560px"
      //       },500 );
      // }
      // else{
      //   $( ".first-slide" ).prev().css("display","block").animate({
      //       top: "560px"
      //       },500 );
      // }
      
    });  


 
 






















































































        












});
    function scrollSlide () {


    }