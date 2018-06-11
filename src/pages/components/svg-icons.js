import React from 'react';

import SubSectionPageForComponents from '../../components/common/SubSectionPageForComponents';

import dataForSvgIcon from '../../pagesData/components/dataForSvgIcon';

const svgIcon = () => {
  return (
    <div>
      <SubSectionPageForComponents dataForThisPage={dataForSvgIcon} />
    </div>
  );
};

export default svgIcon;
