import React from 'react'
import {} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
/* Hexagons */
#hexGrid {
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  padding: 0.866% 0;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
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
  outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */
  transform: rotate(-60deg) skewY(30deg) translatez(-1px);
}

.hex * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent;  /* fix for jagged edges in FF on hover transition */
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


/*** HEX CONTENT **********************************************************************/

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
  left: -1%;  /* prevent line on the right where background doesn't cover image */
  padding: 5%;
  box-sizing: border-box;
  background-color: rgba(0, 128, 128, 0.8);
  font-weight: 300;
  transition: transform .2s ease-out, opacity .3s ease-out;
}

.hex h1 {
  bottom: 50%;
  padding-top: 50%;
  font-size: 1.5em;
  z-index: 1;
  transform: translateY(-100%) translatez(-1px);
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
}


/*** HOVER EFFECT  **********************************************************************/

.hexIn:hover h1, .hexIn:focus h1, .hexIn:hover p, .hexIn:focus p {
  transform: translateY(0%) translatez(-1px);
}


/*** SPACING AND SIZING *****************************************************************/

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

/* End Hexagons */
/* fork on github button */
#fork{
  font-family: 'Raleway', sans-serif;
  position:fixed;
  top:0;
  left:0;
  color:#000;
  text-decoration:none;
  border:1px solid #000;
  padding:.5em .7em;
  margin:1%;
  transition: color .5s;
  overflow:hidden;
}
#fork:before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 130%; height: 100%;
  background: #000;
  z-index: -1;
  transform-origin:0 0 ;
  transform:translateX(-100%) skewX(-45deg);
  transition: transform .5s;
}
#fork:hover {
  color: #fff;
}
#fork:hover:before {
  transform: translateX(0) skewX(-45deg);
}
`

const Projects = (props) => {
  return (
    <Styles>
      <ul id="hexGrid">
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
  <li className="hex">
    <a className="hexIn" href="#">
      <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
      <h1>This is a title</h1>
      <p>Some sample text about the article this hexagon leads to</p>
    </a>
  </li>
</ul>
    </Styles>
  )
}

export default Projects