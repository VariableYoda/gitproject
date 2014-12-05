var myScroll;
  $(document).ready(function(){

   var arr=["Balcony","Bedroom","Bathroom"];
   $("#Balcony").text(arr[0]);
   $("#Bedroom").text(arr[1]);
   $("#Bathroom").text(arr[2]);

   $("#start").addClass('active');
   $('.button').click(function(){
    $('.active').removeClass('active');   
    $(this).addClass('active');

  });

   myScroll = new iScroll('wrapper',{hScrollbar:false});
   $(document).addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$('.slider-input').jRange({
    from: 0,
    to: 100,
    step: 1,
    scale: [0,100],
    width: 320,    
    showLabels: false,
    //theme:"theme-blue"
});
$('input[type="range"]').rangeslider();








 }); 