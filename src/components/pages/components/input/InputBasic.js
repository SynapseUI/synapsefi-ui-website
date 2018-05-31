import React from 'react';
import { Input } from 'synapsefi-ui';

class InputBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
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
            value={this.state.username}
            onChange={e => this.setState({
              username: e.target.value
            })}
            className='input-basic-page-row'
            propName='username'
            placeholder='i.e. John Smith'
            label='Username'
            description="Or email"
          />

          <Input
            value={this.state.password}
            inputType="password"
            onChange={e => this.setState({
              password: e.target.value
            })}
            className='input-basic-page-row'
            propName='password'
            placeholder="i.e. Not '12345'..."
            label='Password'
          />

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

export default InputBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Input } from 'synapsefi-ui';

class InputBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
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
            value={this.state.username}
            onChange={e => this.setState({
              username: e.target.value
            })}
            className='input-basic-page-row'
            propName='username'
            placeholder='i.e. John Smith'
            label='Username'
            description="Or email"
          />

          <Input
            value={this.state.password}
            inputType="password"
            onChange={e => this.setState({
              password: e.target.value
            })}
            className='input-basic-page-row'
            propName='password'
            placeholder="i.e. Not '12345'..."
            label='Password'
          />

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

export default InputBasic;
`;
