
<script> 
import Tehya from '../assets/Tehya.png'

</script>
<h3 class="team"> sVelocity Team </h3>
<div class="team-outer-container">
<div class="avatar1">
      <img class="avatar" src={Tehya} alt="Avatar 1">
      <a id="github-icon" href="https://github.com/tehyaarassman"
      ><i class="fa fa-github" style="font-size:36px; color: #120563;" /></a

    > 
    <a class="linkedin-img" href="https://www.linkedin.com/in/tehya-rassman/">
        <i class="fa fa-linkedin-square" style="font-size:36px; color: #120563;" />
      </a>
      <!-- add a tag for my name, and the github and linkded in -->
</div>
</div>
<style>
    .team {
    background-color: #eae8f8;
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
  
  .team-outer-container{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin-top: -48px;
    width: calc(100% + 48px);
    margin-left: -48px;
  }
  
  .avatar1 {
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