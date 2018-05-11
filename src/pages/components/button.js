import React from 'react';

import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxBtnsDiffSizes, * as diffSizeBtns from '../../components/pages/components/buttons/JsxBtnsDiffSizes';
import JsxBtnsDiffFunctions, * as diffFuncBtns from '../../components/pages/components/buttons/JsxBtnsDiffFunctions';

const Button = () => {
  return (
    <div>
      <h4 className="components components__sub-section-title"> Size </h4>
      <JsxSnippetAndRenderedComp
        jsxSnippet={diffSizeBtns.jsxSnippet}
        Component={JsxBtnsDiffSizes}
      />

      <div className="components components__section-divider" />

      <h4 className="components components__sub-section-title"> Functions </h4>
      <JsxSnippetAndRenderedComp
        jsxSnippet={diffFuncBtns.jsxSnippet}
        Component={JsxBtnsDiffFunctions}
      />
    </div>
  );
};

export default Button;
