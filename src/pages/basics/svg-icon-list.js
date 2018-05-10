import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import styled from 'styled-components';
import { SvgIcons } from 'synapsefi-ui';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: normal;
  color: var(--font-color-section-title);
`;

const IconListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 10rem);
  justify-content: center;
  grid-auto-rows: 10rem;
  grid-gap: 1.2rem;
`;

const IconGroupWrapper = styled.div`
  cursor: pointer;
  border: none;

  font-size: 1.2rem;

  margin: 0 auto;

  display: grid;
  grid-auto-rows: 1fr;

  justify-items: center;
  grid-gap: 1.2rem;

  transition: all .2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transition: all 0s;
    transform: translateY(-2px);
  }

`;

const Icon = styled.div`
  align-self: end;


`;

const renderSvgComponent = (SvgComponent, text) => {
  if (text === 'synapse_circle_logo') {
    return <SvgComponent size={40} color="var(--color-teal)" rotate_ccw_normal />;
  }

  return <SvgComponent />;
};

const SvgIconList = () => (
  <div>
    <IconListWrapper>
      {_.map(SvgIcons, (SvgComponent, text) => {
        if (text === '__esModule') return null;
        return (
          <CopyToClipboard key={text} text={text}>
            <IconGroupWrapper>
              <Icon>{renderSvgComponent(SvgComponent, text)}</Icon>
              <div style={{ textAlign: 'center' }}>{text}</div>
            </IconGroupWrapper>
          </CopyToClipboard>
        );
      })}
    </IconListWrapper>
  </div>
);

export default SvgIconList;
