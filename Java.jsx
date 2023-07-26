import './ProjectCard.css';

import Snake from './Snake.png'; 
import Monopoly from './Monopoly.png'; 
import Website from './Website.png'; 


export default function Java(){
    return(
    <a>

      <a href="/projects/back" className="back-button">Back</a> 

      <div className="wrap">
        <div className="box">
          <div className="box-top">
            <img className="box-image" src={Monopoly} alt="Monopoly game"/>
            <div className="title-flex">
              <h3 className="box-title">Monopoly</h3>
              <p className="user-follow-info">May 2022</p>
            </div>
            <p className="description">A recreation of the classic board game Monopoly with a Marvel theme. Using Java GUI for the UI/UX, and using several classes to organize game and player data. Created for my grade 12 computer science independent study unit.</p>
          </div>
          <a href="#" className="button">Java, Java Swing</a>
        </div>

        <div className="box">
          <div className="box-top">
            <img className="box-image" src={Snake} alt="Snake game"/>
            <div className="title-flex">
              <h3 className="box-title">Snake</h3>
              <p className="user-follow-info">April 2023</p>
            </div>
            <p className="description">A recreation of the online game Snake. Using Java GUI to design the game. Created during my free time.</p>
          </div>
          <a href="#" className="button">Java, Java Swing</a>
        </div>

        <div className="box">
          <div className="box-top">
              <img className="box-image" src={Website} alt="Girl Eating Pizza"/>
              <div className="title-flex">
                <h3 className="box-title">Personal Website V1.0</h3>
                <p className="user-follow-info">May 2023</p>
              </div>
              <p className="description">A personal website to showcase myself, including my skills and projects. A platform to store my achievements for others to view.</p>
            </div>
            <a href="#" className="button">Java, Springboot, Vaadin</a>
        </div>

        <div className="box">
          <div className="box-top">
            </div>
        </div>

      </div>
    </a>

    )
}