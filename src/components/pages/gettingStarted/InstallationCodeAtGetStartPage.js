import React from 'react';
import styled from 'styled-components';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

const Colors = () => {
  const codeString = 'npm install synapse-ui-testing';
  return (
    <div className="prism-dark-jsx-wrapper">
      <SyntaxHighlighter language="powershell" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Colors;
