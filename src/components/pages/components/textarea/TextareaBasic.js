import React from 'react';
import { Textarea } from 'synapsefi-ui';

class TextareaBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      story: ''
    }
  }
  render(){
    return (
      <div>
        <div className="input-display-box">
          <Textarea
            value={this.state.story}
            onChange={e => this.setState({
              story: e.target.value
            })}
            className='input-basic-page-row'
            propName='story'
            label='Life Story'
            description='Tell me your life story'
            placeholder="Or how is your day?"
          />
        </div>
      </div>
    );
  }
};

export default TextareaBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Textarea } from 'synapsefi-ui';

class TextareaBasic extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      story: ''
    }
  }
  render(){
    return (
      <div>
        <div className="input-display-box">
          <Textarea
            value={this.state.story}
            onChange={e => this.setState({
              story: e.target.value
            })}
            className='input-basic-page-row'
            propName='story'
            label='Life Story'
            description='Tell me your life story'
            placeholder="Or how is your day?"
          />
        </div>
      </div>
    );
  }
};

export default TextareaBasic;
`;
