import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import shortenTitleStr from '../../helpers/functions/shortenTitleStr';
import getLeftAndTopPosition from '../../helpers/functions/getLeftAndTopPosition';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import JsxSnippetAndRenderedComp from '../../components/common/JsxSnippetAndRenderedComp';

import JsxBtnsDiffSizes, * as jsxBtnsDiffSizes from '../../components/pages/components/buttons/JsxBtnsDiffSizes';
import JsxBtnsDiffFunctions, * as jsxBtnsDiffFunctions from '../../components/pages/components/buttons/JsxBtnsDiffFunctions';
import JsxBtnsHowToAddOnClick, * as jsxBtnsHowToAddOnClick from '../../components/pages/components/buttons/JsxBtnsHowToAddOnClick';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Data -----------------------------------------------
// -----------------------------------------------------------------------------------------
const SIZES = 'Sizes';
const FUNCTIONS = 'Functions';
const FAQ_ON_CLICK = 'FAQ: How to add onClick event handler ?';

const dataForThisPage = [
  { title: SIZES, code: jsxBtnsDiffSizes.jsxSnippet, Component: JsxBtnsDiffSizes },
  {
    title: FUNCTIONS,
    code: jsxBtnsDiffFunctions.jsxSnippet,
    Component: JsxBtnsDiffFunctions,
  },
  {
    title: FAQ_ON_CLICK,
    code: jsxBtnsHowToAddOnClick.jsxSnippet,
    Component: JsxBtnsHowToAddOnClick,
  },
];

const MenuContainer = styled.ul`
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

// -------------------------------------------------------------------------------------
// ----------------------------------- Render ------------------------------------------
// -------------------------------------------------------------------------------------

class button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: {},
    };
  }

  componentDidMount() {
    const positions = dataForThisPage.reduce((acc, obj) => {
      acc[obj.title] = getLeftAndTopPosition(obj.title);
      return acc;
    }, {});
    this.setState({ positions });
  }

  handleMenuItemClick(top) {
    window.scrollTo({
      top: top - 100,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div>
        <MenuContainer>
          {dataForThisPage.map(({ title }) => {
            if (_.isEmpty(this.state.positions)) return null;
            const { left, top } = this.state.positions[title];
            return (
              <MenuItem onClick={() => this.handleMenuItemClick(top)} key={title}>
                {shortenTitleStr(title)}
              </MenuItem>
            );
          })}
        </MenuContainer>
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

export default button;
