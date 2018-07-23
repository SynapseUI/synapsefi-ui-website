import React from 'react';
import { DropdownHead, DropdownContent } from 'synapsefi-ui';

class DropdownHeadAndContent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hide: false
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <DropdownHead
            style={{ width: '200px'}}
            onClick={() => this.setState({ hide: !this.state.hide })}>
            <p>Header</p>
          </DropdownHead>

          <DropdownContent
            showContent={this.state.hide}
            verticalOffset='16px'
            style={{ width: '250px', padding: '16px'}}>
            <p>Content</p>
          </DropdownContent>
        </div>
      </div>
    );
  }
};

export default DropdownHeadAndContent;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { DropdownHead, DropdownContent } from 'synapsefi-ui';

class DropdownHeadAndContent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hide: false
    }
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <DropdownHead
            style={{ width: '200px'}}
            onClick={() => this.setState({ hide: !this.state.hide })}>
            <p>Header</p>
          </DropdownHead>

          <DropdownContent
            showContent={this.state.hide}
            verticalOffset='16px'
            style={{ width: '250px', padding: '16px'}}>
            <p>Content</p>
          </DropdownContent>
        </div>
      </div>
    );
  }
};

export default DropdownHeadAndContent;
`;
