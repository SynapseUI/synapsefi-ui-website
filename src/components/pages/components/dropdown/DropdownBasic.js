import React from 'react';
import { Dropdown } from 'synapsefi-ui';

class DropdownBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      elevator: ''
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <Dropdown
            value={this.state.elevator}
            onChange={(e, value) => this.setState({
              elevator: value
            })}
            className='input-basic-page-row'
            placeholder='Room for one more'
            propName='elevator'
            label='Current Floor:'
            options={[
              { key: 'FIRST', text: '1st' },
              { key: 'SECOND', text: '2nd' },
              { key: 'THIRD', text: '3rd' },
              { key: 'FOURTH', text: '4th' },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default DropdownBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Dropdown } from 'synapsefi-ui';

class DropdownBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      elevator: ''
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <Dropdown
            value={this.state.elevator}
            onChange={(e, value) => this.setState({
              elevator: value
            })}
            className='input-basic-page-row'
            placeholder='Room for one more'
            propName='elevator'
            label='Current Floor:'
            options={[
              { key: 'FIRST', text: '1st' },
              { key: 'SECOND', text: '2nd' },
              { key: 'THIRD', text: '3rd' },
              { key: 'FOURTH', text: '4th' },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default DropdownBasic;
`;
