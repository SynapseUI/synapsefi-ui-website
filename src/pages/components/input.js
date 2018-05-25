import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForInput from '../../pagesData/components/dataForInput';

const input = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForInput} />
    </div>
  );
};

export default input;
