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
  /* grid-template-rows: repeat(auto-fit, 100px); */
  grid-auto-rows: 100px;
  grid-gap: 1.2rem;
`;

const IconGroupWrapper = styled.div`
  font-size: 1.2rem;

  display: grid;
  grid-auto-rows: 1fr;
  justify-items: center;
  grid-gap: .8rem;
`;

const Icon = styled.div`align-self: end;`;

const SvgIcons = () => (
  <div>
    {/* <div>err</div> */}
    {dataForSvgIconPage.map(section => {
      return _.map(section, (sectionItems, sectionTitle) => {
        return (
          <div>
            <SectionTitle className="mgb-m">{sectionTitle}</SectionTitle>
            <IconListWrapper className="mgl-l">
              {sectionItems.map(({ text, component }) => {
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
      });
    })}
  </div>
);

export default SvgIcons;
