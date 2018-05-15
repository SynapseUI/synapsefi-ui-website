// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import JsxBtnsDiffSizes, * as jsxBtnsDiffSizes from '../../components/pages/components/buttons/JsxBtnsDiffSizes';
import JsxBtnsDiffFunctions, * as jsxBtnsDiffFunctions from '../../components/pages/components/buttons/JsxBtnsDiffFunctions';
import JsxBtnsHowToAddOnClick, * as jsxBtnsHowToAddOnClick from '../../components/pages/components/buttons/JsxBtnsHowToAddOnClick';

// -----------------------------------------------------------------------------------------
// ------------------------------------ String Data ----------------------------------------
// -----------------------------------------------------------------------------------------
const SIZES = 'Sizes';
const FUNCTIONS = 'Functions';
const FAQ_ON_CLICK = 'FAQ: How to add onClick event handler ?';

// -----------------------------------------------------------------------------------------
// ------------------------------------  Data ----------------------------------------------
// -----------------------------------------------------------------------------------------
export default [
  { title: SIZES, code: jsxBtnsDiffSizes.jsxSnippet, Component: JsxBtnsDiffSizes },
  {
    title: FUNCTIONS,
    code: jsxBtnsDiffFunctions.jsxSnippet,
    Component: JsxBtnsDiffFunctions,
  },
  {
    title: FAQ_ON_CLICK,
    code: jsxBtnsHowToAddOnClick.jsxSnippet,
    Component: JsxBtnsHowToAddOnClick,
  },
];
