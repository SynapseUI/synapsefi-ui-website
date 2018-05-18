import React, { Component } from 'react';
import { Modal, Button } from 'synapsefi-ui';

class JsxModalBasic extends Component {
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
    this.setState(this.setState({ isOpen: false }));
  }

  render() {
    return (
      <div>
        <Button medium onClick={this.openModal}>
          Open Basic Modal
        </Button>
        <Modal
          isOpen={this.state.isOpen} // REQUIRED !
          closeModal={this.closeModal} // REQUIRED !
          // All props under are optional
          headerText={'I am a Header'}
          height={'600px'}
          width={'400px'}
        >
          <div>insdie of modal</div>
        </Modal>
      </div>
    );
  }
}

export default JsxModalBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React, { Component } from 'react';
import { Modal, Button } from 'synapsefi-ui';

class JsxModalBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState(this.setState({ isOpen: false }));
  }

  render() {
    return (
      <div>
        <Button onClick={this.openModal}>
          Basic Modal
        </Button>
        <Modal
          isOpen={this.state.isOpen} // REQUIRED !
          closeModal={this.closeModal} // REQUIRED !
          // All props under are optional
          headerText={'I am a Header'}
          height={'600px'}
          width={'400px'}
        >
          <div>insdie of modal</div>
        </Modal>
      </div>
    );
  }
}

export default JsxModalBasic;
`;
