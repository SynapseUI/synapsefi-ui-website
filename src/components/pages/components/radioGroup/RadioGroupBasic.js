import React from 'react';
import { RadioGroup } from 'synapsefi-ui';

class RadioGroupBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      question: '2B'
    }
  }
  render(){
    return (
      <div>
        <div className="input-display-box">
          <RadioGroup
            value={this.state.question}
            onChange={e => this.setState({
              question: e.target.value
            })}
            className='input-basic-page-row'
            propName='story'
            label='The Question:'
            largeButtons={true}
            options={[
              { key: '2B', text: 'To Be' },
              { key: 'NOT-2B', text: 'Not To Be' },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default RadioGroupBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { RadioGroup } from 'synapsefi-ui';

class RadioGroupBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      question: '2B'
    }
  }
  render(){
    return (
      <div>
        <div className="input-display-box">
          <RadioGroup
            value={this.state.question}
            onChange={e => this.setState({
              question: e.target.value
            })}
            className='input-basic-page-row'
            propName='story'
            label='The Question:'
            largeButtons={true}
            options={[
              { key: '2B', text: 'To Be' },
              { key: 'NOT-2B', text: 'Not To Be' },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default RadioGroupBasic;
`;
