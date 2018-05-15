import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxBasicTable, * as jsxBasicTable from '../../components/pages/components/table/JsxBasicTable';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const BASIC = 'Basic';

const dataForThisPage = [
  { title: BASIC, code: jsxBasicTable.jsxSnippet, Component: JsxBasicTable },
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
