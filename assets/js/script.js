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


  <header class="containter-fluid mb-4 header-about-us">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="7000">
          <img src="assets/img/carousel-1-small.jpg" class="d-block img-fluid" alt="...">
          <div class="carousel-caption text-left carousel-texto-us">
            <h2 class="">Traducción de documentos</h2>
            <p>del español al inglés</p>
          </div>
        </div>
        <div class="carousel-item" data-interval="7000">
          <img src="assets/img/carousel-2-small.jpg" class="d-block img-fluid header-img-2" alt="...">
          <div class="carousel-caption text-left carousel-texto-us">
            <h2>Traducción de documentos legales</h2>
            <p>de excelencia en menos de 2 horas</p>
          </div>
        </div>
        <div class="carousel-item" data-interval="7000">
          <img src="assets/img/carousel-3-small.jpg" class="d-block img-fluid" alt="...">
          <div class="carousel-caption text-left carousel-texto-us">
            <h2>Política de Confidencialidad</h2>
            <p>completamente garantizada</p>
          </div>
        </div>
        <div class="carousel-item" data-interval="7000">
          <img src="assets/img/carousel-4-small.jpg" class="d-block img-fluid header-img-4" alt="...">
          <div class="carousel-caption text-left carousel-texto-us">
            <h2>Mantenemos un compromiso</h2>
            <p>constante con nuestros clientes</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </header>

*/