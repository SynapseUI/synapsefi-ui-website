import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const svgWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
  justifyItems: 'center',
}

const JsxSvgIconAnimation = () => {
  return (
    <div>
      <div style={svgWrapperStyle}>
        <SvgIcons.synapse_circle_logo color="#049cb0" size={48} rotate_ccw_slow />
        <SvgIcons.synapse_circle_logo color="#049cb0" size={40} rotate_ccw_normal />
        <SvgIcons.synapse_circle_logo color="#049cb0" size={56} rotate_ccw_fast />
      </div>
    </div>
  );
};

export default JsxSvgIconAnimation;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const svgWrapperStyle = {
  display: 'grid',
  gridGap: '20px',
  justifyItems: 'center',
}

const JsxSvgIconAnimation = () => {
  return (
    <div>
      <div style={svgWrapperStyle}>
        <SvgIcons.synapse_circle_logo color="#049cb0" size={48} rotate_ccw_slow />
        <SvgIcons.synapse_circle_logo color="#049cb0" size={40} rotate_ccw_normal />
        <SvgIcons.synapse_circle_logo color="#049cb0" size={56} rotate_ccw_fast />
      </div>
    </div>
  );
};

export default JsxSvgIconAnimation;
`;
