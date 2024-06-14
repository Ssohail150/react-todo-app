// src/components/checkbox/checkbox.jsx
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './checkbox.scss';

export const CheckboxComponent = ({
  onClick, checked, onDelete, label, onKeyUp,
}) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked={checked}
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <Checkbox checked={checked} onChange={onClick} />
      <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
    </div>
    <IconButton aria-label="delete" onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  </div>
);
