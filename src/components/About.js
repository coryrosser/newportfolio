import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .about-row {
    color: white;
    border: white solid 1px;
    width: 100%;
    height: 50vh;
  }
  .skills-col {
    
    border: white solid 1px;
  }
  .about-col {
    
    border: red solid 1px;
  }
`

const About = () => {
  return (
    <Styles>
      <Row className='about-row'>
        <Col className='skills-col'>
          <Row className='skills-title-row'>

          </Row>
        </Col>

        <Col className='about-col'>
          <Row className='about-title-row'>

          </Row>
        </Col>
      </Row>
    </Styles>
  )
}

export default About