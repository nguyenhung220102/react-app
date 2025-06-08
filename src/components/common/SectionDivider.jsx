import React from 'react';

export default function SectionDivider({ text }) {
  return (
    <div className="d-flex align-items-center w-100" style={{ height: '23px' }}>
      <div className="flex-grow-1 border-top" style={{ borderColor: 'var(--section-divider-color)' }}></div>
      <span
        className="mx-3"
        style={{
          whiteSpace: 'nowrap',
          fontSize: '14px',
          lineHeight: '21px',
        }}
      >
        {text}
      </span>
      <div className="flex-grow-1 border-top" style={{ borderColor: '#dee2e6' }}></div>
    </div>
  );
}