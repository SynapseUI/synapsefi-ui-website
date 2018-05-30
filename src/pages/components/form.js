import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForForm from '../../pagesData/components/dataForForm';
import propValuesForForm from '../../pagesData/propValues/propValuesForForm';

const form = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForForm}
        propValues={propValuesForForm}
      />
    </div>
  );
};

export default form;
