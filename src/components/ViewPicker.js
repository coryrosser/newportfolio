import React from 'react'
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  color: white;
`


const ViewPicker = (props) => {
  return (
    <Styles>
      <Row className='picker-row'>
        <Col>
         View1
        </Col>
        <Col>
         View1
        </Col>
        <Col>
         View1
        </Col>
      </Row>
    </Styles>
  )
}
export default ViewPicker