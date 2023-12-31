/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

// Tipando as Props

interface InputProps {
  name: string,
  type: string,
  value?: string,
  onChange?: any,
  maxLength?: number,
  readonly?: boolean,
  placeholder?: string,
  required?: boolean,
  className?: string
}

// Estilização em Styled-Components

const InputContainer = styled.div`
  position: relative;
  margin: 30px auto;
  width: 250px;
`;

const LabelForInput = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: #808080;
  transition: all 0.3s ease;
  pointer-events: none;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
`;

const InputType = styled.input`
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #808080;
  padding: 5px 0;
  background-color: transparent;
  outline: none;

  &:focus ~ ${LabelForInput} {
    top: -20px;
    font-size: 16px;
    color: #333;
  }

  &:valid ~ ${LabelForInput} {
    top: -20px;
    font-size: 16px;
    color: #333;
  }

  &:focus ~ ${Underline} {
    transform: scaleX(1);
  }

  &:valid ~ ${Underline} {
    transform: scaleX(1); 
  }
`;

const Input = (props: InputProps) => {
  return (
    <InputContainer>
      <InputType 
        type={props.type} 
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength}
        readOnly={props.readonly}
        placeholder={props.placeholder}
        required={props.required}
        className={props.className}
      />
      <LabelForInput>{props.name}</LabelForInput>
      <Underline></Underline>
    </InputContainer>
  );
};

export { Input };