import React from "react";
import "./form.css";
import { Input } from "../../Atomic/Input/Input";
import { Button } from "../../Atomic/Button/Button";
import { Title } from "../../Atomic/Title/Title";

interface FormProps {
  formBg: "light" | "dark";
}

export const Form = ({ formBg = "light", ...props }: FormProps) => {
  return (
    <div className={`form ${formBg}`}>
      {formBg == "dark" ? (
        <Title size='large' color='colLight' />
      ) : (
        <Title size='large' color='colDark' />
      )}

      <Input size='medium' />
      <Button />
    </div>
  );
};
