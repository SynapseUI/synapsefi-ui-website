import React, { Component } from 'react';
import { range } from 'lodash';
import { Modal, Button } from 'synapsefi-ui';

const font = { fontSize: '20px' };
const bold = { ...font, fontWeight: 'bold' };
const content = { ...bold, marginLeft: '20px' };
const emptySpace = { height: '32px' };

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
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Button medium onClick={this.openModal}>
          Open Basic Modal
        </Button>
        <Modal
          isOpen={this.state.isOpen}
          closeModal={this.closeModal}
          headerText={'I am a Header'}
          height={'500px'}
          width={'700px'}
        >
          <div style={font}>
            Sandwich your modal contents
            in between
            Opening and closing
            Modal tag
            Like this:
          </div>
          <div style={emptySpace} />
          <div style={bold}>{'<Modal>'}</div>
          <div style={content}>{'{contents}'}</div>
          <div style={bold}>{'</Modal>'}</div>
        </Modal>
      </div>
    );
  }
}

export default JsxModalBasic;

// ------------------------------------------------------------

export const jsxSnippet = `import React, { Component } from 'react';
import { range } from 'lodash';
import { Modal, Button } from 'synapsefi-ui';

const font = { fontSize: '20px' };
const bold = { ...font, fontWeight: 'bold' };
const content = { ...bold, marginLeft: '20px' };
const emptySpace = { height: '32px' };

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
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Button medium onClick={this.openModal}>
          Open Basic Modal
        </Button>
        <Modal
          isOpen={this.state.isOpen}
          closeModal={this.closeModal}
          headerText={'I am a Header'}
          height={'500px'}
          width={'700px'}
        >
          <div style={font}>
            Sandwich your modal contents
            in between
            Opening and closing
            Modal tag
            Like this:
          </div>
          <div style={emptySpace} />
          <div style={bold}>{'<Modal>'}</div>
          <div style={content}>{'{contents}'}</div>
          <div style={bold}>{'</Modal>'}</div>
        </Modal>
      </div>
    );
  }
}

export default JsxModalBasic;
`;
