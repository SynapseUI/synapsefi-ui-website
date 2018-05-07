import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Import Components ----------------------------------
// -----------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data Import ----------------------------------------
// -----------------------------------------------------------------------------------------
import dataForSidebar, {
  SECTION_TEXT,
  SUB_SECTIONS,
  SUB_SECTION_TEXT,
  SUB_SECTION_LINK,
} from '../../helpers/dataForSidebar';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  margin-top: var(--height-header);

  width: var(--width-sidebar);
  min-height: calc(100vh - var(--height-header));

  background-color: var(--bg-color-sidebar);
  color: #fff;
  z-index: 100;
`;

const SectionWrapper = styled.div`
  padding: 3rem 3rem;

  display: grid;
  grid-gap: 2rem;
`;

const SectionText = styled.div`padding: var(--padding-sidebar-section);`;

const SubSectionWrapper = styled.div`
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  display: grid;
  grid-gap: 1rem;
`;

const SubSectionText = styled.div`
  padding: var(--padding-sidebar-sub-section);
  margin: var(--margin-sidebar-sub-section);

  &:hover {
    color: var(--color-teal);
  }
`;

const Sidebar = ({ siteTitle }) => {
  return (
    <Wrapper>
      <SectionWrapper>
        {_.map(dataForSidebar, (sectionVal, sectionKey) => {
          return (
            <div key={sectionKey}>
              <SectionText className="font-sidebar font-sidebar--section">
                {sectionVal[SECTION_TEXT]}
              </SectionText>
              <SubSectionWrapper>
                {_.map(sectionVal[SUB_SECTIONS], (subSectionVal, subSectionKey) => {
                  return (
                    <Link to={subSectionVal[SUB_SECTION_LINK]} key={subSectionKey}>
                      <SubSectionText className="font-sidebar font-sidebar--sub-section">
                        {subSectionVal[SUB_SECTION_TEXT]}
                      </SubSectionText>
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
