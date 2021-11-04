$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      const gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 1000, function(){
        window.location.hash = gato;
      });
    }
  });

});