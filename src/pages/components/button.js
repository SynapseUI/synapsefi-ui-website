import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForButtonPage from '../../pagesData/components/dataForButtonPage';

const button = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForButtonPage} />
    </div>
  );
};

export default button;
