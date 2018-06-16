import React from 'react';
import styled from 'styled-components';

import { Form } from 'synapsefi-ui';

import dataForForm from './FormApp.data';

const Main = styled.div`
  box-sizing: border-box;
  font-family: Roboto;
`;

class FormValidation extends React.Component {
  constructor(props) {
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
    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  handleErrorCheck() {
    let errors = {};

    if (this.state.email === 'test@email.com') {
      errors['email'] = 'Input a real email address -_-';
    }

    Object.keys(this.state).forEach(item => {
      if (_.isEmpty(this.state[item])) errors[item] = 'Field is required';
    });

    return errors;
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    console.log('Submiting this.state in FormValidation', this.state);
  }

  render() {
    return (
      <Main>
        <Form
          data={dataForForm}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          validation={this.handleErrorCheck}
          onChange={this.updateField}
        />
      </Main>
    );
  }
}

export default FormValidation;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import styled from 'styled-components';

import { Form } from 'synapsefi-ui';

import dataForForm from './FormApp.data';

const Main = styled.div\`
  box-sizing: border-box;
  font-family: Roboto;
\`;

class FormValidation extends React.Component {
  constructor(props) {
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
    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  handleErrorCheck() {
    let errors = {};

    if (this.state.email === 'test@email.com') {
      errors['email'] = 'Input a real email address -_-';
    }

    Object.keys(this.state).forEach(item => {
      if (_.isEmpty(this.state[item])) errors[item] = 'Field is required';
    });

    return errors;
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    console.log('Submiting this.state in FormValidation', this.state);
  }

  render() {
    return (
      <Main>
        <Form
          data={dataForForm}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          validation={this.handleErrorCheck}
          onChange={this.updateField}
        />
      </Main>
    );
  }
}

export default FormValidation;
`;
