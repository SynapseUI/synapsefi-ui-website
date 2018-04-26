import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: var(--width-sidebar);
  min-height: 100vh;

  background-color: var(--bg-color-sidebar);
  color: #fff;
  z-index: 100;
`;

const HeaderTitle = styled.div`
  height: var(--height-header);
  background-color: var(--bg-color-header);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Sidebar = ({ siteTitle }) => {
  console.log('siteTitle: ', siteTitle);
  return (
    <Wrapper>
      <HeaderTitle>{siteTitle}</HeaderTitle>
    </Wrapper>
  );
};

export default Sidebar;
