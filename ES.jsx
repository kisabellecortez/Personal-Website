import './ProjectCard.css';

export default function ES (){
    return(
        <a>
    
          <a href="/projects/back" className="back-button">Back</a>
    
          <div className="wrap">
            <div className="box">
              <div className="box-top">
                <img className="box-image" src="https://www.google.com/search?rlz=1C1CHBF_enCA1019CA1019&sxsrf=AB5stBhYl6D3AZ4eHx-BwJ_oOExabEnTIQ:1690335461200&q=minesweeper&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjU8NylnquAAxWLrokEHRTXBEoQ0pQJegQIWhAB&biw=1920&bih=975#imgrc=Dhi_jooiYIlaPM" alt="Monopoly game"/>
                <div className="title-flex">
                  <h3 className="box-title">Water Purification Device</h3>
                  <p className="user-follow-info">November 2022</p>
                </div>
                <p className="description">A device that measures the pH level and transparancy of water, calculating the purity of the water and allowing users to determine whether or not it is safe to drink. Using the STM32F401 to program and manage a pH electrode probe and ambient light sensor. An LCD display was used to communicate results to users. Created for my first year ECE 192 design course.</p>
              </div>
              <a href="#" className="button">STM32F401, STM32CubeIDE, PH Electrode Probe, Ambient Ligtht Sensor, 1.8 inch SPI TFT ST7735 LCD Display Module</a>
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