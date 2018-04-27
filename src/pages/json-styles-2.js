import React from 'react';
import styled from 'styled-components';

import { shortJson, longJson } from '../helpers/dataForJson';

import SyntaxHighlighter from 'react-syntax-highlighter';

import { prismStyles, hljsStyles } from '../helpers/dataStyleSheet';

const StyledSyntaxWrapper = styled(SyntaxHighlighter)`
  font-size: 1.4rem;
`;

const Text = styled.h1`font-size: 2.4rem;`;

const JsonStyle = () => {
  return (
    <div>
      {hljsStyles.map((style, idx) => {
        return (
          <div key={idx} className="mgb-m">
            <Text>{`${idx + 1}: ${hljsStyles[idx].text}`}</Text>
            <StyledSyntaxWrapper language="json" style={hljsStyles[idx].style}>
              {shortJson}
            </StyledSyntaxWrapper>
          </div>
        );
      })}
    </div>
  );
};

export default JsonStyle;
