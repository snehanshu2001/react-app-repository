import React from 'react';
import "./App.css";
function SelectBox({ label, options, value, onChange }) {
  return (
    <div className="dropdown-container">
      <label className="label">{label}</label>
      <div className="select-container">
        <select
          onChange={(e) => onChange(e.target.value)}
          value={value || ''}
          className="custom-select"
          style={{ width: '50%' }}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectBox;
