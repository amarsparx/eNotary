import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Signature from '../signature';

class SignaturePadModal extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    show: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal
          style={{
            zIndex: 4000,
            border: '1px solid'
          }}
          show={this.props.show}
          onHide={() => {
            this.props.onHide(false);
          }}
          variant="primary"
          size="xl"
        >
          <Modal.Body>
            <Signature onSubmit={this.props.onSubmit} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SignaturePadModal;
