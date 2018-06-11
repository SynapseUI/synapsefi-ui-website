import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForAnchorButton from '../../pagesData/components/dataForAnchorButton';

const button = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForAnchorButton} />
    </div>
  );
};

export default button;
