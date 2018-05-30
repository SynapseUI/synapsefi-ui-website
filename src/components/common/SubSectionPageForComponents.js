import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import _ from 'lodash';

import { RadioGroup } from 'synapsefi-ui';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------

import JsxSnippetAndRenderedComp from './JsxSnippetAndRenderedComp';
import PropValuesTable from './PropValuesTable';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Helper ---------------------------------------------
// -----------------------------------------------------------------------------------------
import shortenTitleStr from '../../helpers/functions/shortenTitleStr';
import getLeftAndTopPosition from '../../helpers/functions/getLeftAndTopPosition';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------
const SummaryMenuWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  
`;

const TopBar = styled.div`
  ${props =>(props.showToggleTable && css`display: flex;`)}
  justify-content: space-between;

  margin-bottom: 1rem;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
  padding: .4rem .8rem;
  border: 1px solid currentColor;
  border-radius: 3px;
  color: #242931;
  transition: all .2s;
  opacity: .6;

  &:hover {
    opacity: 1;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

class SubSectionPageForComponents extends Component {
  // -------------------------------------------------------------------------------------
  // --------------------------------- Constructor ---------------------------------------
  // -------------------------------------------------------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      positions: {},
      toggleTable: true
    };
  }

  componentDidMount() {
    const { dataForThisPage } = this.props;
    const positions = dataForThisPage.reduce((acc, obj) => {
      acc[obj.title] = getLeftAndTopPosition(obj.title);
      return acc;
    }, {});
    this.setState({ positions });
  }

  // -------------------------------------------------------------------------------------
  // --------------------------------- Handler Methods -----------------------------------
  // -------------------------------------------------------------------------------------
  handleMenuItemClick(top) {
    window.scrollTo({
      top: top - 100,
      behavior: 'smooth',
    });
  }

  // -------------------------------------------------------------------------------------
  // ----------------------------------- Render ------------------------------------------
  // -------------------------------------------------------------------------------------
  render() {
    const { dataForThisPage, propValues } = this.props;
    return (
      <div>
        <TopBar showToggleTable={!!propValues}>
          {!!propValues && <RadioGroup
            value={this.state.toggleTable}
            label='Props'
            className="toggle-props-display"
            onChange={(e) => this.setState({
              toggleTable: !this.state.toggleTable
            })}
            options={
              [
                { key: true, text: 'On' },
                { key: false, text: 'Off' }
              ]
            }
          />}

          <SummaryMenuWrapper>
            {dataForThisPage.map(({ title }) => {
              if (_.isEmpty(this.state.positions)) return null;
              const { left, top } = this.state.positions[title];
              return (
                <MenuItem onClick={() => this.handleMenuItemClick(top)} key={title}>
                  {shortenTitleStr(title)}
                </MenuItem>
              );
            })}
          </SummaryMenuWrapper>
        </TopBar>

        <PropValuesTable
          propValues={propValues}
          toggleTable={this.state.toggleTable}
        />

        {dataForThisPage.map((obj, idx) => {
          return (
            <div id={obj.title} key={obj.title}>
              <h4 className="components components__sub-section-title">{obj.title}</h4>
              <JsxSnippetAndRenderedComp
                jsxSnippet={obj.code}
                Component={obj.Component}
                className={obj.className}
              />
              <div className="components components__section-divider" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SubSectionPageForComponents;
