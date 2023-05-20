import React from 'react';
import { MenuItem, TextField, Typography } from '@mui/material';

import { SxDropdown } from './styles';
import { DropdownProps } from 'types/shared';

export const Dropdown: React.FC<DropdownProps> = ({ name, options, ...rest }) => (
  <TextField name={name} {...rest} sx={SxDropdown} select>
    {options?.map((item) => (
      <MenuItem key={item.value} value={item.value} aria-label={item?.label}>
        <Typography>{item.label}</Typography>
      </MenuItem>
    ))}
  </TextField>
);
