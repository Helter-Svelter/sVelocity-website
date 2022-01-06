<script>
  //import screenshots
  import darkMode from '../assets/dark-mode.png';
  import lightMode from '../assets/light-mode.png';
</script>

<!-- add a link for the download of the app with a tags -->
<div class="gif-container" />

<div class="instructions-container">
  <div>
    <img class="lightMode" src={darkMode} alt="Dark mode screenshot" /><br />
    <img class="darkMode" src={lightMode} alt="Dark mode screenshot" />
  </div>
  <div class="links">
    <p>
      Download sVelocity <a
        href="https://github.com/oslabs-beta/sVelocity/releases/download/v1.0.0/sVelocity-1.0.0-mac.dmg"
        alt="download dmg">here!</a
      >
    </p>
    <p>_________________________________</p>
    <p class="bottom-p">
      Find out how to use the app and contribute to the open source product <a
        href="https://github.com/oslabs-beta/sVelocity">here!</a
      >
    </p>
  </div>
</div>

<style>
  .instructions-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background-image: linear-gradient(180deg, #120563, #200e97, #3926af);
  }

  .lightMode {
    margin-bottom: 20px;
  }

  .bottom-p {
    margin-top: 0.8rem;
  }

  img {
    height: 300px;
    margin-left: 0.5rem;
  }

  p {
    margin: 0;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: #feeedd;
    font-size: 135%;
    text-align: center;
    font-weight: 300;
  }

  a {
    color: #bebeff;
  }

  @media screen and (max-width: 1160px) {
    img {
      height: 250px;
    }
  }

  @media screen and (max-width: 990px) {
    img {
      height: 225px;
    }
    p {
      font-size: 125%;
    }
  }
  @media screen and (max-width: 900px) {
    .instructions-container {
      flex-direction: column;
    }
    img {
      height: 220px;
    }
    p {
      font-size: 100%;
      margin-left: 0.2rem;
    }
  }

  @media screen and (max-width: 660px) {
    img {
      height: 200px;
    }
  }

  @media screen and (max-width: 380px) {
    img {
      height: 150px;
    }
  }
</style>
