import React from 'react';
import styled from 'styled-components';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

const Colors = () => {
  const codeString = 'npm install synapsefi-ui styled-components react-onclickoutside';
  return (
    <div className="prism-dark">
      <SyntaxHighlighter language="powershell" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Colors;
