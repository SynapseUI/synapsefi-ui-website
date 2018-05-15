import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import JsxSnippetAndRenderedComp from './JsxSnippetAndRenderedComp';

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
    const { dataForThisPage } = this.props;
    return (
      <div>
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
        {dataForThisPage.map((obj, idx) => {
          return (
            <div id={obj.title} key={obj.title}>
              <h4 className="components components__sub-section-title">{obj.title}</h4>
              <JsxSnippetAndRenderedComp jsxSnippet={obj.code} Component={obj.Component} />
              <div className="components components__section-divider" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SubSectionPageForComponents;
