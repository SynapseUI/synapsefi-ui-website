import React from 'react';
import { Input } from 'synapsefi-ui';

class InputDisabled extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      staticText: 'This is unselectable'
    }
  }
  render(){
    return (
      <div>
        <div>
          <Input
            value={this.state.staticText}
            disabled
            onChange={e => this.setState({
              staticText: e.target.value
            })}
            className='input-basic-page-row'
            propName='staticText'
            label="Disabled"
          />
        </div>
      </div>
    );
  }
};

export default InputDisabled;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Input } from 'synapsefi-ui';

class InputDisabled extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      staticText: 'This is unselectable'
    }
  }
  render(){

    return (
      <div>
        <div>
          <Input
            value={this.state.staticText}
            disabled
            onChange={e => this.setState({
              staticText: e.target.value
            })}
            className='input-basic-page-row'
            propName='staticText'
            label="Disabled"
          />
        </div>
      </div>
    );
  }
};

export default InputDisabled;
`;
