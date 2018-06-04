import JsxModalBasic, * as jsxModalBasic from '../../components/pages/components/modal/JsxModalBasic';
import JsxModalWithBtns, * as jsxModalWithBtns from '../../components/pages/components/modal/JsxModalWithBtns';
import JsxModalSizesColors, * as jsxModalSizesColors from '../../components/pages/components/modal/JsxModalSizesColors';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const BASIC = 'Basic';
const WITH_BTNS = 'With Buttons';
const DIFF_SIZES_COLORS = 'Diff Sizez & Colors';

export default [
  { title: BASIC, code: jsxModalBasic.jsxSnippet, Component: JsxModalBasic },
  { title: WITH_BTNS, code: jsxModalWithBtns.jsxSnippet, Component: JsxModalWithBtns },
  { title: DIFF_SIZES_COLORS, code: jsxModalSizesColors.jsxSnippet, Component: JsxModalSizesColors },
];
