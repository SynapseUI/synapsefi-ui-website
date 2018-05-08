import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import styled from 'styled-components';
import { SvgIcons } from 'synapse-ui-testing';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: normal;
  color: var(--font-color-section-title);
`;

const IconListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
  grid-auto-rows: 100px;
  grid-gap: 1.2rem;
`;

const IconGroupWrapper = styled.div`
  font-size: 1.2rem;

  margin: 0 auto;

  display: grid;
  grid-auto-rows: 1fr;

  justify-items: center;
  grid-gap: 1.2rem;
`;

const Icon = styled.div`align-self: end;`;

const renderSvgComponent = (SvgComponent, key) => {
  if (key === 'synapse_circle_logo') {
    return <SvgComponent size={40} color="var(--color-teal)" rotate_ccw_normal />;
  }
  
  return <SvgComponent />;
};

const Icons = () => (
  <div>
    <IconListWrapper>
      {_.map(SvgIcons, (SvgComponent, key) => {
        if (key === '__esModule') return null;
        return (
          <IconGroupWrapper key={key}>
            <Icon>{renderSvgComponent(SvgComponent, key)}</Icon>
            <div style={{ textAlign: 'center' }}>{key}</div>
          </IconGroupWrapper>
        );
      })}
    </IconListWrapper>
  </div>
);

export default Icons;
