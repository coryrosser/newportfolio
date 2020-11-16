import React from 'react'

import styled from 'styled-components'
import Vistrack from '../assets/Vistrack.PNG'
import devbook from '../assets/devbook.png'
import covidtracker from '../assets/covidtracker.PNG'
import chstudio from '../assets/ChStudio.PNG'

// import { DiReact, DiJavascript1, DiRuby} from 'react-icons/di'

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.tech-icon {
  color: #f7f7f7;
}
/* Hexagons */
#hexGrid {
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  padding: 0.866% 0;
  font-family: "Montserrat";
  font-size: 2vh;
}

#hexGrid:after {
  content: "";
  display: block;
  clear: both;
}

.hex {
  position: relative;
  list-style-type: none;
  float: left;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent;  
  transform: rotate(-60deg) skewY(30deg) translatez(-1px);
}

.hex * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent;  
}

.hexIn {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  transform: skewY(-30deg) rotate(60deg);
}




.hex img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
}

.hex h1,
.hex p {
  margin: 0;
  width: 102%;
  left: -1%;  
  padding: 5%;
  box-sizing: border-box;
  background-color: rgba(214, 40, 40, 0.7);
  font-weight: 300;
  transition: transform .2s ease-out, opacity .3s ease-out;
}

.hex h1 {
  bottom: 50%;
  padding-top: 50%;
  font-size: 5vh;
  z-index: 1;
  transform: translateY(-100%) translatez(-1px);
}

@media only screen and (max-width: 600px) {
  .hex h1 {
    font-size: 2.5vh;
  }
  .hex p {
    font-size: .5vh;
    color: rgba(0,0,0,0);
  }
}

.hex h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 10%;
  text-align: center;
  border-bottom: 1px solid #fff;
}

.hex p {
  top: 50%;
  padding-bottom: 50%;
  transform: translateY(100%) translatez(-1px);
  font-size: 2vh;
}
.link-1 {
  right: 41%;
  top: 40%;
  color: #f7f7f7;
  cursor: pointer;
}
.link-2 {
  top: 47%;
  right: 44%;
  color: #f7f7f7;
  cursor: pointer;
}



.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {
  transform: translateY(0%) translatez(-1px);
}



@media (min-width:1201px) {  /* <- 2-3  hexagons per row */
  .hex {
    width: 32.666%;    /* = (100-2) / 3 */
    padding-bottom: 37.720%;    /* =  width / sin(60) */
  }
  .hex:nth-child(5n+1),
  .hex:nth-child(5n+2) {
    transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  .hex:nth-child(5n+3),
  .hex:nth-child(5n+4),
  .hex:nth-child(5n+5) {
    margin-top: -8.564%;
    margin-bottom: -8.564%;
  }
  .hex:nth-child(5n+2),
  .hex:nth-child(5n+4) {
    margin-right: 1%;
    margin-left: 1%;
  }
  .hex:nth-child(5n+1) {
    margin-left: 0.5%;
  }
  .hex:nth-child(5n+3),
  .hex:nth-child(5n+6) {
    clear: left;
  }
}

@media (max-width: 1200px) {  /* <- 1-2  hexagons per row */
  .hex {
    width: 49.5%;    /* = (100-1) / 2 */
    padding-bottom: 57.158%;    /* =  width / sin(60) */
  }
  .hex:nth-child(3n+1) {
    transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  .hex:nth-child(3n+2),
  .hex:nth-child(3n+3) {
    margin-top: -13.423%;
    margin-bottom: -13.423%;
  }
  .hex:nth-child(3n+1) {
    margin-left: 0.5%
  }
  .hex:nth-child(3n+3) {
    margin-left: 1%;
  }
  .hex:nth-child(3n+2),
  .hex:nth-child(3n+4) {
    clear: left;
  }
}

@media (max-width: 400px) {
  #hexGrid {
    font-size: 13px;
  }
}

.project-link {
  font-size: 1.225rem;
  left: 11vw;
  text-decoration: none;
  color: #f7f7f7;
}

`

const Projects = (props) => {
  return (
    <Styles>
      <ul id="hexGrid">
  <li className="hex">
    <div className="hexIn" href="#">
      <img src={Vistrack} alt="" />
      <h1>Vistrack</h1>
      
      <p>
      VisTrack is a Data Visualization app makes Data Entry Simple and Engaging. VisTrack creates beautiful Charts from your data via manual entry or by uploading any CSV/ Excel file. 

      <a className='link-1'>Live Demo</a> 
      <br/>  
      <a className='link-2'>Github</a>
      </p>
    </div>
  </li>
  <li className="hex">
    <div className="hexIn" href="#">
      <img src={chstudio} alt="" />
      <h1>Chad Hoffman Studios</h1>
      <p>Chad Hoffman Studios is a professional photography site built to sell photography prints and services.
      <a className='link-1'>Live Demo</a> 
      <br/>  
      <a className='link-2'>Github</a>
      </p>
    </div>
  </li>
  <li className="hex">
    <div className="hexIn" href="#">
      <img src={covidtracker} alt="" />
      <h1>Covid-19 Tracker</h1>
      <p>A small application that uses a public API to give you up-to-date information on Covid-19 cases. Users are able to pick from any country to view the number of Cases, Recoveries, and deaths by area.
      <a className='link-1'>Live Demo</a> 
      <br/>  
      <a className='link-2'>Github</a></p>
    </div>
  </li>
  <li className="hex">
    <div className="hexIn" href="#">
      <img src={devbook} alt="" />
      <h1>Devbook</h1>
      <p>DevBook is an app created to give developers a place to share their work. Whether it's a basic script, CLI app, or full stack web app, you can proudly upload your project with Project Name, Images, Description, links to repository on Github
      <a className='link-1'>Live Demo</a> 
      <br/>  
      <a className='link-2'>Github</a></p>
      
    </div>
  </li>
</ul>
    </Styles>
  )
}

export default Projects