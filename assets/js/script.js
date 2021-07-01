/* Fix iOS 7 bug for -unit support 
var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);

if(iOS){
    function iosVhHeightBug() {
        var height = $(window).height();
        $("#article-why").css('height', height);
    }
 
    iosVhHeightBug();
    $(window).bind('resize', iosVhHeightBug);
}

<section class="containter-fluid section-location">
    <div class="article-filter text-white pt-3">
      <div class="container pl-4 pl-lg-0">
        <h2 class="pt-4 pt-md-5 pt-lg-4">Contáctanos</h2>
        <hr>
        <div class="row">
          <div class="col-12 col-md-7 pl-1 pl-sm-0">
            <h4 class="mb-2 mb-lg-0 pt-lg-3"><span><img class="pr-2 location-iconos img-fluid d-none d-lg-inline" src="assets/img/icono-location.png" alt=""></span> Hendaya 162, oficina 1501, Las Condes.</h4>
            <p class="pl-lg-4 ml-lg-4 pr-3 pr-sm-5 mr-md-5">Actualmente sólo estamos realizando reuniones online por la situación sanitaria actual, por lo que la oficina se encuentra cerrada.</p>
            <h4 class="pt-3 text-white"><span><img class="pr-2 location-iconos img-fluid d-none d-lg-inline" src="assets/img/icono-phone.png" alt=""></span> +56968496715</h4>
            <h4 class="pt-3 pb-4 pb-md-1"><span><img class="pr-2 location-iconos img-fluid d-none d-lg-inline" src="assets/img/icono-sobre.png" alt=""></span> contacto@dsttraducciones.cl</h4>
          </div>
          <div class="col-12 col-md-5 px-0 px-sm-1">
            <div class="text-center pb-5 p-sm-2">
              <img class="img-fluid img-location" src="assets/img/img-location.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


   <section class="containter-fluid section-location">
    <div class="article-filter text-white pt-3">
      <div class="container pl-3 pl-lg-0">
        <h2 class="pt-4 pt-md-5 pt-lg-4">Contáctanos</h2>
        <hr>
        <div class="row">
          <div class="col-12 col-md-7 pl-1 pl-sm-0">
            <div class="location-flex">

            </div>
            <h4 class="mb-2 mb-lg-0 pt-lg-3"><span><img class="pr-2 location-iconos img-fluid" src="assets/img/icono-location.png" alt=""></span> Hendaya 162, oficina 1501, Las Condes.</h4>
            <p class="pl-lg-4 ml-lg-4 pr-3 pr-sm-5 mr-md-5 d-none d-md-block">Actualmente la oficina se encuentra cerrada por la situación sanitaria actual, por lo que sólo estamos realizando reuniones online .</p>
            <h4 class="pt-3 text-white"><span><img class="pr-2 location-iconos img-fluid" src="assets/img/icono-phone.png" alt=""></span> +56968496715</h4>
            <h4 class="pt-3 pb-4 pb-md-1"><span><img class="pr-2 location-iconos img-fluid" src="assets/img/icono-sobre.png" alt=""></span> contacto@dsttraducciones.cl</h4>
          </div>
          <div class="col-12 col-md-5 px-0 px-sm-1">
            <div class="text-center pb-5 p-sm-2">
              <img class="img-fluid img-location" src="assets/img/img-location.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

*/