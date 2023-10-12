{/*importing style sheets*/}
import './App.css'; 
import './home.css';
import './about.css';
import './skills.css';
import './projects.css';
import './contact.css';

{/*importing brand logos for contact card*/}
import GitHub from "./github.png"
import LinkedIn from "./linkedin.png"
import Outlook from "./microsoft.png"
import Gmail from "./google.png"
import Download from "./download.png"
import Resume from "./CV.pdf"

function App() {
  return(

    <div className = "App">
      
      {/*fixed elements*/}
      <body>
        {/*navbar section*/}
        <nav>
          <a className = "nav" href = "#home">Home</a>
          <a className = "nav" href = "#about">About</a>
          <a className = "nav" href = "#skills">Skills</a>
          <a className = "nav" href = "#projects">Projects</a>
          <a className = "nav" href = "#contact">Contact</a>
        </nav>
      
      </body> 

      {/*home section*/}
      <div className = "home" id = "home">

        <h1 className = "home_h1">Kristina Isbabelle M. Cortez</h1>

      </div> 

      {/*about section*/}
      <div className = "about" id = "about">

        <h1 className = "about_h1">Hello, World!</h1>
        <h1 className = "about_text">I am a computer engineering student at the University of Waterloo; currently on my 1B term. I am a Toronto-based full-stack software developer with an interest in game development and circuitry. Having 3+ years of programming experience from high-school and university courses to individual exploration. With my learning journey and 2 work terms, I was able to create meaningful applications: a website for a small business and a company finance organizer.</h1>
        
        <div className = "avatar">
          <iframe src='https://my.spline.design/untitled-21afa2f4213b9b038760bf17b407ab7f/' frameborder = '0' width='100%' height='700px'></iframe> 
        </div>

        <div className = "wrapper_btn">
          <div className = "download_btn">
            <div className = "btn"><img src = {Download}></img></div>
            <a href = {Resume} download = "Kristina Isabelle M. Cortez - Resume">Download CV</a>
          </div>
        </div>

      </div>

      {/*skills section*/}
      <div id = "skills">
      
        <h1 className = "skills">Skills</h1>
      </div>

      {/*projects section*/}
      <div id = "projects">
        <h1 className = "projects">Projects</h1>
      </div>
      

      {/*contact section*/}
      <div className = "wrapper" id = "contact">

        {/*contact card*/}
        <div className = "button">
          <div className = "icon"><img src = {GitHub}></img></div>
          <span href = "https://github.com/kisabellecortez">GitHub</span>
        </div>

        <div className = "button">
          <div className = "icon"><img src = {LinkedIn}></img></div>
          <span href = "https://www.linkedin.com/in/kristina-isabelle-cortez-540765215/">LinkedIn</span>
        </div>

        <div className = "button">
          <div className = "icon"><img src = {Outlook}></img></div>
          <span>university email</span>
        </div>

        <div className = "button">
          <div className = "icon"><img src = {Gmail}></img></div>
          <span>personal email</span>
        </div>

      </div>


    </div>

  )

  }

export default App
