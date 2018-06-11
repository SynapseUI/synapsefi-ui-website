import React from 'react';
import styled from 'styled-components';
import { ButtonGroup } from 'synapsefi-ui';

const Wrapper = styled.div`
  border: 1px dotted red;
  width: 400px;
  display: grid;
  grid-gap: 30px;
`;

const btnObjs1 = [
  {
    text: 'full 1',
    onClick: () => {
      window.alert('yeah~~');
    },
  },
  {
    text: 'full 2',
    style: 'tertiary',
    size: 'large',
  },
];

const btnObjs2 = [
  {
    text: 'button1',
    style: 'secondary',
  },
  {
    text: 'button2',
    style: 'remove',
  },
];

const JsxButtonGroupExamples = () => {
  return (
    <div>
      <Wrapper>
        <ButtonGroup btnObjs={btnObjs1} fullWidthBtn />
        <ButtonGroup btnObjs={btnObjs2} />
      </Wrapper>
    </div>
  );
};

export default JsxButtonGroupExamples;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import styled from 'styled-components';
import { ButtonGroup } from 'synapsefi-ui';

const Wrapper = styled.div\`
  border: 1px dotted red;
  width: 400px;
  display: grid;
  grid-gap: 30px;
\`;

const btnObjs1 = [
  {
    text: 'full 1',
    onClick: () => {
      window.alert('yeah~~');
    },
  },
  {
    text: 'full 2',
    style: 'tertiary',
    size: 'large',
  },
];

const btnObjs2 = [
  {
    text: 'button1',
    style: 'secondary',
  },
  {
    text: 'button2',
    style: 'remove',
  },
];

const JsxButtonGroupExamples = () => {
  return (
    <div>
      <Wrapper>
        <ButtonGroup btnObjs={btnObjs1} fullWidthBtn />
        <ButtonGroup btnObjs={btnObjs2} />
      </Wrapper>
    </div>
  );
};

export default JsxButtonGroupExamples;
`;
