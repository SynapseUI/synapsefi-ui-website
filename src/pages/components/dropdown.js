import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import propValuesForDropdown from '../../pagesData/propValues/propValuesForDropdownData';
import dataForDropdown from '../../pagesData/components/dataForDropdown';

const dropdown = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForDropdown}
        tableData={
          [
            { data: propValuesForDropdown }
          ]
        }
      />
    </div>
  );
};

export default dropdown;
