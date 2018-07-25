import React from 'react';
import { NumberInput } from 'synapsefi-ui';

class NumberInputDisabled extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      staticText: 'This is unselectable'
    }
  }
  render(){
    return (
      <div>
        <div className="input-display-box">
          <NumberInput
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

export default NumberInputDisabled;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { NumberInput } from 'synapsefi-ui';

class NumberInputDisabled extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      staticText: 'This is unselectable'
    }
  }
  render(){
    return (
      <div>
        <div className="input-display-box">
          <NumberInput
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

export default NumberInputDisabled;
`;
