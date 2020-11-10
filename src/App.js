import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'
import Sidenav from './components/Sidenav'

const Styles = styled.div`
  
`

function App() {
  return (
    <Styles>
      <Row>
        <Col xs={0} md={1}>
          <Sidenav />
        </Col>
      </Row>
    </Styles>
  );
}

export default App;
