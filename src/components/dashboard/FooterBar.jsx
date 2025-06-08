import React from 'react';
import CopyRight from './CopyRight';

export default function FooterBar() {
  return (
    <footer
      style={{
        height: '62px',
        width: '100%',
        backgroundColor: 'var(--dashboard-background-color)',
        padding: '0 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <CopyRight/>
    </footer>
  );
}