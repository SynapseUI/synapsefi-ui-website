import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForSvgIconPage from '../../helpers/dataForSvgIconPage';

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
  grid-gap: .8rem;
`;

const Icon = styled.div`align-self: end;`;

const SvgIcons = () => (
  <div>
    <IconListWrapper>
      {dataForSvgIconPage.map(({ text, component }) => {
        return (
          <IconGroupWrapper key={text}>
            <Icon>{component}</Icon>
            <div style={{ textAlign: 'center' }}>{text}</div>
          </IconGroupWrapper>
        );
      })}
    </IconListWrapper>
  </div>
);

export default SvgIcons;
