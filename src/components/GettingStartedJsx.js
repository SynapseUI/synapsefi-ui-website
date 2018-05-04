import React from 'react';
import styled from 'styled-components';
import { Button } from 'synapse-ui-testing';

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

registerLanguage('jsx', jsx);

const Wrapper = styled.div``;

const jsxSnippet = `import React from 'react';
import { Button } from 'synapse-ui-testing';

const ExampleSimpleBtn = () => {
  return (
    <div>
      <Button> Button </Button>
    </div>
  );
};

export default ExampleSimpleBtn;
`;

const GettingStartedJsx = () => {
  return (
    <div className="prism-dark-jsx-wrapper">
      <SyntaxHighlighter language="jsx" style={dark}>
        {jsxSnippet}
      </SyntaxHighlighter>
      <div>
        <Button> Button </Button>
      </div>
    </div>
  );
};

export default GettingStartedJsx;
