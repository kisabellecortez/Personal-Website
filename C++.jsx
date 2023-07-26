import './ProjectCard.css';

export default function C(){
    return(
        <a>
    
          <a href="/projects/back" className="back-button">Back</a>
    
          <div className="wrap">
            <div className="box">
              <div className="box-top">
                <img className="box-image" src="https://www.google.com/search?rlz=1C1CHBF_enCA1019CA1019&sxsrf=AB5stBhYl6D3AZ4eHx-BwJ_oOExabEnTIQ:1690335461200&q=minesweeper&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjU8NylnquAAxWLrokEHRTXBEoQ0pQJegQIWhAB&biw=1920&bih=975#imgrc=Dhi_jooiYIlaPM" alt="Geesespotter"/>
                <div className="title-flex">
                  <h3 className="box-title">Geesespotter</h3>
                  <p className="user-follow-info">October 2022</p>
                </div>
                <p className="description">A recreation of the classic minesweeper game with a University of Waterloo twist (the mines are geese). Using C++ tp update game information and ASCII character to create the game board. Created for my first year ECE 150 project.</p>
              </div>
              <a href="#" className="button">C++</a>
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