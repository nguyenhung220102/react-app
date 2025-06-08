import React from 'react';
import { Input, Label } from 'reactstrap';

export default function CustomCheckbox({ label, checked, onChange, ...props }) {
  return (
    <Label
      className="d-flex user-select-none w-100"
      style={{ cursor: "pointer", marginBottom: 0, padding: 0}}
    >
      <Input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          width: "18px",
          height: "18px",
          marginTop: "2px",
          marginRight: "10px",
          accentColor: "var(--button-purple)",
        }}
        {...props}
      />
      <div style={{ fontSize: "14px", lineHeight: 1.5 }}>{label}</div>
    </Label>
  );
}