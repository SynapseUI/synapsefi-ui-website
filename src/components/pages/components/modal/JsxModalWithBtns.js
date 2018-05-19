import React, { Component } from 'react';
import { range } from 'lodash';
import { Modal, Button } from 'synapsefi-ui';

class JsxModalWithBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  renderModal() {
    const btnObjs = [
      {
        text: 'Remove',
        btnProps: {
          size: 'large',
          style: 'remove',
        },
      },
      {
        text: 'Secondary',
        btnProps: {
          style: 'secondary',
        },
      },
      {
        text: 'primary btn',
        btnProps: {
          style: 'primary',
        },
      },
    ];

    return (
      <Modal
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        headerText={'I am a Header'}
        height={'500px'}
        width={'700px'}
        btnObjs={btnObjs}
      >
        <div>contents</div>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <Button medium onClick={this.openModal}>
          Modal with Buttons
        </Button>
        {this.renderModal()}
      </div>
    );
  }
}

export default JsxModalWithBtn;

// ------------------------------------------------------------

export const jsxSnippet = `import React, { Component } from 'react';
import { range } from 'lodash';
import { Modal, Button } from 'synapsefi-ui';

class JsxModalWithBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  renderModal() {
    const btnObjs = [
      {
        text: 'Remove',
        btnProps: {
          size: 'large',
          style: 'remove',
        },
      },
      {
        text: 'Secondary',
        btnProps: {
          style: 'secondary',
        },
      },
      {
        text: 'primary btn',
        btnProps: {
          style: 'primary',
        },
      },
    ];

    return (
      <Modal
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        headerText={'I am a Header'}
        height={'500px'}
        width={'700px'}
        btnObjs={btnObjs}
      >
        <div>contents</div>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <Button medium onClick={this.openModal}>
          Modal with Buttons
        </Button>
        {this.renderModal()}
      </div>
    );
  }
}

export default JsxModalWithBtn;
`;
