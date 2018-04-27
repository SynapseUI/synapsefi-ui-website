import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Button from '../components/Button';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-items: start;
`

const Buttons = () => (
  <Wrapper>
    <Button> Default </Button>
    <Button primary> Primary </Button>
    <Button secondary> Secondary </Button>
    <Button tertiary> Tertiary </Button>
    <Button remove> Remove </Button>
    <Button isDisabled> Disable </Button>
    <Button isLoading> Loading </Button>
  </Wrapper>
);

export default Buttons;
