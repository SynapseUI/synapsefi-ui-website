import React from 'react';
import { Dropdown } from 'synapsefi-ui';

class DropdownMultiselect extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      animals: [] //value must be an Array
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <Dropdown
            value={this.state.animals}
            multiselect
            onChange={(e, value) => this.setState({
              animal: value
            })}
            className='input-basic-page-row'
            propName='animals'
            label='Favorite Animals:'
            placeholder='Pick as many as you want'
            options={[
              { key: 'PIG', text: 'Pig' },
              { key: 'ELEPHANT', text: 'Elephant' },
              { key: 'JACKALOPE', text: 'Jackalope' },
              { key: 'FOX', text: 'Fox' },
              { key: 'POLARBEAR', text: 'Polar Bear' },
              { key: 'DUCK', text: 'Duck' },
              { key: 'MOOSE', text: 'Moose' },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default DropdownMultiselect;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Dropdown } from 'synapsefi-ui';

class DropdownMultiselect extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      animals: [] //value must be an Array
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <Dropdown
            value={this.state.animals}
            multiselect
            onChange={(e, value) => this.setState({
              animal: value
            })}
            className='input-basic-page-row'
            propName='animals'
            label='Favorite Animals:'
            placeholder='Pick as many as you want'
            options={[
              { key: 'PIG', text: 'Pig' },
              { key: 'ELEPHANT', text: 'Elephant' },
              { key: 'JACKALOPE', text: 'Jackalope' },
              { key: 'FOX', text: 'Fox' },
              { key: 'POLARBEAR', text: 'Polar Bear' },
              { key: 'DUCK', text: 'Duck' },
              { key: 'MOOSE', text: 'Moose' },
            ]}
          />
        </div>
      </div>
    );
  }
};

export default DropdownMultiselect;
`;
