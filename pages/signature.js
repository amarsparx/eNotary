import React from 'react';
import SignaturePadModal from '../components/Modals/SignaturePadModal';

class Signature extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = ({ signature, initials }) => {
    if (typeof signature === 'string' && typeof initials === 'string') {
      // signature/initials were drawn
      console.log('[DRAW IT DATA]', signature, initials);
    } else {
      // signature/initials were typed
      console.log('[TYPEIN DATA]', signature, initials);
    }
  };

  render() {
    return (
      <>
        <SignaturePadModal show={true} onSubmit={this.onSubmit} />
      </>
    );
  }
}

export default Signature;
