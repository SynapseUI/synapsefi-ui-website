import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const absCenterPositioning = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// -----------------------------------------------------------------------------------------
// ---------------------------------------- Common Style -----------------------------------
// -----------------------------------------------------------------------------------------
const commonBtnStyle = `
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 100;
`;

// -----------------------------------------------------------------------------------------
// ---------------------------------------- Size -------------------------------------------
// -----------------------------------------------------------------------------------------
const smallHeight = '32px';
const mediumHeight = '40px';
const largeHeight = '48px';

// -----------------------------------------------------------------------------------------
// ---------------------------------------- Size -------------------------------------------
// -----------------------------------------------------------------------------------------
const small = `
  height: ${smallHeight};
  font-size: 18px;
  padding: 0 32px;
`;

const medium = `
  height: ${mediumHeight};
  font-size: 18px;
  padding: 0 40px;
`;

const large = `
  height: ${largeHeight};
  font-size: 20px;
  padding: 0 40px;
`;

const fullWidth = `
  padding: 0;
  width: 100%;
`;

// -----------------------------------------------------------------------------------------
// ---------------------------------------- Color ------------------------------------------
// -----------------------------------------------------------------------------------------
const primary = `
  background: var(--color-teal);
  color: #fff;
  &:hover {
    background: var(--color-dark-teal);
  }
  &:active {
    background: var(--color-deep-teal);
  }
`;

const secondary = `
  border: 1px solid currentColor;
  background: #fff;
  color: var(--color-teal);
  &:hover {
    border: 1px solid var(--color-dark-teal);
    background: var(--color-dark-teal);
    color: #fff;
  }
  &:active {
    border: 1px solid var(--color-deep-teal);
    background: var(--color-deep-teal);
    color: #fff;
  }
`;

const tertiary = `
  border: 1px solid currentColor;
  background: #fff;
  color: var(--color-evening);
  &:hover {
    border: 1px solid var(--color-night);
    background: var(--color-night);
    color: #fff;
  }
  &:active {
    border: 1px solid var(--color-dark-night);
    background: var(--color-dark-night);
    color: #fff;
  }
`;

const remove = `
  background: var(--color-energy);
  color: #fff;
  &:hover {
    background: var(--color-dark-energy);
  }
  &:active {
    background: var(--color-deep-energy);
  }
`;

const isDisabled = `
  border: none !important;
  background: var(--color-cool-light) !important;
  color: var(--color-medium-gry) !important;
  cursor: not-allowed !important;
`;

// -----------------------------------------------------------------------------------------
// ---------------------------------------- Styled Components ------------------------------
// -----------------------------------------------------------------------------------------
const BtnStyle = styled.button`
  ${commonBtnStyle};

  /* Default Style */
  ${medium};
  ${primary};

  /* Size */
  ${props => props.small && css`${small};`};
  ${props => props.medium && css`${medium};`};
  ${props => props.large && css`${large};`};
  ${props => props.fullWidth && css`${fullWidth};`};

  /* Color */
  ${props => props.primary && css`${primary};`};
  ${props => props.secondary && css`${secondary};`};
  ${props => props.tertiary && css`${tertiary};`};
  ${props => props.remove && css`${remove};`};
  ${props => props.isDisabled && css`${isDisabled};`};
  ${props => props.isLoading && css`${isDisabled};`};
`;

const Text = styled.div`${props => props.isLoading && css`visibility: hidden;`};`;

const IsLoadingBox = styled.div`
  ${absCenterPositioning};
  
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.isLoading && css`visibility: visible;`};
`;

// -----------------------------------------------------------------------------------------
// -------------------------------- Synapse Svg Icons Style Related-------------------------
// -----------------------------------------------------------------------------------------
const rotateCounterClockwise = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const decreaseLogoSizeBy = 0.7;

const StyledSynpaseIcon = styled.svg`
  width: calc(${mediumHeight} * ${decreaseLogoSizeBy});
  animation: ${rotateCounterClockwise} 1.5s linear infinite;

  fill: var(--color-teal);

  ${props => props.small && css`width: calc(${smallHeight} * ${decreaseLogoSizeBy});`};
  ${props => props.medium && css`width: calc(${mediumHeight} * ${decreaseLogoSizeBy});`};
  ${props => props.large && css`width: calc(${largeHeight} * ${decreaseLogoSizeBy});`};
`;

// -----------------------------------------------------------------------------------------
// -------------------------------- Actual Svg Icon ----------------------------------------
// -----------------------------------------------------------------------------------------
const getSynapseCircleLogo = props => {
  return (
    <StyledSynpaseIcon
      {...props}
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 151.9 153.2"
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <g>
          <path d="M11.6,113.2c-1.3,0-2.6-0.7-3.2-2C2.9,100.6,0,88.6,0,76.6c0-13.3,3.5-26.5,10.2-38c1-1.7,3.2-2.3,4.9-1.3
            c1.7,1,2.3,3.2,1.3,4.9c-6,10.4-9.2,22.3-9.2,34.4c0,11.1,2.5,21.6,7.6,31.4c0.9,1.8,0.2,3.9-1.6,4.9
              C12.7,113.1,12.1,113.2,11.6,113.2z" />
        </g>
        <g>
          <path d="M140.3,113.6c-0.6,0-1.1-0.1-1.6-0.4c-1.8-0.9-2.5-3.1-1.6-4.8c5-9.6,7.6-20.5,7.6-31.4
            c0-12.1-3.2-24-9.2-34.4c-1-1.7-0.4-3.9,1.3-4.9c1.7-1,3.9-0.4,4.9,1.3c6.6,11.5,10.2,24.6,10.2,38c0,12.1-2.9,24.1-8.4,34.7
              C142.9,112.9,141.6,113.6,140.3,113.6z" />
        </g>
        <g>
          <path d="M148.3,76.6" />
        </g>
        <path d="M118.1,113.4c8.6-9.9,13.9-22.7,13.9-36.8c0-30.9-25.1-56-56-56c-14.1,0-27,5.3-36.9,14L29.5,25
          C42.3,13.5,58.6,7.2,76,7.2c18.4,0,35.8,7.1,48.8,20.1l0.2,0.2c1.4,1.4,3.7,1.4,5.1,0.1c1.4-1.4,1.4-3.7,0-5.1l-0.3-0.3
            C115.5,7.9,96.3,0,76,0C55.5,0,36.3,8,21.8,22.4c-0.7,0.7-1.1,1.6-1.1,2.5c0,1,0.4,1.9,1.1,2.6L34,39.7c-8.7,9.9-14,22.8-14,36.9
            c0,30.9,25.1,56,56,56c14.2,0,27.1-5.4,37-14.1l9.2,9.9C109.5,139.7,93.2,146,76,146c-18.2,0-35.5-7.2-48.6-20.3
            c-1.4-1.4-3.7-1.4-5.1,0c-1.4,1.4-1.4,3.7,0,5.1c14.5,14.5,33.5,22.4,53.7,22.4c20.3,0,39.4-7.9,53.8-22.1c1.4-1.4,1.4-3.6,0.1-5
            L118.1,113.4z M76,125.4c-26.9,0-48.8-21.9-48.8-48.8c0-26.9,21.9-48.8,48.8-48.8c26.9,0,48.8,21.9,48.8,48.8
            C124.7,103.5,102.9,125.4,76,125.4z" />
      </g>
    </StyledSynpaseIcon>
  );
};

const Button = props => {
  // ---------------------------------------------------------------------------------------
  // ---------------------------------- Render ---------------------------------------------
  // ---------------------------------------------------------------------------------------
  const { isLoading } = props;
  return (
    <BtnStyle {...props}>
      <Text isLoading={isLoading}>{props.children}</Text>
      <IsLoadingBox isLoading={isLoading}>{getSynapseCircleLogo(props)}</IsLoadingBox>
    </BtnStyle>
  );
};

export default Button;
