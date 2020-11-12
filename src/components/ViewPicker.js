import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
font-family: "Montserrat";
  color: white;

  .picker-row{
    height: 7vh;
    width: 100%;
    font-size: 2rem;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
  .picker-item {
    &:hover {
      font-size: 2.25rem;
      transition: 0.3s;
    }
  }
  .active-item {
    color: #fff;
    font-size: 2.25rem;
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 40px #f00,
      0 0 80px #f00,
      0 0 90px #f00,
      0 0 100px #f00,
      0 0 150px #f00;
  }
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
        className={props.view === 2 ? 'picker-item active-item' : 'picker-item'}>About Me</p>
        </Col>
      </Row>
    </Styles>
  )
}
export default ViewPicker