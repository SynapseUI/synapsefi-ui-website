import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import propValuesForInput from '../../pagesData/propValues/propValuesForInput';
import dataForInput from '../../pagesData/components/dataForInput';

const input = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForInput}
        tableData={
          [
            { data: propValuesForInput }
          ]
        }
      />
    </div>
  );
};

export default input;
