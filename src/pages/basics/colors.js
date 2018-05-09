import React from 'react';
import _ from 'lodash';
import styled, { css } from 'styled-components';

import processedColorsObj from '../../helpers/processedColorsObj';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div``;

const SectionTitle = styled.h3`
  font-size: 2rem;
  text-transform: capitalize;
`;

const MultiColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--size-color-box));
  grid-gap: 2rem;
  margin: 1rem 2rem 1rem 0;
`;

const IndivColorWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  line-height: 1.2;
  font-size: 1.2rem;
  grid-auto-columns: max-content;
`;

const BoxColor = styled.button`
  cursor: pointer;
  border: none;
  width: var(--size-color-box);
  height: var(--size-color-box);
  background-color: ${props => props.bgColor};
  box-shadow: 0 0 1rem rgba(0, 0, 0, .15);
  transition: all .2s;
  &:hover {
    transform: translateY(-3px);
    & ~ div > div:last-child {
      transition: all .2s;
      color: var(--color-teal);
    }
  }
`;

const renderColorText = colorText => {
  if (colorText.length <= 7) return <div>{colorText}</div>;

  return (
    <div>
      <div>rgba</div>
      <div>{colorText.slice(4)}</div>
    </div>
  );
};

// -------------------------------------------------------------------------------------
// ----------------------------------- Render ------------------------------------------
// -------------------------------------------------------------------------------------
const Colors = () => {
  return (
    <Wrapper>
      {_.map(processedColorsObj, (colors, sectionName) => {
        return (
          <div key={sectionName} className="mgb-l">
            <SectionTitle>{sectionName}</SectionTitle>
            <MultiColorsWrapper>
              {colors.map(({ nameText, colorText }) => {
                return (
                  <IndivColorWrapper key={nameText}>
                    <CopyToClipboard text={colorText}>
                      <BoxColor bgColor={colorText} />
                    </CopyToClipboard>
                    <div>
                      <div>{nameText}</div>
                      <div>{renderColorText(colorText)}</div>
                    </div>
                  </IndivColorWrapper>
                );
              })}
            </MultiColorsWrapper>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Colors;
