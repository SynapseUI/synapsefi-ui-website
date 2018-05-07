import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

import SynapseFiHeaderLogo from './HeaderRelated/SynapseFiHeaderLogo';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--color-teal);
  height: var(--height-header);
  width: 100vw;

  z-index: 99;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <SynapseFiHeaderLogo />
        </Link>
      </h1>
    </div>
  </Wrapper>
);

export default Header;
