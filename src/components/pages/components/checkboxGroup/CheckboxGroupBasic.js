import React from 'react';
import { CheckboxGroup } from 'synapsefi-ui';

class CheckBoxGroupBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      raining: []
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <CheckboxGroup
            value={this.state.raining}
            onChange={(e, value) => this.setState({
              raining: value
            })}
            className='checkbox-group-basic-page-row'
            propName='raining'
            label='Its raining:'
            options={[
              { key: 'CATS', text: 'Cats' },
              { key: 'DOGS', text: 'Dogs' },
              { key: 'BIRDS', text: 'Birds' },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default CheckBoxGroupBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { CheckboxGroup } from 'synapsefi-ui';

class CheckBoxGroupBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      raining: []
    }
  }

  render(){
    return (
      <CheckboxGroup
        value={this.state.raining}
        onChange={(e, value) => this.setState({
          raining: value
        })}
        className='input-basic-page-row'
        propName='raining'
        label='Its raining:'
        options={[
          { key: 'CATS', text: 'Cats' },
          { key: 'DOGS', text: 'Dogs' },
          { key: 'BIRDS', text: 'Birds' },
        ]}
      />
    );
  }
};

export default CheckBoxGroupBasic;
`;
