import React from 'react';
import { Button } from 'synapsefi-ui';

const btnWrapperStyle = {
  border: '1px dotted red',
  width: '400px',
  display: 'grid',
  gridGap: '20px',
  justifyItems: 'center',
  padding: '20px 0' 
}

const JsxBtnsDiffSizes = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <Button>Default</Button>
        <Button small>Small</Button>
        <Button medium>Medium</Button>
        <Button large>Large</Button>
        <Button fullWidth>FullWidth</Button>
      </div>
    </div>
  );
};

export default JsxBtnsDiffSizes;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Button } from 'synapsefi-ui';

const btnWrapperStyle = {
  border: '1px dotted red',
  width: '400px',
  display: 'grid',
  gridGap: '20px',
  justifyItems: 'center',
  padding: '20px 0' 
}

const JsxBtnsDiffSizes = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <Button>Default</Button>
        <Button small>Small</Button>
        <Button medium>Medium</Button>
        <Button large>Large</Button>
        <Button fullWidth>FullWidth</Button>
      </div>
    </div>
  );
};

export default JsxBtnsDiffSizes;
`;
