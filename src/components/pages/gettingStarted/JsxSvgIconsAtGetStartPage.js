import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const JsxSvgIconsAtGetStartPage = () => {
  return (
    <div>
      <div>
        <SvgIcons.synapse_circle_logo style={{ marginBottom: '24px' }} />
        <SvgIcons.synapse_circle_logo color="#049cb0" rotate_ccw_normal />
      </div>
    </div>
  );
};

export default JsxSvgIconsAtGetStartPage;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import { SvgIcons } from 'synapsefi-ui';

const JsxSvgIconsAtGetStartPage = () => {
  return (
    <div>
      <div>
        <SvgIcons.synapse_circle_logo style={{ marginBottom: '24px' }} />
        <SvgIcons.synapse_circle_logo color="#049cb0" rotate_ccw_normal />
      </div>
    </div>
  );
};

export default JsxSvgIconsAtGetStartPage;
`;
