import React from 'react'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import { Button, Form, FormGroup, FormControl} from 'react-bootstrap'

init("user_sW4LFahhPIIMiJbu60K6u");

const Styles = styled.div`

`

class Email extends React.Component{


  state={
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'crmail',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_Ekj3zXuo',
       templateParams,
      'user_sW4LFahhPIIMiJbu60K6u'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render(){
    return (
      <Styles>
          <h1 className="p-heading1">Get in Touch</h1>
          <Form className='form-wrapper' onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup className='form-group-tag' controlId="formBasicEmail">
              <Form.Label className="form-label-text">Email address</Form.Label>
              <FormControl
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup className='form-group-tag' controlId="formBasicName">
              <Form.Label className="form-label-text">Name</Form.Label>
              <FormControl
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup className='form-group-tag' controlId="formBasicSubject">
              <Form.Label className="form-label-text">Subject</Form.Label>
              <FormControl
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup className='form-group-tag' controlId="formBasicMessage">
              <Form.Label className="form-label-text">Message</Form.Label>
              <FormControl
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
              <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

      </Styles>
    )
  }
}

export default Email