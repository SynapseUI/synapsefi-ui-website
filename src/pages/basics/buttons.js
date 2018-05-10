import React from 'react';
import styled from 'styled-components';

import { Button } from 'synapsefi-ui';
// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
  font-size: 1.6rem;
  margin: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-column-gap: 16rem;

  justify-content: center;

  justify-items: start;
  line-height: 2;
`;

const TitleText = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const BtnsWrapper = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-auto-rows: 8rem;
  /* grid-gap: 2rem; */
`;

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const TITLE = 'title';
const HEIGHT = 'height';
const FONT_SIZE = 'font-size';
const BORDER_RADIUS = 'border-radius';
const PADDING_RIGHT_LEFT = 'minimum padding';

const textPrimary = 'Primary';
const textSecondary = 'Secondary';
const textTertiary = 'Tertiary';
const textRemove = 'Remove';

const PRIMARY_BTN = 'PRIMARY_BTN';
const SECONDARY_BTN = 'SECONDARY_BTN';
const TERTIARY_BTN = 'TERTIARY_BTN';
const REMOVE_BTN = 'REMOVE_BTN';

const btnData = [
  {
    [TITLE]: 'Small',
    [HEIGHT]: '32px',
    [FONT_SIZE]: '16px',
    [BORDER_RADIUS]: '3px',
    [PADDING_RIGHT_LEFT]: '32px',
  },
  {
    [TITLE]: 'Medium',
    [HEIGHT]: '40px',
    [FONT_SIZE]: '18px',
    [BORDER_RADIUS]: '3px',
    [PADDING_RIGHT_LEFT]: '40px',
  },
  {
    [TITLE]: 'Large',
    [HEIGHT]: '48px',
    [FONT_SIZE]: '20px',
    [BORDER_RADIUS]: '3px',
    [PADDING_RIGHT_LEFT]: '40px',
  },
];

// -------------------------------------------------------------------------------------
// ----------------------------------- Render ------------------------------------------
// -------------------------------------------------------------------------------------
const Buttons = () => {
  return (
    <Wrapper>
      {btnData.map(btnObj => {
        return (
          <div key={btnObj[TITLE]}>
            <TitleText>{btnObj[TITLE]}</TitleText>
            <div>{`${[HEIGHT]}: ${btnObj[HEIGHT]}`}</div>
            <div>{`${[FONT_SIZE]}: ${btnObj[FONT_SIZE]}`}</div>
            <div>{`${[BORDER_RADIUS]}: ${btnObj[BORDER_RADIUS]}`}</div>
            <div>{`${[PADDING_RIGHT_LEFT]}: ${btnObj[PADDING_RIGHT_LEFT]}`}</div>
            <BtnsWrapper>
              {[textPrimary, textSecondary, textTertiary, textRemove].map(text => {
                return (
                  <Button
                    key={text}
                    small={btnObj[TITLE] === 'Small'}
                    medium={btnObj[TITLE] === 'Medium'}
                    large={btnObj[TITLE] === 'Large'}
                    primary={text === textPrimary}
                    secondary={text === textSecondary}
                    tertiary={text === textTertiary}
                    remove={text === textRemove}
                  >
                    {text}
                  </Button>
                );
              })}
            </BtnsWrapper>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Buttons;
