import Navbar from './Navbar'; 
import './App.css'; 

import AboutMe from './AboutMe'; 
import ContactMe from './ContactMe'; 
import Documents from './Documents'; 
import Skills from './Skills'; 
import Projects from './Projects'; 

import P_Java from './Java'; 
import P_CPP from './C++'; 
import P_Py from './Python'; 
import P_JS from './JavaScript'; 
import P_ES from './ES'; 
import P_VHDL from './VHDL';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <AboutMe/>
    break
    case "/aboutme":
      component = <AboutMe/>
      break
      case "/skills":
        component = <Skills/>
        break
        case "/projects":
          component = <Projects/>
          break
          case "/documents":
            component = <Documents/>
            break
            case "/contactme":
              component = <ContactMe/>
              break
              case "/projects/java":
                component = <P_Java/>
                break
                case "/projects/cpp":
                  component = <P_CPP/>
                  break
                  case "/projects/py":
                    component = <P_Py/>
                    break
                    case "/projects/js":
                      component = <P_JS/>
                      break
                      case "/projects/es":
                        component = <P_ES/>
                        break
                        case "/projects/vhdl":
                          component = <P_VHDL/>
                          break; 
                          case "/projects/back":
                            component = <Projects/>
                            break

  }
  return( 
  <>
    <Navbar/>
    {component}
  </>
  )

}

export default App
