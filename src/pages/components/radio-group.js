import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForRadiogroup from '../../pagesData/components/dataForRadiogroup';

const radioGroup = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForRadiogroup} />
    </div>
  );
};

export default radioGroup;
