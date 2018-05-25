// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

import InputBasic, * as inputBasic from '../../components/pages/components/input/InputBasic';
import InputError, * as inputError from '../../components/pages/components/input/InputError';
import InputDisabled, * as inputDisabled from '../../components/pages/components/input/InputDisabled';

// -----------------------------------------------------------------------------------------
// ------------------------------------ String Data ----------------------------------------
// -----------------------------------------------------------------------------------------

const BASIC = 'Basic';
const ERROR = 'Error Message';
const DISABLED = 'Disabled Input'

// -----------------------------------------------------------------------------------------
// ------------------------------------  Data ----------------------------------------------
// -----------------------------------------------------------------------------------------
export default [
  {
    title: BASIC,
    code: inputBasic.jsxSnippet,
    Component: InputBasic,
    description: `
      Input has quite a few properties to it but the most basic Input component
      really only needs a value and an onChange event.
    `
  },
  {
    title: ERROR,
    code: inputError.jsxSnippet,
    Component: InputError
  },
  {
    title: DISABLED,
    code: inputDisabled.jsxSnippet,
    Component: InputDisabled
  },
];
