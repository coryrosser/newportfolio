import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`

`


const Blogs = (props) => {
  return (
    <Styles>
      <Row className='picker-row'>
        <Col xs={6}>
         <p 
         onClick={() => {props.handleViewChange(0)}}
         className={props.view === 0 ? 'picker-item active-item' : 'picker-item'}>Projects</p>
        </Col>
        <Col xs={6}>
        <p 
        onClick={() => {props.handleViewChange(1)}}
        className={props.view === 1 ? 'picker-item active-item' : 'picker-item'}>Blogs</p>
        </Col>
      </Row>
    </Styles>
  )
}
export default Blogs