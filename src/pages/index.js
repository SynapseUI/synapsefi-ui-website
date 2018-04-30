import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import faker from 'faker';
import Link from 'gatsby-link';

import namesForSidebar from '../helpers/constants/namesForSidebar';

import itemsForSidebar from '../helpers/itemsForSidebar';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const H1 = styled.h1`font-size: 4.2rem;`;
const H2 = styled.h2`font-size: 3.2rem;`;
const H4 = styled.h4`
  cursor: pointer;
  font-size: 1.8rem;
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
      {_.map(subSections, ({ subSectionText, linkName }) => {
        console.log('linkName: ', linkName);
        return (
          <Link to={linkName} key={linkName}>
            <H4>{subSectionText}</H4>
          </Link>
        );
      })}
    </SubSectionWrapper>
  );
};

const renderSections = () => {
  return (
    <SectionWrapper>
      {_.map(itemsForSidebar, ({ sectionText, subSections }, sectionLinkName) => {
        return (
          <div key={sectionText} className="mgb-l">
            <H2 className="mgb-m">{sectionText}</H2>
            {renderSubSections(subSections)}
          </div>
        );
      })}
    </SectionWrapper>
  );
};

const index = () => {
  return (
    <div>
      <H1 className="mgb-m">Documentation</H1>
      <P className="mgb-l">{faker.lorem.sentence(40)}</P>
      {renderSections()}
    </div>
  );
};

export default index;
