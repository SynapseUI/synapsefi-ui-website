import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const btnWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
};

const JsxSvgIconDiffColors = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <SvgIcons.synapse_circle_logo color="#049cb0"/>
        <SvgIcons.synapse_circle_logo color="#cf5938"/>
        <SvgIcons.synapse_circle_logo color="#ede2ef"/>
      </div>
    </div>
  );
};

export default JsxSvgIconDiffColors;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const btnWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
};

const JsxSvgIconDiffColors = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <SvgIcons.synapse_circle_logo color="#049cb0"/>
        <SvgIcons.synapse_circle_logo color="#cf5938"/>
        <SvgIcons.synapse_circle_logo color="#ede2ef"/>
      </div>
    </div>
  );
};

export default JsxSvgIconDiffColors;
`;
