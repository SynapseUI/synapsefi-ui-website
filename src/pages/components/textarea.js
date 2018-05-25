import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForTextarea from '../../pagesData/components/dataForTextarea';

const textarea = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForTextarea} />
    </div>
  );
};

export default textarea;
