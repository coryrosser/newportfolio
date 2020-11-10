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
            <a href="#"><AiFillLinkedin className='sidenav-icon'/></a>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
          <a href="#"><AiFillGithub className='sidenav-icon'/></a>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
            <a href="#"><AiFillTwitterCircle className='sidenav-icon'/></a>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
            <a href="#"><AiOutlineMail className='sidenav-icon'/></a>
          </ListGroup.Item>
          <ListGroup.Item className="sidenav-item">
            <a href="#"><TiDocumentText className='sidenav-icon'/></a>
          </ListGroup.Item>
          </ListGroup>
      </Styles>
    )
  }
}

export default Sidenav