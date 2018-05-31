import JsxModalBasic, * as jsxModalBasic from '../../components/pages/components/modal/JsxModalBasic';
import JsxModalWithBtns, * as jsxModalWithBtns from '../../components/pages/components/modal/JsxModalWithBtns';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const BASIC = 'Basic';
const WITH_BTNS = 'With Buttons';

export default [
  { title: BASIC, code: jsxModalBasic.jsxSnippet, Component: JsxModalBasic },
  { title: WITH_BTNS, code: jsxModalWithBtns.jsxSnippet, Component: JsxModalWithBtns },
];
