import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import propValuesForCheckboxGroup from '../../pagesData/propValues/propValuesForCheckboxGroup';
import dataForCheckboxgroup from '../../pagesData/components/dataForCheckboxGroup';

const checkboxGroup = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForCheckboxgroup}
        tableData={
          [
            { data: propValuesForCheckboxGroup }
          ]
        }
      />
    </div>
  );
};

export default checkboxGroup;
