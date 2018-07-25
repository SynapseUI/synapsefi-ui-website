import React from 'react';
import styled from 'styled-components';
import { NumberInput } from 'synapsefi-ui';

const MainLayout = styled.div`
  & > * {
    padding: 32px 16px;
  }

  box-sizing: border-box;
  font-family: Roboto;

  display: flex;
  flex-direction: column;
`;


class NumberInputBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      phoneNumber: '',
      amount: '',
      date: '',
      regular: ''
    }

    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {
    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <NumberInput
            className='input-basic-page-row'
            propName="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.updateField}
            label="Phone Number"
            type="phone"
            error="I Am Error"
          />

          <NumberInput
            className='input-basic-page-row'
            propName="amount"
            value={this.state.amount}
            onChange={this.updateField}
            label="Amount"
            type="currency"
          />

          <NumberInput
            className='input-basic-page-row'
            propName="date"
            value={this.state.date}
            onChange={this.updateField}
            label="Date"
            type="date"
          />

          <NumberInput
            className='input-basic-page-row'
            propName="regular"
            value={this.state.regular}
            onChange={this.updateField}
            label="Regular"
          />
        </div>
      </div>
    )
  }
};

export default NumberInputBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import styled from 'styled-components';
import { NumberInput } from 'synapsefi-ui';

const MainLayout = styled.div\`
  & > * {
    padding: 32px 16px;
  }

  box-sizing: border-box;
  font-family: Roboto;

  display: flex;
  flex-direction: column;
\`;


class NumberInputBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      phoneNumber: '',
      amount: '',
      date: '',
      regular: ''
    }

    this.updateField = this.updateField.bind(this);
  }

  updateField(e, value, field) {
    if ((value || value === '') && field) {
      this.setState({ [field]: value });
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <NumberInput
            className='input-basic-page-row'
            propName="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.updateField}
            label="Phone Number"
            type="phone"
            error="I Am Error"
          />

          <NumberInput
            className='input-basic-page-row'
            propName="amount"
            value={this.state.amount}
            onChange={this.updateField}
            label="Amount"
            type="currency"
          />

          <NumberInput
            className='input-basic-page-row'
            propName="date"
            value={this.state.date}
            onChange={this.updateField}
            label="Date"
            type="date"
          />

          <NumberInput
            className='input-basic-page-row'
            propName="regular"
            value={this.state.regular}
            onChange={this.updateField}
            label="Regular"
          />
        </div>
      </div>
    )
  }
};

export default NumberInputBasic;
`;
