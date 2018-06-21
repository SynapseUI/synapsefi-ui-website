import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import propValuesForDropdown from '../../pagesData/propValues/propValuesForDropdownData';
import propValuesForDropdownHead from '../../pagesData/extra/propValuesForDropdownHead';
import propValuesForDropdownContent from '../../pagesData/extra/propValuesForDropdownContent';

import dataForDropdown from '../../pagesData/components/dataForDropdown';

const dropdown = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForDropdown}
        tableData={
          [
            { data: propValuesForDropdown },
            {
              title: 'Values for DropdownHead',
              data: propValuesForDropdownHead
            },
            {
              title: 'Values for DropdownContent',
              data: propValuesForDropdownContent
            }
          ]
        }
      />
    </div>
  );
};

export default dropdown;
