import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForForm from '../../pagesData/components/dataForForm';
import propValuesForForm from '../../pagesData/propValues/propValuesForForm';
import propertiesFormData from '../../pagesData/extra/propertiesFormData';

const form = () => {
  return (
    <div>
      <SubSectionPageForComponents
        dataForThisPage={dataForForm}
        tableData={
          [
            { data: propValuesForForm }, 
            { title: `Values for prop type 'data'`, data: propertiesFormData}
          ]
        }
      />
    </div>
  );
};

export default form;
