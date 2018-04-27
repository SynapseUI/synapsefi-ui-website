import React from 'react';
import styled from 'styled-components';

import { shortJson, longJson } from '../helpers/dataForJson';


import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import json from 'react-syntax-highlighter/languages/prism/json';

registerLanguage('json', json);

import { prismStyles, hljsStyles } from '../helpers/dataStyleSheet';

const StyledSyntaxWrapper = styled(SyntaxHighlighter)`
  font-size: 1.4rem;
`;

const Text = styled.h1`font-size: 2.4rem;`;

const JsonStyle = () => {
  return (
    <div>
      {prismStyles.map((style, idx) => {
        return (
          <div key={idx} className="mgb-m">
            <Text>{`${idx + 1}: ${prismStyles[idx].text}`}</Text>
            <StyledSyntaxWrapper language="json" style={style.style}>
              {shortJson}
            </StyledSyntaxWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default JsonStyle;
