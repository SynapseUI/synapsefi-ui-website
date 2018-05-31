import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForCheckboxgroup from '../../pagesData/components/dataForCheckboxGroup';

const checkboxGroup = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForCheckboxgroup} />
    </div>
  );
};

export default checkboxGroup;
