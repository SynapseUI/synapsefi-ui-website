import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const btnWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
};

const JsxSvgIconDiffSizes = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <SvgIcons.synapse_circle_logo />
        <SvgIcons.synapse_circle_logo size={'50px'} />
      </div>
    </div>
  );
};

export default JsxSvgIconDiffSizes;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const btnWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
};

const JsxSvgIconDiffSizes = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <SvgIcons.synapse_circle_logo />
        <SvgIcons.synapse_circle_logo size={'50px'} />
      </div>
    </div>
  );
};

export default JsxSvgIconDiffSizes;
`;
