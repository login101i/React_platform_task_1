import { useState } from "react";

import { CustomInput } from "../../components";
import "./FormInput.styles.jsx";

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <CustomInput
      {...inputProps}
      onChange={onChange}
      onBlur={handleFocus}
      focused={focused.toString()}
    />
  );
};
