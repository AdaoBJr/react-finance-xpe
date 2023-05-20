import { StandardTextFieldProps } from '@mui/material';

export interface DropdownItems {
  label: string | number;
  value: string | number;
}

export interface DropdownProps extends Omit<StandardTextFieldProps, 'variant'> {
  name: string;
  variant?: 'filled' | 'standard' | 'outlined';
  options: DropdownItems[];
}
