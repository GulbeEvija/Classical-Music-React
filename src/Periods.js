import { useState } from "react";
import { data } from "./data";

function Periods() {
    const [music, setMusic] = useState(0);
    const {id, period, year, text, main, photo, title} = data[music];
  
    const previousMusic = () => {
      setMusic((music=> {
        music --;
        if (music < 0) {
          return data.length-1;
        }
        return music;
      }))
    }
  
    const nextMusic  = () => {
      setMusic((music => {
        music ++;
        if (music > data.length - 1) {
          music = 0;
        }
        return music;
      }))
    }

    return (
        <div >

          <div className="container">
            <h1>{data.length} Periods of Classical Music</h1>
          </div>

            <div className="containerSlide container">
              <div>
                  <img src={photo} alt="Artwork" width="650px" height="475px"/>
                  <h3 className="picTitle">{title}</h3>
                </div>
                <div className="textContainer">
                  <h2 className="periodTitle">{id} - {period}</h2>
                  <h3 className="slideYear">{year}</h3>
                  <p className="textStyle">{text}</p>
                  <p className="textStyle">{main}</p>
                </div>
              </div>

          <div className="container">
              <button className="btnSlide" onClick={previousMusic}>Previous</button>
              <button className="btnSlide" onClick={nextMusic}>Next</button>
            </div>

        </div>
      );
    
  
}


export default Periods;