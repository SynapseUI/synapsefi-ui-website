import React from 'react';
import styled from 'styled-components';

import { Form } from 'synapsefi-ui';

import dataForForm from './FormApp.data';

const Main = styled.div`
  box-sizing: border-box;
  font-family: Roboto;
`;

class FormApp extends React.Component {
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
    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {
    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    console.log('Submiting this.state in FormApp', this.state);
  }

  render() {
    return (
      <Main>
        <Form
          data={dataForForm}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          onChange={this.updateField}
        />
      </Main>
    );
  }
}

export default FormApp;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import styled from 'styled-components';

import { Form } from 'synapsefi-ui';

import dataForForm from './FormApp.data';

const Main = styled.div\`
  box-sizing: border-box;
  font-family: Roboto;
\`;

class FormApp extends React.Component {
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
    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {
    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    console.log('Submiting this.state in FormApp', this.state);
  }

  render() {
    return (
      <Main>
        <Form
          data={dataForForm}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          onChange={this.updateField}
        />
      </Main>
    );
  }
}

export default FormApp;
`;
