<script>
  import dmgFile from '../assets/dmg-file.png';
  import zipFile from '../assets/zip-file-format.png';
</script>

<!-- add a link for the download of the app with a tags -->
<p class="download-title"> Download the DMG or Zip</p>

<div class="instructions-container">
  <div class="links">
    <a  href="https://github.com/oslabs-beta/sVelocity/releases/download/v1.0.0/sVelocity-1.0.0-mac.dmg"
    alt="download dmg"><img class="dmg" src={dmgFile} alt="dmg icon" /></a>

    <a  href="https://github.com/oslabs-beta/sVelocity/releases/download/v1.0.0/sVelocity-1.0.0-mac.zip"
    alt="download dmg"><img class="dmg" src={zipFile} alt="zip icon" /></a>
  </div>
  <p class="bottom-p">
    Find out how to use the app and contribute to the open source product <a
      href="https://github.com/oslabs-beta/sVelocity">here!</a
    >
  </p>
</div>

<style>
  .instructions-container {
    height: 80vh;
    background-image: linear-gradient(180deg, #120563, #200e97, #3926af);
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px 0;
  }

.dmg {
  height: 200px;
}

  .bottom-p {
    margin-top: 0.8rem;
  }

  .download-title {
    margin: 0;
    padding-top: 50px;
    color: #feeedd;
    font-size: 135%;
    text-align: center;
    font-weight: 300;
    background-color: #120563;
  }

  .bottom-p {
    color: #feeedd;
    font-size: 135%;
    text-align: center;
    font-weight: 300;
  }

  a {
    color: #bebeff;
  }

  
  @media screen and (max-width: 990px) {
    p {
      font-size: 125%;
    }
  }
  @media screen and (max-width: 900px) {
    .instructions-container {
      flex-direction: column;
    }
    p {
      font-size: 100%;
      margin-left: 0.2rem;
    }
  }

  @media screen and (max-width: 450px) {
    .links {
      flex-direction: column;
    }
    .dmg {
      height: 100px;
      margin-top: 20px;
    }

    .bottom-p {
      font-size: 100%;
    }
  }
</style>
