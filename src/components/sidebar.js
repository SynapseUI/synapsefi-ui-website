import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import SvgIconSynapseCircle from './svgIcons/SvgIconSynapseCircle';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data Import ----------------------------------------
// -----------------------------------------------------------------------------------------
import itemsForSidebar from '../helpers/itemsForSidebar';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  font-size: 1.6rem;
  line-height: 1;

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

  font-size: 2.4rem;
  font-weight: 300;
  padding-left: 1.6rem;
`;

const Section = styled.div`
  font-size: 1.8rem;
  /* cursor: pointer; */
  padding: var(--padding-sidebar-item);

  /* &:hover {
    color: var(--color-default-font);
    background-color: var(--color-navbar-hover);
  } */
`;

const SubSectionWrapper = styled.div`
  display: grid;
  /* justify-items: start; */
`;

const SubSection = styled.div`
  font-size: 1.6rem;
  padding: var(--padding-sidebar-subsection-item);

  &:hover {
    /* color: var(--color-default-font); */
    color: var(--color-teal);
    /* background-color: var(--color-navbar-hover); */
  }
`;

const Test = styled.div`color: #fff;`;

const Sidebar = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Link to={'/'}>
        <HeaderTitle>
          <SvgIconSynapseCircle size={'3.2rem'} fill={'#fff'} rotateCCW className="mgr-s" />
          {siteTitle}
        </HeaderTitle>
      </Link>

      {_.map(itemsForSidebar, ({ sectionText, subSections }, sectionName) => {
        return (
          <div key={sectionName}>
            <Section>{sectionText}</Section>
            <SubSectionWrapper>
              {_.map(subSections, ({ subSectionText, linkName }) => {
                return (
                  <Link to={linkName} key={subSectionText}>
                    <SubSection className="mgl-m">{subSectionText}</SubSection>
                  </Link>
                );
              })}
            </SubSectionWrapper>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Sidebar;
