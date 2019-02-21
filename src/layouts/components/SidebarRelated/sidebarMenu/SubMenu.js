import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import {
  SUB_SECTION_TEXT,
  SUB_SECTION_LINK,
} from '../../../../helpers/dataForSidebar';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const SubSectionWrapper = styled.div`
  padding: 1rem 2rem;
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

const SubMenu = ({ subSections }) => {
  return (
    <SubSectionWrapper>
      {_.map(subSections, (subSectionVal, subSectionKey) => {
        return (
          <Link to={subSectionVal[SUB_SECTION_LINK]} key={subSectionKey}>
            <SubSectionText className="font-sidebar font-sidebar--sub-section">
              {subSectionVal[SUB_SECTION_TEXT]}
            </SubSectionText>
          </Link>
        );
      })}
    </SubSectionWrapper>
  );
};

export default SubMenu;
