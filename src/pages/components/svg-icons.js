import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxSvgIconDiffSizes, * as jsxSvgIconDiffSizes from '../../components/pages/components/svgIcons/JsxSvgIconDiffSizes';
import JsxSvgIconDiffColors, * as jsxSvgIconDiffColors from '../../components/pages/components/svgIcons/JsxSvgIconDiffColors';
import JsxSvgIconAnimations, * as jsxSvgIconAnimations from '../../components/pages/components/svgIcons/JsxSvgIconAnimations';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const SIZES = 'Sizes';
const COLORS = 'Colors';
const ANIMATIONS = 'Animations';

const dataForThisPage = [
  { title: SIZES, code: jsxSvgIconDiffSizes.jsxSnippet, Component: JsxSvgIconDiffSizes },
  {
    title: COLORS,
    code: jsxSvgIconDiffColors.jsxSnippet,
    Component: JsxSvgIconDiffColors,
  },
  {
    title: ANIMATIONS,
    code: jsxSvgIconAnimations.jsxSnippet,
    Component: JsxSvgIconAnimations,
  },
];

// -------------------------------------------------------------------------------------
// ----------------------------------- Render ------------------------------------------
// -------------------------------------------------------------------------------------
const SvgIcons = () => {
  return (
    <div>
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
    </div>
  );
};

export default SvgIcons;
