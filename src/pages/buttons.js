import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';

import {
  coy,
  dark,
  funky,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  prism,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  darcula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  ghcolors,
  hopscotch,
  pojoaque,
  vs,
  xonokai,
} from 'react-syntax-highlighter/styles/prism';
// import docco from 'react-syntax-highlighter/styles/docco';

registerLanguage('jsx', jsx);

import Button from '../components/Button';
// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: start;
`;

const StyledSyntax = styled(SyntaxHighlighter)`
  /* width: 100%; */
  font-size: 2rem;
  padding: 2rem;
  
`;

const styleNames = [dark];

const PRE = 'pre[class*="language-"]';
const CODE = 'code[class*="language-"]';

dark[PRE]['background'] = 'var(--bg-color-sidebar)';
dark[PRE]['border'] = 'none';
dark[PRE]['borderRadius'] = 'none';
dark[CODE]['textShadow'] = 'none';

const Buttons = () => {
  return (
    <Wrapper>
      <Button> Default </Button>
      <Button primary> Primary </Button>
      <Button secondary> Secondary </Button>
      <Button tertiary> Tertiary </Button>
      <Button remove> Remove </Button>
      <Button isDisabled> Disable </Button>
      <Button isLoading> Loading </Button>
      {/* {styleNames.map((styleName, idx) => {
        return (
          <StyledSyntax key={idx} language="jsx" style={styleName}>
            {codeString}
          </StyledSyntax>
        );
      })} */}
    </Wrapper>
  );
};

export default Buttons;
