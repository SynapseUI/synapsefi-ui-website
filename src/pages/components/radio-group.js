import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import propValuesForRadioGroup from '../../pagesData/propValues/propValuesForRadioGroup';
import dataForRadiogroup from '../../pagesData/components/dataForRadiogroup';

const radioGroup = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForRadiogroup}
        tableData={
          [
            { data: propValuesForRadioGroup }
          ]
        }
      />
    </div>
  );
};

export default radioGroup;
