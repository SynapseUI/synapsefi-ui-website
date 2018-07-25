// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

import NumberInputBasic, * as numberInputBasic from '../../components/pages/components/numberInput/NumberInputBasic';
// import InputError, * as inputError from '../../components/pages/components/input/InputError';
// import InputDisabled, * as inputDisabled from '../../components/pages/components/input/InputDisabled';

// -----------------------------------------------------------------------------------------
// ------------------------------------ String Data ----------------------------------------
// -----------------------------------------------------------------------------------------

const BASIC = 'Basic';
// const ERROR = 'Error Message';
// const DISABLED = 'Disabled Input'

// -----------------------------------------------------------------------------------------
// ------------------------------------  Data ----------------------------------------------
// -----------------------------------------------------------------------------------------
export default [
  {
    title: BASIC,
    code: numberInputBasic.jsxSnippet,
    Component: NumberInputBasic,
  },
  // {
  //   title: ERROR,
  //   code: inputError.jsxSnippet,
  //   Component: InputError
  // },
  // {
  //   title: DISABLED,
  //   code: inputDisabled.jsxSnippet,
  //   Component: InputDisabled
  // },
];
