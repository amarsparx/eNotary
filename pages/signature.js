import React, { useState } from 'react';
import SignaturePadModal from '../components/Modals/SignaturePadModal';
import '../styles/scss/app.scss';
import '../styles/scss/main.scss';
import '../styles/scss/main-responsive.scss';

function Signature(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setShowModal(!showModal)}>
        click me
      </button>
      <SignaturePadModal
        show={showModal}
        onHide={setShowModal}
        onSubmit={({ signature, initials }) => {
          if (typeof signature === 'string' && typeof initials === 'string') {
            // signature/initials were drawn
            console.log('[DRAW IT DATA]', signature, initials);
          } else {
            // signature/initials were typed
            console.log('[TYPEIN DATA]', signature, initials);
          }
        }}
      />
    </div>
  );
}

export default Signature;
