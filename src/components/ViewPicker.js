import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat');

@media only screen and (max-width: 600px) {
  margin-bottom: 7vh;
  .picker-item {
    font-size: 3vh;
  }
  .active-item {
    font-size: 3.2vh;
  }
}

font-family: "Montserrat";
  color: white;

  .picker-row{
    height: 7vh;
    width: 100%;
    font-size: 3vh;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
  .picker-item {
    &:hover {
      background: rgba(239, 71, 111,0.3);
    border-radius: 3vh;
    }
  }
  .active-item {
    background: url('https://wallpapercave.com/wp/wp2730878.gif')!important;
    opacity: 0.5;
    border-radius: 3vh;

    // color: #fff;
    // font-size: 3.35vh;
    // text-shadow:
    //   0 0 5px #fff,
    //   0 0 10px #fff,
    //   0 0 20px #fff,
    //   0 0 40px #f00,
    //   0 0 80px #f00,
    //   0 0 90px #f00,
    //   0 0 100px #f00,
    //   0 0 150px #f00;
  }
  border-bottom: rgba(255,255,255, 0.5) solid 1px;
`


const ViewPicker = (props) => {
  return (
    <Styles>
      <Row className='picker-row'>
        <Col xs={4}>
         <p 
         onClick={() => {props.handleViewChange(0)}}
         className={props.view === 0 ? 'picker-item active-item' : 'picker-item'}>Projects</p>
        </Col>
        <Col xs={4}>
        <p 
        onClick={() => {props.handleViewChange(1)}}
        className={props.view === 1 ? 'picker-item active-item' : 'picker-item'}>Blogs</p>
        </Col>
        <Col xs={4}>
        <p 
        onClick={() => {props.handleViewChange(2)}}
        className={props.view === 2 ? 'picker-item active-item' : 'picker-item'}>About</p>
        </Col>
      </Row>
    </Styles>
  )
}
export default ViewPicker