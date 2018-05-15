import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForTable from '../../pagesData/components/dataForTable';

const table = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForTable} />
    </div>
  );
};

export default table;
