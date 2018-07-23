import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import propValuesForTextarea from '../../pagesData/propValues/propValuesForTextarea';
import dataForTextarea from '../../pagesData/components/dataForTextarea';

const textarea = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForTextarea}
        tableData={
          [
            { data: propValuesForTextarea }
          ]
        }
      />
    </div>
  );
};

export default textarea;
