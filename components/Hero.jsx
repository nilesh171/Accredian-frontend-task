import React, { useState } from 'react';
import ReferralModal from './ReferralModal';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReferNow = () => {
    setModalOpen(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Refer & Earn</h1>
      <p>Invite your friends and earn rewards!</p>
      <button
        onClick={handleReferNow}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Refer Now
      </button>
      <ReferralModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Hero;