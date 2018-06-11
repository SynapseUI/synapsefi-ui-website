import React from 'react';
import styled from 'styled-components';
import { AnchorButton } from 'synapsefi-ui';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const JsxAnchorButton = () => {
  return (
    <div>
      <Wrapper>
        <AnchorButton text="basic" />
        <AnchorButton text="different size" fontSize="30px" />
        <AnchorButton text="hover red" hoverColor="red" />
        <AnchorButton text="active yellow" activeColor="yellow" />
        <AnchorButton text="remove" remove />
        <AnchorButton text="tertiary" tertiary />
      </Wrapper>
    </div>
  );
};

export default JsxAnchorButton;

// ------------------------------------------------------------

export const jsxSnippet = `import React from 'react';
import styled from 'styled-components';
import { AnchorButton } from 'synapsefi-ui';

const Wrapper = styled.div\`
  display: grid;
  grid-gap: 20px;
\`;

const JsxAnchorButton = () => {
  return (
    <div>
      <Wrapper>
        <AnchorButton text="basic" />
        <AnchorButton text="different size" fontSize="30px" />
        <AnchorButton text="hover red" hoverColor="red" />
        <AnchorButton text="active yellow" activeColor="yellow" />
        <AnchorButton text="remove" remove />
        <AnchorButton text="tertiary" tertiary />
      </Wrapper>
    </div>
  );
};

export default JsxAnchorButton;
`;
