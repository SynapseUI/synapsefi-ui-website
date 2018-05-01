import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------
import HeaderText from './HeaderText';

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

  width: var(--width-sidebar);
  min-height: 100vh;

  background-color: var(--bg-color-sidebar);
  color: #fff;
  z-index: 100;
`;

const SectionWrapper = styled.div`
  padding: 3rem 3rem;

  display: grid;
  grid-gap: 2rem;
`;

const Section = styled.div`
  padding: var(--padding-sidebar-section);
  /* margin: var(--padding-sidebar-section); */
`;

const SubSectionWrapper = styled.div`
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  display: grid;
  grid-gap: 1rem;

  /* justify-items: start; */
`;

const SubSection = styled.div`
  padding: var(--padding-sidebar-sub-section);
  margin: var(--margin-sidebar-sub-section);

  /* background-color: rgba(255,255,255,.1); */

  &:hover {
    color: var(--color-teal);
  }
`;

const Test = styled.div`color: #fff;`;

const Sidebar = ({ siteTitle }) => {
  return (
    <Wrapper>
      <HeaderText siteTitle={siteTitle} />

      <SectionWrapper>
        {_.map(itemsForSidebar, ({ sectionText, subSections }, sectionName) => {
          return (
            <div key={sectionName}>
              <Section className="font-sidebar font-sidebar--section">{sectionText}</Section>
              <SubSectionWrapper>
                {_.map(subSections, ({ subSectionText, linkName }) => {
                  return (
                    <Link to={linkName} key={subSectionText}>
                      <SubSection className="font-sidebar font-sidebar--sub-section">
                        {subSectionText}
                      </SubSection>
                    </Link>
                  );
                })}
              </SubSectionWrapper>
            </div>
          );
        })}
      </SectionWrapper>
    </Wrapper>
  );
};

export default Sidebar;
