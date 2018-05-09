import React from 'react';
import styled from 'styled-components';
import { SvgIcons } from 'synapsefi-ui';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------

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

const TitleText = styled.h3`
  font-weight: 300;
  font-size: 2.4rem;
`;

const HeaderText = () => {
  return (
    <div>
      <HeaderTitle>
        <SvgIcons.synapse_circle_logo color="#fff" size={32} rotate_ccw_slow className="mgr-s" />
        <TitleText>SynapseFi UI</TitleText>
      </HeaderTitle>
    </div>
  );
};

export default HeaderText;
