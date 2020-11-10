import React from 'react'
import {ListGroup} from 'react-bootstrap'
import styled from 'styled-components'
import {
  AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'

const Styles = styled.div`
  height: 100%;
  width: 100%;
  a {
    text-decoration: none;
    color: #f7f7f7;
  }
  .sidenav-list {
  }
  .sidenav-item {
    margin-top: 50%;
    border: none;
    height: 10vh;
    width: 100%;
    background: none;

    p {
      color: rgba(0,0,0,0);
    }
    &:hover {
      p {
        transition: 0.3s;
        color: #f7f7f7;
      }
    }
  }
  .sidenav-icon {
    font-size: 4vh;
    &:hover {
      color: #e63946;
      transition: 0.3s;
      font-size: 5vh;

    }
  }
`

class Sidenav extends React.Component {
  render(){
    return (
      <Styles>
        <ListGroup variant='flush'classNamke="sidenav-list">
          <ListGroup.Item className="sidenav-item">
            <a href="https://www.linkedin.com/in/cortlyn-rosser/" target='blank'><AiFillLinkedin className='sidenav-icon'/></a>
            <p> /cortlyn-rosser </p>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
          <a href="https://github.com/coryrosser" target='blank'><AiFillGithub className='sidenav-icon'/></a>
          <p> /coryrosser </p>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
            <a href="https://twitter.com/cortlynrosser" target='blank'><AiFillTwitterCircle className='sidenav-icon'/></a>
            <p> @cortlynrosser </p>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
            <a href="#" target='blank'><AiOutlineMail className='sidenav-icon'/></a>
            <p> coryrosser@gmail.com </p>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
            <a href="#" target='blank'><TiDocumentText className='sidenav-icon'/></a>
            <p> Resume </p>
          </ListGroup.Item>
          </ListGroup>
      </Styles>
    )
  }
}

export default Sidenav