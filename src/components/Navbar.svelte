<script>
  import linkedin from '../assets/linkedin.png';
</script>

<nav>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <a id="github-icon" href="https://github.com/oslabs-beta/sVelocity"
    ><i class="fa fa-github" style="font-size:36px; color: white;" /></a
  >

  <a class="linkedin-img" href="https://www.linkedin.com/">
    <i class="fa fa-linkedin-square" style="font-size:36px; color: white;" />
  </a>
  <!-- <a id="linkedin-icon"  href="/" > <img class="linkedin-img" src={linkedin} alt="linkedin" /> </a> -->
</nav>

<!-- <h3>
  you're a star baby! 
</h3> -->
<style>
  /* h3 {
  background-color: pink;

  } */
  nav {
    display: flex;
    list-style: none;
    transition: border-bottom 0.5;
    background-color: #0f0459;
    height: 100px;
    justify-content: flex-end;
    margin: 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  a  {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1rem;
  }

  .linkedin-img {
    height: 36px;
    width: auto;
    margin-left: 10px;
    /* #551a8b */
  }
</style>
