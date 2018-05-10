import React from 'react';

import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxBtnsDiffSizes, * as diffSizeBtns from '../../components/pages/components/buttons/JsxBtnsDiffSizes';

const Button = () => {
  return (
    <div>
      <JsxSnippetAndRenderedComp
        jsxSnippet={diffSizeBtns.jsxSnippet}
        Component={JsxBtnsDiffSizes}
      />
    </div>
  );
};

export default Button;
