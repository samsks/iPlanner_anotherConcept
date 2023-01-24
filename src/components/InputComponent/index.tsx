import { Text } from "../../styles/typography";
import { StyledFormInput } from "./style";

interface iInputFormProps {
  register: () => void | object;
  label?: string;
  placeholder?: string | undefined;
  helperText?: any;
  type?: string;
  value?: string | undefined;
  disabled?: boolean | undefined;
}

const InputComponent = ({ register, label, placeholder, helperText, type, value, disabled }: iInputFormProps) => {
  return (
    <StyledFormInput>
      <Text tag="label">
        {label}
        <input
          {...register()}
          type={type}
          placeholder={placeholder && placeholder}
          value={value ? value : undefined}
          disabled={disabled && disabled}
        />
      </Text>
      <Text tag="span">{helperText}</Text>
    </StyledFormInput>
  );
};

export default InputComponent;
