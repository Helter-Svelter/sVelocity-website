<script>
  import logo from '../assets/logo_transparent.png';
</script>

<div class="header">
  <img class="logo" src={logo} alt="sVelocity logo" >
  <!-- <h1>sVelocity</h1> -->
  <p>All the tools you need in one Svelte developer environment.</p>
</div>

<style>
  .header {
  padding: 60px;
  text-align: center;

  /* font-size: 30px; */
  height: calc(100vh - 200px);
  background-image: linear-gradient(0deg, #120563, #200e97, #3926af);
}

.logo {
  height: 50%;
}

p {
  font-size: calc(max(1.5vw, 16px));
  color: #feeedd;
}

@media screen and (max-width: 770px) {
    .logo {
      height: 30%;
    }
  }

  @media screen and (max-width: 475px) {
    .logo {
      height: 25%;
    }
  }

  @media screen and (max-width: 400px) {
    .logo {
      height: 15%;
    }
  }
</style>