import React from 'react';
import { NumberInput } from 'synapsefi-ui';

class NumberInputError extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      errorInput: ''
    }
  }
  render(){
    const errorMessage = 
      this.state.errorInput === 'error' 
      ? 'I AM ERROR' : '';

    return (
      <div>
        <div className="input-display-box">
          <NumberInput
            value={this.state.errorInput}
            onChange={e => this.setState({
              errorInput: e.target.value
            })}
            className='input-basic-page-row'

            error={errorMessage}
            propName='errorInput'
            placeholder="to show an error message"
            label="Type 'error'"
          />
        </div>
      </div>
    );
  }
};

export default NumberInputError;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { NumberInput } from 'synapsefi-ui';

class NumberInputError extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      errorInput: ''
    }
  }
  render(){
    const errorMessage = 
      this.state.errorInput === 'error' 
      ? 'I AM ERROR' : '';

    return (
      <div>
        <div className="input-display-box">
          <NumberInput
            value={this.state.errorInput}
            onChange={e => this.setState({
              errorInput: e.target.value
            })}
            className='input-basic-page-row'

            error={errorMessage}
            propName='errorInput'
            placeholder="to show an error message"
            label="Type 'error'"
          />
        </div>
      </div>
    );
  }
};

export default NumberInputError;
`;
