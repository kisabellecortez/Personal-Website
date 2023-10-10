import logo from './oculus.png'; 
import './aboutme.css';

console.log(logo); 

export default function AboutMe(){
    return(
           
    <a>

        <div className="container">
        <div className="box">
            <div className="product__img">
                <img src= {logo} alt="pop"/>
            </div>



            <div className="product__disc">
                <div className="product__disc--content">
                    <div className="disc__content--about">
                        <h1>About Me</h1>
                        <span>Hey there,</span>
                        <p>I'm an aspiring computer engineer, currently in my undergraduate studies at the University of Waterloo. I'm a full stack developer with a keen interest in game development.</p>
                    </div>


                </div>
            </div>
        </div>
    </div>

    </a>
    )
}