import React from 'react';

import * as svgIcons from '../components/svgIcons';

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
      { text: BUSINESS_INFO, component: <svgIcons.navBusiness /> },
      { text: CIP_DOCUMENTS_AND_LIMITS, component: <svgIcons.navBusiness /> },
      { text: FINAL_PREVIEW, component: <svgIcons.navBusiness /> },
      { text: FLOW_OF_FUNDS, component: <svgIcons.navBusiness /> },
      { text: INTEGRATION_NOTES, component: <svgIcons.navBusiness /> },
      { text: RISK_ASSESSMENT, component: <svgIcons.navBusiness /> },
      { text: USER_INFORMATION, component: <svgIcons.navBusiness /> },
    ],
  },
];
