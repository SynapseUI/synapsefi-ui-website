import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForDropdown from '../../pagesData/components/dataForDropdown';

const dropdown = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForDropdown} />
    </div>
  );
};

export default dropdown;
