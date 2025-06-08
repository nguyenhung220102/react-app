import React from 'react';
import CustomInput from './InputText'; // input height 38, width 100%, radius 5

const validationColors = {
  required: 'var(--field-required-validation)',
  invalid: 'var(--field-invalid-validation)',
  weak: 'var(--field-weak-validation)',
  fair: 'var(--field-fair-validation)',
  good: 'var(--field-good-validation)',
  strong: 'var(--field-strong-validation)',
};

export default function LabelInput({
  label,
  required = false,
  value,
  onChange,
  placeholder,
  validationMsg = '',
  validationLevel = '',
  ...props
}) {
  const validationColor = validationColors[validationLevel] || 'var(--field-required-validation)';

  return (
    <div
      className="d-flex flex-column justify-content-start align-items-start p-0 m-0"
      style={{ width: 343}}
    >
      <label
        className="fw-regular fs-12 line-height-18"
        style={{ color: "var(--label-primary-color)", marginBottom: 4 }}
      >
        {label}
        {required && <span style={{ color: "var(--asterisk-color)" }}>*</span>}
      </label>

      <CustomInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {validationMsg && (
        <div
          style={{
            fontSize: 12,
            color: validationColor,
          }}
        >
          {validationMsg}
        </div>
      )}
    </div>
  );
}