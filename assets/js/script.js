$(function(){
    //smoth scrolling
  $(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
      //desaparecer parrafos
  $(".baner1").click(function() {
    $( ".tog1" ).toggle( "slow" );
  });

  $(".baner2").click(function() {
    $( ".tog2" ).toggle( "slow" );
  });

  $(".baner3").click(function() {
    $( ".tog3" ).toggle( "slow" );
  });
    //Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
