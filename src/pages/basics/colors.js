import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import getColorsObj from '../../helpers/functions/getColorsObj';

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
`;

const BoxColor = styled.div`
  cursor: pointer;
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

// -------------------------------------------------------------------------------------
// ----------------------------------- Render ------------------------------------------
// -------------------------------------------------------------------------------------
const Colors = () => {
  getColorsObj();
  return (
    <Wrapper>
      {_.map(getColorsObj(), (colors, sectionName) => {
        return (
          <div key={sectionName} className="mgb-l">
            <SectionTitle>{sectionName}</SectionTitle>
            <MultiColorsWrapper>
              {colors.map(({ text, strColor }) => {
                return (
                  <IndivColorWrapper key={strColor}>
                    <BoxColor bgColor={strColor} />
                    <div>
                      <div>{text}</div>
                      <div>{strColor}</div>
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
