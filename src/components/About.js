import React from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import {FaGit } from 'react-icons/fa'
import {SiRails} from 'react-icons/si'
import {
  AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import { DiReact, DiJavascript1, DiRuby, DiHtml5} from 'react-icons/di'
import styled from 'styled-components'
import { TiDocumentText } from 'react-icons/ti'

const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  
  font-family: "Montserrat";
  .about-row {
    color: white;
    width: 100%;
    height: 75vh;
    margin-left: auto;
    margin-right: auto;
  }
  .skills-col {
    
  }
  .about-col {
    
  }
  .title-text {

  }
  .skills-title-row,
  .about-title-row{
    align-items: center;
    justify-content: center;
    border-bottom: rgba(255,255,255, 0.5) solid 1px;
    margin-bottom: 4vh;

    h1 {
      font-size: 3vh;
      color: #f7f7f7;
    }
  }
  .sidenav-icon {
    color: #f7f7f7;
    font-size: 3vh;
  }
  .skills-icon-row {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    height: 90%;
  }
  .icon-col {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .skill-icon {
    font-size: 4vh;
  }
  .about-text-row {
    text-align: center;
    color: #f7f7f7;
    margin-bottom: 3vh;
  }

  @media only screen and (min-width: 600px) {
    .about-text-row{
      font-size: 3.25vh;
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    }
    .contact-icon-col {
      visibility: hidden;
    }
    .skill-icon {
      font-size: 5vh;
    }
  }
`

const About = () => {
  return (
    <Styles>
      <Row className='about-row'>
        <Col sm={6} md={12} className='about-col'>
          <Row className='about-title-row'>
          <h1 className='title-text'>About</h1>
          </Row>
          <Row className='about-text-row'>
            <p>          Driven by a desire to learn new techniques and build creative solutions, I approach each challenge as an opportunity to learn, becoming a better developer each day. I always have a positive attitude and willingness to listen and learn. I enjoy working with with teams and benefitting from the insight of others around me, as well as offering my own unique perspective.</p>
          </Row>
          <Row className='about-contact-row'>
            <Col className='contact-icon-col'>
              <a href="https://www.linkedin.com/in/cortlyn-rosser/"   target='blank'><AiFillLinkedin className='sidenav-icon'/></ a>
            </Col>
            <Col className='contact-icon-col'>
            <a href="https://github.com/coryrosser" target='blank'><AiFillGithub className='sidenav-icon'/></a>
            </Col>
            <Col className='contact-icon-col'>
            <a href="https://twitter.com/cortlynrosser" target='blank'><AiFillTwitterCircle className='sidenav-icon'/></a>
            </Col>
            <Col className='contact-icon-col'>
            <a href="#" target='blank'><AiOutlineMail className='sidenav-icon'/></a>
            </Col>
            <Col className='contact-icon-col'>
            <a href="https://drive.google.com/file/d/1UapdPrT6DJ-ND1al4n70gBtf1dvaxkJQ/view?usp=sharing" target='blank'><TiDocumentText className='sidenav-icon'/></a>
            </Col>
          </Row>
        </Col>
      
        <Col sm={6} md={12} className='skills-col'>
          <Row className='skills-title-row'>
            <h1 className='title-text' >Skillset</h1>
          </Row>
          <Row className='skills-icon-row'>
            <Col className='icon-col' xs={4}>
              <SiRails className='skill-icon' />
            </Col>
            <Col className='icon-col' xs={4}>
              <FaGit className='skill-icon' />
            </Col>
            <Col className='icon-col' xs={4}>
              <DiJavascript1 className='skill-icon' />
            </Col>
            <Col className='icon-col' xs={4}>
              <DiReact className='skill-icon' />
            </Col>
            <Col className='icon-col' xs={4}>
              <DiRuby className='skill-icon' />
            </Col>
            <Col className='icon-col' xs={4}>
              <DiHtml5 className='skill-icon' />
            </Col>
          </Row>
        </Col>
      </Row>
    </Styles>
  )
}

export default About