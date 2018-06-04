import React, { Component } from 'react';
import { range } from 'lodash';
import { Modal, Button } from 'synapsefi-ui';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
`;

class JsxModalSizesColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,

      height: undefined,
      width: undefined,
      top: undefined,
      left: undefined,
      innerBgColor: undefined,
      outerBgColor: undefined,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(obj) {
    this.setState({
      isOpen: true,
      height: obj.height,
      width: obj.width,
      top: obj.top,
      left: obj.left,
      innerBgColor: obj.innerBgColor,
      outerBgColor: obj.outerBgColor,
    });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  renderModal() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        headerText={'I am a Header'}
        height={this.state.height}
        width={this.state.width}
        top={this.state.top}
        left={this.state.left}
        innerBgColor={this.state.innerBgColor}
        outerBgColor={this.state.outerBgColor}
      >
        content
      </Modal>
    );
  }

  render() {
    const modalObjs = [
      { height: '300px', width: '300px' },
      {
        height: '500px',
        width: '500px',
        innerBgColor: '#ede2ef',
        outerBgColor: 'rgba(4, 156, 176, 0.25)',
        top: '80%',
        left: '30%',
      },
    ];

    return (
      <div>
        <Wrapper>
          {modalObjs.map((obj, idx) => {
            return (
              <Button key={idx} onClick={() => this.openModal(obj)}>
                {'Modal #' + (idx + 1)}
              </Button>
            );
          })}
          {this.renderModal()}
        </Wrapper>
      </div>
    );
  }
}

export default JsxModalSizesColors;

// ------------------------------------------------------------

export const jsxSnippet = `import React, { Component } from 'react';
import { range } from 'lodash';
import { Modal, Button } from 'synapsefi-ui';

import styled from 'styled-components';

const Wrapper = styled.div\`
  display: grid;
  grid-gap: 20px;
\`;

class JsxModalSizesColors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,

      height: undefined,
      width: undefined,
      top: undefined,
      left: undefined,
      innerBgColor: undefined,
      outerBgColor: undefined,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(obj) {
    this.setState({
      isOpen: true,
      height: obj.height,
      width: obj.width,
      top: obj.top,
      left: obj.left,
      innerBgColor: obj.innerBgColor,
      outerBgColor: obj.outerBgColor,
    });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  renderModal() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        headerText={'I am a Header'}
        height={this.state.height}
        width={this.state.width}
        top={this.state.top}
        left={this.state.left}
        innerBgColor={this.state.innerBgColor}
        outerBgColor={this.state.outerBgColor}
      >
        content
      </Modal>
    );
  }

  render() {
    const modalObjs = [
      { height: '300px', width: '300px' },
      {
        height: '500px',
        width: '500px',
        innerBgColor: '#ede2ef',
        outerBgColor: 'rgba(4, 156, 176, 0.25)',
        top: '80%',
        left: '30%',
      },
    ];

    return (
      <div>
        <Wrapper>
          {modalObjs.map((obj, idx) => {
            return (
              <Button key={idx} onClick={() => this.openModal(obj)}>
                {'Modal #' + (idx + 1)}
              </Button>
            );
          })}
          {this.renderModal()}
        </Wrapper>
      </div>
    );
  }
}

export default JsxModalSizesColors;
`;
