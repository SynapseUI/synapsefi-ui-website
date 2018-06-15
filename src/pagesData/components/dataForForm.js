// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

import FormBasic, * as formBasic from '../../components/pages/components/form/FormBasic';
import FormChildren, * as formChildren from '../../components/pages/components/form/FormChildren';
import FormValidation, * as formValidation from '../../components/pages/components/form/FormValidation';

// -----------------------------------------------------------------------------------------
// ------------------------------------ String Data ----------------------------------------
// -----------------------------------------------------------------------------------------

const BASIC = 'Basic';
const CHILDREN = 'Children';
const VALIDATION = 'Validation';

// -----------------------------------------------------------------------------------------
// ------------------------------------  Data ----------------------------------------------
// -----------------------------------------------------------------------------------------
export default [
  {
    title: BASIC,
    code: formBasic.jsxSnippet,
    Component: FormBasic,
    className: 'prism-dark-rows'
  },
  {
    title: CHILDREN,
    code: formChildren.jsxSnippet,
    Component: FormChildren,
    className: 'prism-dark-rows'
  },
  {
    title: VALIDATION,
    code: formValidation.jsxSnippet,
    Component: FormValidation,
    className: 'prism-dark-rows'
  },
];
