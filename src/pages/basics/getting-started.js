import React from 'react';

import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import InstallationCodeAtGetStartPage from '../../components/pages/gettingStarted/InstallationCodeAtGetStartPage';
import JsxBtnAtGetStartPage, * as Btn from '../../components/pages/gettingStarted/JsxBtnAtGetStartPage';
import JsxSvgIconsAtGetStartPage, * as SvgIcons from '../../components/pages/gettingStarted/JsxSvgIconsAtGetStartPage';

const GettingStarted = () => {
  return (
    <div>
      {/* <h1 className="h1 mgb-s">Getting Started</h1> */}

      <p className="p">
        "synapse-ui" is an UI library built with "styled-components". So you need to do npm install both
        'synapsefi-ui' and 'styled-components'.
      </p>

      <InstallationCodeAtGetStartPage />

      <p className="p">
        Then you can use 'synapsefi-ui' as code snippet below. You can render Button by:
      </p>

      <JsxSnippetAndRenderedComp jsxSnippet={Btn.jsxSnippet} Component={JsxBtnAtGetStartPage} />

      <p className="p">
        You can render svg icons of nomal synapse logo and rotating teal colored synapse logo by:
      </p>

      <JsxSnippetAndRenderedComp
        jsxSnippet={SvgIcons.jsxSnippet}
        Component={JsxSvgIconsAtGetStartPage}
      />

      <p className="p">More examples are availables at Components section ~</p>
    </div>
  );
};

export default GettingStarted;
