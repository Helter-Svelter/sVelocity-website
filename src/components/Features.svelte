<script>
  import textEditor from '../assets/text-editor.png';
  import terminal from '../assets/terminal.png';
  import browser from '../assets/browser.png';
  import devTools from '../assets/settings.png';
  let alt = 'code editor icon';
</script>
<div class="icon-wrapper">
<div class="editor-div">
  <img class="editor-img" src={textEditor} alt="Code editor" />
  <h5>
    Implemented a Codemirror text editor to build your application's code with.
  </h5>
</div>
<div class="terminal-div">
  <img class="terminal" src={terminal} alt="Terminal" />
  <h5> A built in terminal so you can run in-line commands in the application! </h5>
</div>
<div class="browser-div">
  <img class="browser" src={browser} alt="Broswer View" />
  <h5> A browser view to preview your product.</h5>
</div>
<div class="devTools-div"> 
<img class="devTools" src={devTools} alt="devtools" />
<h5> Built in developer tools to guide you when debugging your code.
</h5> 
</div>  
</div>

<style>

  .icon-wrapper{ 
    display: flex;
    color : #9382fd;

  }

  .editor-div {
    margin-left: 15%;
    /* max-width: 100px; */
  }
  .editor-img {
    height: 100px;
    width : auto;
  }

  .terminal {
    height: 100px;
    width : auto;
  }
  .terminal-div{
    margin-left: 15%;
    /* max-width : 100px; */

  }

  .browser-div{
    margin-left: 15%;
  }
  .browser {
    height: 100px;
    width: auto;
  }

  .devTools-div {
    margin-left: 15%;
    margin-right: 15%;
  }
  .devTools {
    height: 100px;
    width: auto;
  }
</style>
