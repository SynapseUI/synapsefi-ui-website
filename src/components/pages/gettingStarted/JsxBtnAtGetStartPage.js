import React from 'react';
import { Button } from 'synapse-ui-testing';

const JsxBtnAtGetStartPage = () => {
  return (
    <div>
      <Button> Button </Button>
    </div>
  );
};

export default JsxBtnAtGetStartPage;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { Button } from 'synapse-ui-testing';

const JsxBtnAtGetStartPage = () => {
  return (
    <div>
      <Button> Button </Button>
    </div>
  );
};

export default JsxBtnAtGetStartPage;
`;
