<section class="carousel" aria-label="Gallery">
  <ol class="carousel_viewport">
    <li class="carousel_slide" id="carousel_slide1" tabindex="0">
      <div class="carousel_snapper">
        <a href="#carousel_slide4" class="carousel_prev">Go to last slide</a>
        <a href="#carousel_slide2" class="carousel_next">Go to next slide</a>
      </div>  
    </li>
    <li class="carousel_slide" id="carousel_slide2" tabindex="0">
      <div class="carousel_snapper">
        <a href="#carousel_slide1" class="carousel_prev">Go to last slide</a>
        <a href="#carousel_slide3" class="carousel_next">Go to next slide</a>
      </div>  
    </li>
    <li class="carousel_slide" id="carousel_slide3" tabindex="0">
      <div class="carousel_snapper">
        <a href="#carousel_slide2" class="carousel_prev">Go to last slide</a>
        <a href="#carousel_slide4" class="carousel_next">Go to next slide</a>
      </div>  
    </li>
    <li class="carousel_slide" id="carousel_slide4" tabindex="0">
      <div class="carousel_snapper">
        <a href="#carousel_slide3" class="carousel_prev">Go to last slide</a>
        <a href="#carousel_slide1" class="carousel_next">Go to next slide</a>
      </div>  
    </li>
  </ol>
  <aside class="carousel_navigation">
    <ol class="carousel_navigation-list">
      <li>
        <a href="carousel_slide1">
          Go to slide 1
        </a>
      </li>
    </ol>
  </aside>
</section>

<style>
  * {
  box-sizing: border-box;
  }

  .carousel {
    width: 300px;
    text-align: center;
    overflow: hidden;
  }
/* 
  .slides {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  } */
</style>
