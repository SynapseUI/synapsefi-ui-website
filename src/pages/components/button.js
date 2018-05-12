import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxBtnsDiffSizes, * as jsxBtnsDiffSizes from '../../components/pages/components/buttons/JsxBtnsDiffSizes';
import JsxBtnsDiffFunctions, * as jsxBtnsDiffFunctions from '../../components/pages/components/buttons/JsxBtnsDiffFunctions';
import JsxBtnsHowToAddOnClick, * as jsxBtnsHowToAddOnClick from '../../components/pages/components/buttons/JsxBtnsHowToAddOnClick';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const SIZES = 'Sizes';
const FUNCTIONS = 'Functions';
const FAQ_ON_CLICK = 'FAQ: How to add onClick event handler ?';

const dataForThisPage = [
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

// -------------------------------------------------------------------------------------
// ----------------------------------- Render ------------------------------------------
// -------------------------------------------------------------------------------------
const Button = () => {
  return (
    <div>
      {dataForThisPage.map(obj => {
        return (
          <div key={obj.title}>
            <h4 className="components components__sub-section-title"> {obj.title} </h4>
            <JsxSnippetAndRenderedComp jsxSnippet={obj.code} Component={obj.Component} />
            <div className="components components__section-divider" />
          </div>
        );
      })}
    </div>
  );
};

export default Button;
