import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const btnWrapperStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeats(auto-fits)',
  gridGap: '20px',
};

const JsxSvgIconDiffSizes = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <SvgIcons.synapse_circle_logo />
        <SvgIcons.synapse_circle_logo size={'50px'} />
        <SvgIcons.briefcase />
        <SvgIcons.briefcase size={40} />
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
  gridTemplateColumns: 'repeats(auto-fits)',
  gridGap: '20px',
};

const JsxSvgIconDiffSizes = () => {
  return (
    <div>
      <div style={btnWrapperStyle}>
        <SvgIcons.synapse_circle_logo />
        <SvgIcons.synapse_circle_logo size={'50px'} />
        <SvgIcons.briefcase />
        <SvgIcons.briefcase size={40} />
      </div>
    </div>
  );
};

export default JsxSvgIconDiffSizes;
`;
