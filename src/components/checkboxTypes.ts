export interface CheckboxProps {
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  label?: string;
  onChange?: () => void;
}
