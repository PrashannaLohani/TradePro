import { Input } from "./input";
import { Label } from "./label";

interface InputWithLabelProps {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const InputWithLabel = ({
  id,
  type = "text",
  placeholder,
  label,
  className = "",
  value,
  onChange,
  required = false,
}: InputWithLabelProps) => {
  return (
    <div className='space-y-4'>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </Label>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full  ${className}`}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
