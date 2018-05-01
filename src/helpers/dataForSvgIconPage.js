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
const PROFILE = 'Profile';
// --------------------------------------------------------------------------------------

export default [
  {
    [DASHBOARD]: [
      { text: BUSINESS_INFO, component: <SvgIcons.navBusiness hasCursor hoverColor={'red'}/> },
      { text: CIP_DOCUMENTS_AND_LIMITS, component: <SvgIcons.navDoc /> },
      { text: FINAL_PREVIEW, component: <SvgIcons.navFinalPreview /> },
      { text: FLOW_OF_FUNDS, component: <SvgIcons.navFlow /> },
      { text: INTEGRATION_NOTES, component: <SvgIcons.navIntegration /> },
      { text: RISK_ASSESSMENT, component: <SvgIcons.navRiskAssessment /> },
      { text: USER_INFORMATION, component: <SvgIcons.navUser /> },
      { text: PROFILE, component: <SvgIcons.profile hasCursor hoverColor={'red'} /> },
    ],
  },
];
