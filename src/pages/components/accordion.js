import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForAccordion from '../../pagesData/components/dataForAccordion';

const accordion = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForAccordion} />
    </div>
  );
};

export default accordion;