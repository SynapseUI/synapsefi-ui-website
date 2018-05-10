import React from 'react';

import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxBtnsDiffSizes, * as diffSizeBtns from '../../components/pages/components/buttons/JsxBtnsDiffSizes';

const Buttons = () => {
  return (
    <div>
      <JsxSnippetAndRenderedComp
        jsxSnippet={SvgIcons.jsxSnippet}
        Component={JsxSvgIconsAtGetStartPage}
      />
    </div>
  );
};

export default Buttons;
