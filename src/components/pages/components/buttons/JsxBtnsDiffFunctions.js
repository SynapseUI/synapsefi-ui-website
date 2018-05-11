import React from 'react';
import { Button } from 'synapsefi-ui';

const btnWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
  justifyItems: 'center',
  padding: '20px 0'
}

const JsxBtnsDiffFunctions = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button tertiary>Tertiary</Button>
        <Button remove>Remove</Button>
        <Button isLoading> --- </Button>
        <Button isLoading> length of text matters </Button>
        <Button isDisabled> Disabled </Button>
      </div>
    </div>
  );
};

export default JsxBtnsDiffFunctions;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Button } from 'synapsefi-ui';

const btnWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
  justifyItems: 'center',
  padding: '20px 0'
}

const JsxBtnsDiffFunctions = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button tertiary>Tertiary</Button>
        <Button remove>Remove</Button>
        <Button isLoading> --- </Button>
        <Button isLoading> length of text matters </Button>
        <Button isDisabled> Disabled </Button>
      </div>
    </div>
  );
};

export default JsxBtnsDiffFunctions;
`;
