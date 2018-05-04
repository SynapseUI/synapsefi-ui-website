import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
// import * as styles from 'react-syntax-highlighter/styles/prism';
import { pojoaque, hopscotch } from 'react-syntax-highlighter/styles/prism';

const Wrapper = styled.div`
  border-radius: 100px;
  & pre {
    border-radius: 100px;
  }
`;

const Colors = () => {
  const codeString = 'npm install --save styled-components';
  return (
    <div>
      {/* {_.map(styles, (style, key) => {
        console.log('key: ', key);
        return (
          <SyntaxHighlighter key={key} language="powershell" style={pojoaque}>
            {codeString}
          </SyntaxHighlighter>
        );
      })} */}
      <Wrapper>
        why ?
        <SyntaxHighlighter language="powershell" style={hopscotch}>
          {codeString}
        </SyntaxHighlighter>
      </Wrapper>
    </div>
  );
};

export default Colors;
