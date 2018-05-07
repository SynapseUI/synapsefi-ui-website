import React from 'react';
import styled from 'styled-components';

import dataForSidebar, { SUB_SECTIONS, SUB_SECTION_TEXT } from '../../helpers/dataForSidebar';

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
  const sectionKey = filteredLinks[0];
  const subSectionKey = filteredLinks[1];

  if (filteredLinks.length === 0) return null;
  if (dataForSidebar[sectionKey] === undefined) return null;

  return (
    <Wrapper>
      <H3>{dataForSidebar[sectionKey][SUB_SECTIONS][subSectionKey][SUB_SECTION_TEXT]}</H3>
    </Wrapper>
  );
};

export default PageHeader;
