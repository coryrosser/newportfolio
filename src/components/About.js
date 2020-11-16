import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .about-row {
    color: white;
    border: white solid 1px;
    width: 100%;
    height: 50vh;
    margin-left: auto;
    margin-right: auto;
  }
  .skills-col {
    
    border: white solid 1px;
  }
  .about-col {
    
    border: red solid 1px;
  }
  .title-text {
    
  }
`

const About = () => {
  return (
    <Styles>
      <Row className='about-row'>
        <Col sm={6} md={12} className='skills-col'>
          <Row className='skills-title-row'>
            <h1 className='title-text' >Skillset</h1>
          </Row>
        </Col>

        <Col sm={6} md={12} className='about-col'>
          <Row className='about-title-row'>
          <h1 className='title-text'>Skillset</h1>
          </Row>
        </Col>
      </Row>
    </Styles>
  )
}

export default About