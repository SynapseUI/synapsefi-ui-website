import React from 'react';

import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxBtnsDiffSizes, * as diffSizeBtns from '../../components/pages/components/buttons/JsxBtnsDiffSizes';
import JsxBtnsDiffFunctions, * as diffFuncBtns from '../../components/pages/components/buttons/JsxBtnsDiffFunctions';

const Button = () => {
  return (
    <div>
      <JsxSnippetAndRenderedComp
        jsxSnippet={diffSizeBtns.jsxSnippet}
        Component={JsxBtnsDiffSizes}
      />

      <JsxSnippetAndRenderedComp
        jsxSnippet={diffFuncBtns.jsxSnippet}
        Component={JsxBtnsDiffFunctions}
      />
    </div>
  );
};

export default Button;
