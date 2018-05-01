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
  { text: 'add_circle', component: <SvgIcons.add_circle /> },
  { text: 'add', component: <SvgIcons.add color={'red'} hoverColor={'blue'} cursor /> },
  { text: 'canceled', component: <SvgIcons.canceled /> },
  { text: 'check', component: <SvgIcons.check /> },
  { text: 'circle', component: <SvgIcons.circle /> },
  { text: 'create', component: <SvgIcons.create /> },
  { text: 'delete_icon', component: <SvgIcons.delete_icon /> },
  { text: 'done', component: <SvgIcons.done /> },
  { text: 'edit', component: <SvgIcons.edit /> },
  { text: 'error', component: <SvgIcons.error /> },
  { text: 'briefcase', component: <SvgIcons.briefcase /> },
  { text: 'user_in_doc', component: <SvgIcons.user_in_doc /> },
  { text: 'check_list', component: <SvgIcons.check_list /> },
  { text: 'box_arrow_box', component: <SvgIcons.box_arrow_box /> },
  { text: 'two_boxes_in_doc', component: <SvgIcons.two_boxes_in_doc /> },
  { text: 'warning_in_paper', component: <SvgIcons.warning_in_paper /> },
  { text: 'user', component: <SvgIcons.user /> },
  { text: 'print', component: <SvgIcons.print /> },
  { text: 'processing', component: <SvgIcons.processing /> },
  { text: 'queued', component: <SvgIcons.queued /> },
  { text: 'remove', component: <SvgIcons.remove /> },
  { text: 'retunred', component: <SvgIcons.retunred /> },
  { text: 'serach', component: <SvgIcons.serach /> },
  { text: 'serring', component: <SvgIcons.serring /> },
  {
    text: 'synapse_circle_logo',
    component: <SvgIcons.synapse_circle_logo color={'var(--color-teal)'} rotate_ccw_normal />,
  },
  { text: 'warning', component: <SvgIcons.warning /> },
];
