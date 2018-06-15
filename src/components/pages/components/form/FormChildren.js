import React from 'react';
import styled from 'styled-components';

import { Form, Input, Colors } from 'synapsefi-ui';

import dataForForm from './FormApp.data';

const Main = styled.div`
  box-sizing: border-box;
  font-family: Roboto;
`;

class FormChildren extends React.Component {
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
    console.log('Submiting this.state in FormChildren', this.state);
  }

  render() {
    return (
      <Main>
        <Form
          data={dataForForm}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          onChange={this.updateField}
        >
          <Input
            key="test-input"
            value={this.state.other_preference}
            onChange={e =>
              this.setState({
                other_preference: e.target.value,
              })}
            onBlur={() => console.log('blur')}
            onFocus={() => console.log('focus')}
            propName="other_preference"
            label="Other Preferences"
          />
        </Form>
      </Main>
    );
  }
}

export default FormChildren;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import styled from 'styled-components';

import { Form, Input, Colors } from 'synapsefi-ui';

import dataForForm from './FormChildren.data';

const Main = styled.div\`
  box-sizing: border-box;
  font-family: Roboto;
\`;

class FormChildren extends React.Component {
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
    console.log('Submiting this.state in FormChildren', this.state);
  }

  render() {
    return (
      <Main>
        <Form
          data={dataForForm}
          formValues={this.state}
          handleSubmit={this.handleSubmit}
          onChange={this.updateField}
        >
          <Input
            key="test-input"
            value={this.state.other_preference}
            onChange={e =>
              this.setState({
                other_preference: e.target.value,
              })}
            onBlur={() => console.log('blur')}
            onFocus={() => console.log('focus')}
            propName="other_preference"
            label="Other Preferences"
          />
        </Form>
      </Main>
    );
  }
}

export default FormApp;
`;
