import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

import Sidenav from './components/Sidenav'
import NeonName from './components/NeonName'
import Projects from './components/Projects'
import ViewPicker from './components/ViewPicker'
import Blogs from './components/Blogs'
import About from './components/About'

const Styles = styled.div`
  height: 100%;
  width: 100%;
  background: url('https://bit.ly/35jfjN8');
  background-size: cover;

  .container-row {
    background: rgba(0,0,0,0.7);
    height: 100vh;
    width: 100vw;
    margin-left: 0;
  }

  .top-row {
    // background: rgba(255,255,255,0.6);
    height: 40vh;
    justify-content: center;
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
          <Col xs={0} md={1} className='d-md-block d-sm-none'>
            <Sidenav />
          </Col>
          <Col xs={12} md={11} 
          className="content-col">
          <Row className='top-row'> <NeonName /></Row>
           <ViewPicker 
           handleViewChange={this.handleViewChange}
           view={this.state.currentView}/>
          {this.state.currentView === 0 ?
          <Projects/> : this.state.currentView === 1 ?
          <Blogs /> : <About />
          
          }
          </Col> 
        </Row>
      </Styles>
    );
  }
}

export default App;
