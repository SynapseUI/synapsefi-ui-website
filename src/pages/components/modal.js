import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForModal from '../../pagesData/components/dataForModal';

const modal = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForModal} />
    </div>
  );
};

export default modal;
