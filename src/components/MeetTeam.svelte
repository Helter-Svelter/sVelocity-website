<script>
  import Tehya from '../assets/Tehya.png';
  import Eleni from '../assets/Eleni.png';
  import Allie from '../assets/Allie.png';
  import Justin from '../assets/Justin.png';
</script>

<div class="team-container">
<h3 class="team">sVelocity Team</h3>
<div class="team-outer-container">
  <div class="avatar1">
    <img class="avatar" src={Tehya} alt="Avatar 1" />
    <div class="name"><p>Tehya Rassman</p></div>
    <div class="icon-div">
      <a id="github-icon" href="https://github.com/tehyaarassman"
        ><i class="fa fa-github" style="font-size:36px; color: #120563;" /></a
      >
      <a class="linkedin-img" href="https://www.linkedin.com/in/tehya-rassman/">
        <i
          class="fa fa-linkedin-square"
          style="font-size:36px; color: #120563;"
        />
      </a>
    </div>
    <!-- add a tag for my name, and the github and linkded in -->
  </div>

  <div class="avatar2">
    <img class="avatar" src={Eleni} alt="Avatar 2" />
    <div class="name"><p>Eleni Zoumpoulaki</p></div>
    <div class="icon-div">
      <a id="github-icon" href="https://github.com/elenizoump"
        ><i class="fa fa-github" style="font-size:36px; color: #120563;" /></a
      >
      <a class="linkedin-img" href="https://www.linkedin.com/in/elenizoump">
        <i
          class="fa fa-linkedin-square"
          style="font-size:36px; color: #120563;"
        />
      </a>
    </div>
    <!-- add a tag for my name, and the github and linkded in -->
  </div>

  <div class="avatar3">
    <img class="avatar" src={Allie} alt="Avatar 3" />
    <div class="name"><p>Allison Gramy</p></div>
    <div class="icon-div">
      <a id="github-icon" href="https://github.com/AllieMarzieh"
        ><i class="fa fa-github" style="font-size:36px; color: #120563;" /></a
      >
      <a class="linkedin-img" href="www.linkedin.com/in/Allisongramy">
        <i
          class="fa fa-linkedin-square"
          style="font-size:36px; color: #120563;"
        />
      </a>
    </div>
    <!-- add a tag for my name, and the github and linkded in --> 
  </div>
  <div class="avatar4">
    <img class="avatar" src={Justin} alt="Avatar 4" />
    <div class="name"><p>Justin Blalock</p></div>
    <div class="icon-div">
      <a id="github-icon" href="https://github.com/jmblalock"
        ><i class="fa fa-github" style="font-size:36px; color: #120563;" />
      </a>
      <a class="linkedin-img" href="https://www.linkedin.com/in/justinmblalock/">
        <i
          class="fa fa-linkedin-square"
          style="font-size:36px; color: #120563;"
        />
      </a>
    </div>
  </div>
</div>

</div>

  


<style>
  .team-container{
    background-color: #eae8f8;
   padding: 10px;
  }
  .team {
    text-align: center;

  }
  h3 {
    margin: 0;
    padding: 20px 0 0 0;
    font-weight: 300;
    font-size: 300%;
    margin-bottom: 15px;
    color: #0f0459;
  }

  .team-outer-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    /* margin-top: -48px; */
    width: calc(100% + 48px);
    margin-bottom: 1%;
    /* margin-left: -48px; */
  }

  .name{
    text-align: center;
  }

  .icon-div {
    text-align: center;
  }

  .avatar1, .avatar2, .avatar3, .avatar4 {
    flex-basis: 25%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 25%;
    flex-direction: row;
  }
 
  

  .avatar {
    width: 150px !important;
    height: 150px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-bottom: 10px !important;
    line-height: 1;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    align-items: center;
    -webkit-box-pack: center;
    position: relative;
    display: flex;
  }
</style>
