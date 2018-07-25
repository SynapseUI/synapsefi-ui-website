import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import propValuesForNumberInput from '../../pagesData/propValues/propValuesForNumberInput';
import dataForNumberInput from '../../pagesData/components/dataForNumberInput';

const input = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForNumberInput}
        tableData={
          [
            { data: propValuesForNumberInput }
          ]
        }
      />
    </div>
  );
};

export default input;
