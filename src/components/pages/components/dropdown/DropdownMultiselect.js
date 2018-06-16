import React from 'react';
import { Dropdown } from 'synapsefi-ui';

class DropdownMultiselect extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      animals: []
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
            propName='animal'
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
      animal: ''
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <Dropdown
            value={this.state.animal}
            searchable
            onChange={(e, value) => this.setState({
              animal: value
            })}
            className='input-basic-page-row'
            placeholder='Type here to filter'
            propName='animal'
            label='Favorite Animal:'
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
