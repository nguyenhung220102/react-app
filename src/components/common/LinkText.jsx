import React from 'react';

export default function LinkText({ href, children, ...props }) {
  return (
    <a
      href={href}
      className="text-decoration-none mb-0"
      style={{
        color: 'var(--primary-color-purple)',
        fontSize: 'var(--font-size-medium)',
        lineHeight: '21px',
      }}
      {...props}
    >
      {children}
    </a>
  );
}