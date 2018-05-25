import React from 'react';
import { Input } from 'synapsefi-ui';

class InputError extends React.Component {
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
          <Input
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

export default InputError;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Input } from 'synapsefi-ui';

class InputError extends React.Component {
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
      <Input
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
    );
  }
};

export default InputError;
`;
