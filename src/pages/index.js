import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import faker from 'faker';
import Link from 'gatsby-link';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import dataForSidebar, {
  SECTION_TEXT,
  SUB_SECTIONS,
  SUB_SECTION_LINK,
  SUB_SECTION_TEXT,
} from '../helpers/dataForSidebar';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------

const H4 = styled.h4`
  cursor: pointer;
  padding: .5rem 0;
  padding-right: 1rem;
  &:hover {
    color: var(--color-teal);
  }
`;

const P = styled.p`font-size: 1.8rem;`;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    width: 35rem;
  }
`;

const SubSectionWrapper = styled.div`
  display: grid;
  justify-items: start;
`;

const renderSubSections = subSections => {
  return (
    <SubSectionWrapper>
      {_.map(subSections, (subSectionVal, subSectionKey) => {
        return (
          <Link to={subSectionVal[SUB_SECTION_LINK]} key={subSectionKey}>
            <H4 className="h4">{subSectionVal[SUB_SECTION_TEXT]}</H4>
          </Link>
        );
      })}
    </SubSectionWrapper>
  );
};

const renderSections = () => {
  return (
    <SectionWrapper>
      {_.map(dataForSidebar, (sectionVal, sectionKey) => {
        return (
          <div key={sectionKey} className="mgb-l">
            <h2 className="h2 mgb-m">{sectionVal[SECTION_TEXT]}</h2>
            {renderSubSections(sectionVal[SUB_SECTIONS])}
          </div>
        );
      })}
    </SectionWrapper>
  );
};

const index = () => {
  return (
    <div>
      <h1 className="h1 mgb-s">Documentation</h1>
      <P className="mgb-l">{faker.lorem.sentence(40)}</P>
      {renderSections()}
    </div>
  );
};

export default index;
