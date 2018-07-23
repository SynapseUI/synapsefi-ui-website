import React from 'react';
import { Accordion } from 'synapsefi-ui';

class AccordionBasic extends React.Component {
  constructor(props){
    super(props);

  }

  renderHeader(){
    return (
      <p>Header Component</p>
    )
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <Accordion header="some header">
            <p>Cool Content</p>
          </Accordion>

          <br/>

          <Accordion header={this.renderHeader()}>
            <p>Cool Content part 2</p>
          </Accordion>
        </div>
      </div>
    );
  }
};

export default AccordionBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Accordion } from 'synapsefi-ui';

class AccordionBasic extends React.Component {
  constructor(props){
    super(props);

  }

  renderHeader(){
    return (
      <p>Header Component</p>
    )
  }

  render(){
    return (
      <div>
        <div className="input-display-box">
          <Accordion header="some header">
            <p>Cool Content</p>
          </Accordion>

          <br/>

          <Accordion header={this.renderHeader()}>
            <p>Cool Content part 2</p>
          </Accordion>
        </div>
      </div>
    );
  }
};

export default AccordionBasic;
`;
