import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import * as SvgIcons from './SvgIcons';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const HeaderTitle = styled.div`
  height: var(--height-header);
  background-color: var(--bg-color-header);

  display: flex;
  align-items: center;

  font-size: 2.4rem;
  font-weight: 300;
  padding-left: 1.6rem;
`;

const HeaderText = ({ siteTitle }) => {
  return (
    <Link to={'/'}>
      <HeaderTitle>
        <SvgIcons.synapse_circle_logo color="#fff" size={32} rotate_ccw_slow className="mgr-s"/>
        {siteTitle}
      </HeaderTitle>
    </Link>
  );
};

export default HeaderText;