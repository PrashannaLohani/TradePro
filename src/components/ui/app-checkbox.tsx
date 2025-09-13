import { Checkbox } from "./checkbox";
import { Label } from "./label";

interface AppCheckboxProps {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export const AppCheckbox = ({
  id,
  label,
  checked,
  onChange,
  className = "",
  disabled = false,
  required = false,
}: AppCheckboxProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
        required={required}
      />
      {label && (
        <Label
          htmlFor={id}
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </Label>
      )}
    </div>
  );
};
