<script>
  import textEditor from '../assets/text-editor.png';
  import terminal from '../assets/terminal.png';
  import browser from '../assets/browser.png';
  import devTools from '../assets/settings.png';
  let alt = 'code editor icon';
</script>

<div class="whatIsSvelte-wrapper">
  <h3>What is sVelocity?</h3>
  <p>
    sVelocity is an open-source integrated developer environment for Svelte.
    Everything you need to create your application is all in one place!
  </p>

  <div class="icon-wrapper">
    <div class="left-icons">
      <div class="editor-div">
        <img class="editor-img" src={textEditor} alt="Code editor" />
        <h5>A text editor to build your application's code with.</h5>
      </div>
      <div class="terminal-div">
        <img class="terminal" src={terminal} alt="Terminal" />
        <h5>
          A built in terminal so you can run in-line commands in the
          application!
        </h5>
      </div>
    </div>
    <div class="right-icons">
      <div class="browser-div">
        <img class="browser" src={browser} alt="Broswer View" />
        <h5>A browser view to preview your product.</h5>
      </div>
      <div class="devTools-div">
        <img class="devTools" src={devTools} alt="devtools" />
        <h5>Built in developer tools to guide you when you debug your code.</h5>
      </div>
    </div>
  </div>
</div>

<style>
  .whatIsSvelte-wrapper {
    background-color: #eae8f8;
    text-align: center;
  }

  h3 {
    margin: 0;
    padding: 20px 0 0 0;
    font-weight: 350;
    font-size: 300%;
    margin-bottom: 15px;
    color: #0f0459;
  }

  p {
    margin: 0;
    padding: 20px 0 40px 0;
    font-size: 130%;
    line-height: 135%;
  }

  .icon-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  div.icon-wrapper > div {
    flex: 20%;
    padding: 20px;
  }

  div.icon-wrapper > div > div > img {
    height: 100px;
    width: auto;
  }

  div.icon-wrapper > div > div > h5 {
    margin-bottom: 10%;
    font-size: 100%;
  }

  @media screen and (max-width: 650px) {
    div.icon-wrapper > div {
      flex: 50%;
    }
  }

  /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .icon-wrapper {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 475px) {
    h3 {
      font-size: 200%;
    }
    p {
      font-size: 75%;
    }
  }
</style>
