import React from 'react';
import styled from 'styled-components';

import itemsForSidebar from '../helpers/itemsForSidebar';

const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-warm-light);
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: 3rem;
  font-weight: 300;
`;

const PageHeader = ({ pathname }) => {
  const filteredLinks = pathname.split('/').filter(str => str.length !== 0);
  console.log('filteredLinks: ', filteredLinks);
  const sectionKey = filteredLinks[0];
  const subSectionKey = filteredLinks[1];

  return (
    <Wrapper>
      <H3>{itemsForSidebar[sectionKey]['subSections'][subSectionKey]['subSectionText']}</H3>
    </Wrapper>
  );
};

export default PageHeader;
