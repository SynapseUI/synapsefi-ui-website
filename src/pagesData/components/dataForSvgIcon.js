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

export default [
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
