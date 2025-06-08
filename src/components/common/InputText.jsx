import React from 'react';
import { Input } from 'reactstrap';

export default function CustomInput({ placeholder, value, onChange, ...props }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        height: '38px',
        borderRadius: '5px',
        lineHeight: '24px',
        padding: '8px 15px',
        fontWeight: 400,
        fontSize: '12px',
      }}
      {...props}
    />
  );
}