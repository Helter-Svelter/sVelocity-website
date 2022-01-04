<script>
  import linkedin from '../assets/linkedin.png';
</script>
<nav> 
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <a id = "github-icon" href="https://github.com/oslabs-beta/sVelocity"><i class="fa fa-github" style="font-size:36px"></i></a>
  <a id="linkedin-icon"  href="/" > <img class="linkedin-img" src={linkedin} alt="linkedin" /> </a>
</nav>
<!-- <h3>
  you're a star baby! 
</h3> -->

<style>
  /* h3 {
  background-color: pink;

  } */
  nav{
    display: flex;
    list-style: none;
    border-bottom: 1px solid lightblue;
    transition: border-bottom 0.5;
    background-color: lavender; 
    justify-content: flex-end;
    margin: 0;
  } 

  .linkedin-img{
    height: 36px;
    width: auto;
    margin-left: 10px;
    /* #551a8b */
  }


  
</style>
