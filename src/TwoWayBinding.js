import React, { useState } from 'react';
import './TwoWayBinding.css';

const TwoWayBinding = () => {
  const [message, setMessage] = useState('Hello');

  return (
    <div className="two-way-binding">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{message}</p>
    </div>
  );
};

export default TwoWayBinding;
