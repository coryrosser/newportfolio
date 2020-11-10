import React from 'react'
import {} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  font-family: 'Montserrat', sans-serif;
  .neon-container {
    border: 3px solid #f1faee;
    box-shadow: 0 0 10px #f7f7f7;
    border-radius: 3vh;
    width: 50vw;
    height: 30vh;
    text-align: center;
    margin-top: 10vh;
  }
  .neon-text {
    color: #f7f7f7;
  }
  .hi {
    font-size: 6vh;
  }
  .name {
    font-size: 10vh;
  }
`


const Name = (props) => {
 return (
  <Styles>
    <div className='neon-container'>
      <p className='neon-text hi'> Hi, I'm </p>
      <p className='neon-text name'>Cortlyn Rosser </p>
    </div>
  </Styles>
 )
}

export default Name