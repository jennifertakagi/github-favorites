import React from 'react';

import loadingIcon from '../../assets/icons/spinner.gif';


function Spinner({ show }) {
  return (
    <div style={{ display: show ? 'block' : 'none', margin: '20px auto 0', textAlign: 'center' }} >
      <img src={loadingIcon} alt="Loading" />
    </div>
  );
}

export default Spinner;
