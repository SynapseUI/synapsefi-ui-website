import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Button from '../components/Button';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
// const Component = () => {

// }

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: start;
`;

const codeString = '(num) => num + 1';

const Buttons = () => (
  <Wrapper>
    <Button> Default </Button>
    <Button primary> Primary </Button>
    <Button secondary> Secondary </Button>
    <Button tertiary> Tertiary </Button>
    <Button remove> Remove </Button>
    <Button isDisabled> Disable </Button>
    <Button isLoading> Loading </Button>
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>;
  </Wrapper>
);

export default Buttons;
