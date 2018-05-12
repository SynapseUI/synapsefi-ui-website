import React from 'react';
import { Button } from 'synapsefi-ui';

const JsxBtnsHowToAddOnClick = () => {
  return (
    <div>
      <Button
        onClick={() => {
          alert('Hello ~');
        }}
      >
        Click this Button
      </Button>
    </div>
  );
};

export default JsxBtnsHowToAddOnClick;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Button } from 'synapsefi-ui';

const JsxBtnsHowToAddOnClick = () => {
  return (
    <div>
      <Button
        onClick={() => {
          alert('Hello ~');
        }}
      >
        Click this Button
      </Button>
    </div>
  );
};

export default JsxBtnsHowToAddOnClick;
`;
