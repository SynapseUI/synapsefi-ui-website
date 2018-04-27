import React from 'react';

import SvgIconBusinessInfo from '../components/svgIcons/Dashboard/SvgIconBusinessInfo';
import SvgIconCipDocumentsAndLimits from '../components/svgIcons/Dashboard/SvgIconCipDocumentsAndLimits';
import SvgIconFinalPreview from '../components/svgIcons/Dashboard/SvgIconFinalPreview';
import SvgIconFlowOfFunds from '../components/svgIcons/Dashboard/SvgIconFlowOfFunds';
import SvgIconIntegrationNotes from '../components/svgIcons/Dashboard/SvgIconIntegrationNotes';
import SvgIconRiskAssessment from '../components/svgIcons/Dashboard/SvgIconRiskAssessment';
import SvgIconUserInformation from '../components/svgIcons/Dashboard/SvgIconUserInformation';

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
      { text: BUSINESS_INFO, component: <SvgIconBusinessInfo /> },
      { text: CIP_DOCUMENTS_AND_LIMITS, component: <SvgIconCipDocumentsAndLimits /> },
      { text: FINAL_PREVIEW, component: <SvgIconFinalPreview /> },
      { text: FLOW_OF_FUNDS, component: <SvgIconFlowOfFunds /> },
      { text: INTEGRATION_NOTES, component: <SvgIconIntegrationNotes /> },
      { text: RISK_ASSESSMENT, component: <SvgIconRiskAssessment /> },
      { text: USER_INFORMATION, component: <SvgIconUserInformation /> },
    ],
  },
];
