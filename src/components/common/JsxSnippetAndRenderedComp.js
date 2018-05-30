import React from 'react';

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

const JsxSnippetAndRenderedComp = ({ jsxSnippet, Component, className }) => {  
  return (
    <div className={className || `prism-dark`}>
      <SyntaxHighlighter language="jsx" style={dark}>
        {jsxSnippet}
      </SyntaxHighlighter>
      <Component />
    </div>
  );
};

export default JsxSnippetAndRenderedComp;
