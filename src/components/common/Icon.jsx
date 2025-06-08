import React from 'react';

export default function IconButton({ href, image, backgroundColor}) {
  return (
    <a
      href={href}
      className="d-flex justify-content-center align-items-center"
      style={{
        width: '30px',
        height: '30px',
        backgroundColor,
        borderRadius: '6px',
        textDecoration: 'none',
      }}
    >
      <img
        src={image}
        alt="icon"
        style={{ width: '14px', height: '14px', display: 'block' }}
      />
    </a>
  );
}