import './ProjectCard.css';

import Vision from './vision.png'; 

export default function Python(){
  return(
    <a>

      <a href="/projects/back" className="back-button">Back</a>

      <div className="wrap">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={Vision} alt="Monopoly game"/>
            <div className="title-flex">
              <h3 className="box-title">Sticker Verifying System</h3>
              <p className="user-follow-info">May 2023</p>
            </div>
            <p className="description">A system that verifies the proper placement of stickers onto surfaces using machine vision. Created for the Toyota Innovation Challenge hackathon.</p>
          </div>
          <a href="#" className="button">Python, OpenCV, Orbbec Astra SDK, Orbbec Astra 3D Camera</a>
        </div>

        <div className="box">
          <div className="box-top">
            </div>
        </div>

        <div className="box">
          <div className="box-top">
            </div>
        </div>

        <div className="box">
          <div className="box-top">
            </div>
        </div>
      </div>
    </a>

  )
}