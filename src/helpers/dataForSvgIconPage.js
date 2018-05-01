import React from 'react';

import * as SvgIcons from '../components/SvgIcons';

// --------------------------------------------------------------------------------------
const DASHBOARD = 'Dashboard';

const BUSINESS_INFO = 'Business Info';
const CIP_DOCUMENTS_AND_LIMITS = 'Cip Documents & Limits';
const FINAL_PREVIEW = 'Final Preview';
const FLOW_OF_FUNDS = 'Flow of Funds';
const INTEGRATION_NOTES = 'Integration Notes';
const RISK_ASSESSMENT = 'Risk Assessment';
const USER_INFORMATION = 'User Information';
// --------------------------------------------------------------------------------------

export default [
  {
    [DASHBOARD]: [
      { text: BUSINESS_INFO, component: <SvgIcons.navBusiness /> },
      { text: CIP_DOCUMENTS_AND_LIMITS, component: <SvgIcons.navBusiness /> },
      { text: FINAL_PREVIEW, component: <SvgIcons.navBusiness /> },
      { text: FLOW_OF_FUNDS, component: <SvgIcons.navBusiness /> },
      { text: INTEGRATION_NOTES, component: <SvgIcons.navBusiness /> },
      { text: RISK_ASSESSMENT, component: <SvgIcons.navBusiness /> },
      { text: USER_INFORMATION, component: <SvgIcons.navBusiness /> },
    ],
  },
];
