import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForButtonGroup from '../../pagesData/components/dataForButtonGroup';

const ButtonGroup = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForButtonGroup} />
    </div>
  );
};

export default ButtonGroup;
