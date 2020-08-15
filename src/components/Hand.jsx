import React from 'react';

function Hand({ classN, ratio }) {
  return <div className={classN} style={{ '--rotate': ratio }}></div>;
}

export default Hand;
