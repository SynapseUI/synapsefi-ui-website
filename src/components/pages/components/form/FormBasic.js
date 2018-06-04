import React from 'react';
import styled from 'styled-components';

import {
  Form,
  Input,
  Textarea,
  Dropdown,
  Colors
} from 'synapsefi-ui';

import dataForForm from './dataForForm';

const Main = styled.div`
  .main-form {

    box-sizing: border-box;
    font-family: Roboto;
  
    & > * {
      padding: 32px 16px;
      border-bottom: 1px solid #f9f9f9;

      &:last-child {
        padding-bottom: 0px; 
        border-bottom: none; 
      }
    }
  }
`;

class FormApp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: 'test@email.com',
      username: 'John Smith',
      website: 'http://www.google.com/',
      light_switch: 'ON',
      card_preferences: [],
      location: '',
      other_preference: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorCheck = this.handleErrorCheck.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {    
    if ((value || value === '') && field){
      this.setState({ [field]: value})
    }
  }

  handleErrorCheck(){
    let errors = {};

    if (this.state.email === 'test@email.com'){
      errors['email'] = "Input a real email address -_-"
    }

    Object.keys(this.state).forEach((item) => {
      if(_.isEmpty(this.state[item])) errors[item] = "Field is required";
    })
    
    return errors;
  }

  handleSubmit(e){
    if (e) e.preventDefault();
    console.log('Submiting this.state in FormApp', this.state);
  }

  render(){
    return (
      <Main>
        <Form
          data={dataForForm}
          formClassName='main-form'
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          validation={this.handleErrorCheck}
          onChange={this.updateField}
        >
          <Input
            key="somejargenstufafasdf"
            value={this.state.other_preference}
            onChange={e => this.setState({
              other_preference: e.target.value
            })}
            onBlur={() => console.log('blur')}
            onFocus={() => console.log('focus')}
            propName='other_preference'
            label='Other Preferences'
          />
        </Form>
      </Main>
    )
  }
}

export default FormApp;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import styled from 'styled-components';

import {
  Form,
  Input,
  Textarea,
  Dropdown,
  Colors
} from 'synapsefi-ui';

import dataForForm from './dataForForm';

const Main = styled.div\`
  .main-form {

    box-sizing: border-box;
    font-family: Roboto;
  
    & > * {
      padding: 32px 16px;
      border-bottom: 1px solid #f9f9f9;

      &:last-child {
        padding-bottom: 0px; 
        border-bottom: none; 
      }
    }
  }
\`;

class FormApp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: 'test@email.com',
      username: 'John Smith',
      website: 'http://www.google.com/',
      light_switch: 'ON',
      card_preferences: [],
      location: '',
      other_preference: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrorCheck = this.handleErrorCheck.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {    
    if ((value || value === '') && field){
      this.setState({ [field]: value})
    }
  }

  handleErrorCheck(){
    let errors = {};

    if (this.state.email === 'test@email.com'){
      errors['email'] = "Input a real email address -_-"
    }

    Object.keys(this.state).forEach((item) => {
      if(_.isEmpty(this.state[item])) errors[item] = "Field is required";
    })
    
    return errors;
  }

  handleSubmit(e){
    if (e) e.preventDefault();
    console.log('Submiting this.state in FormApp', this.state);
  }

  render(){
    return (
      <Main>
        <Form
          data={dataForForm}
          formClassName='main-form'
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          validation={this.handleErrorCheck}
          onChange={this.updateField}
        >
          <Input
            key="somejargenstufafasdf"
            value={this.state.other_preference}
            onChange={e => this.setState({
              other_preference: e.target.value
            })}
            onBlur={() => console.log('blur')}
            onFocus={() => console.log('focus')}
            propName='other_preference'
            label='Other Preferences'
          />
        </Form>
      </Main>
    )
  }
}

export default FormApp;
`;
