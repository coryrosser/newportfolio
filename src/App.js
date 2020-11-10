import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import Sidenav from './components/Sidenav'

const Styles = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url('https://bit.ly/2IrgH7R');
  background-size: cover;

  .container-row {
    background: rgba(0,0,0,0.7);
    height: 100%;
    width: 100%;
    margin-left: 0;
  }

  .top-row {
    background: rgba(255,255,255,0.6);
    height: 50vh;
  }
  .bottom-row {
    background: rgba(255,255,255,0.6);
    height: 50vh;
  }
`

function App() {
  return (
    <Styles>
      <Row className='container-row'>
        <Col xs={1} md={1}>
          <Sidenav />
        </Col>
        <Col xs={12} md={11} 
        className="content-col">
        <Row className='top-row'> Top</Row>
        <Row className='bottom-row'> Bottom </Row></Col> 
      </Row>
    </Styles>
  );
}

export default App;
