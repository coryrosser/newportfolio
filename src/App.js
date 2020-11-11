import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

import Sidenav from './components/Sidenav'
import NeonName from './components/NeonName'
import Projects from './components/Projects'
import ViewPicker from './components/ViewPicker'

const Styles = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('https://bit.ly/35jfjN8');
  background-size: cover;

  .container-row {
    background: rgba(0,0,0,0.7);
    height: 100%;
    width: 100%;
    margin-left: 0;
  }

  .top-row {
    // background: rgba(255,255,255,0.6);
    height: 50vh;
    justify-content: center;
  }
  .mid-row {
    background: none;
    height: 10vh;
    width: 100%;
    border: white solid 1px;
  }
  .content-col {
    height: 100vh;
    overflow-y: scroll;
  }
`

class App extends React.Component {
  state = {
    currentView: 0,
  }
  handleViewChange = (num) => {
    this.setState({currentView: num})
  }

  render(){
    return (
      <Styles>
        <Row className='container-row'>
          <Col xs={1} md={1} >
            <Sidenav />
          </Col>
          <Col xs={12} md={11} 
          className="content-col">
          <Row className='top-row'> <NeonName /></Row>
           <ViewPicker 
           handleViewChange={this.handleViewChange}
           view={this.state.currentView}/>
          {this.state.currentView === 0 ?
          <Projects/> : 
          
          
          }
          </Col> 
        </Row>
      </Styles>
    );
  }
}

export default App;
