import React from 'react'
import {ListGroup} from 'react-bootstrap'
import styled from 'styled-components'
import {
  AiFillLinkedin, AiFillGithub, AiOutlineMail, AiFillTwitterCircle} from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'

class Sidenav extends React.Component {
  render(){
    return (
      <ListGroup>
        <ListGroup.Item>
          <AiFillLinkedin/>
        </ListGroup.Item>
        <ListGroup.Item>
          <AiFillGithub/>
        </ListGroup.Item>
        <ListGroup.Item>
          <AiFillTwitterCircle/>
        </ListGroup.Item>
        <ListGroup.Item>
          <AiOutlineMail/>
        </ListGroup.Item>
        <ListGroup.Item>
          <TiDocumentText/>
        </ListGroup.Item>
      </ListGroup>
    )
  }
}

export default Sidenav