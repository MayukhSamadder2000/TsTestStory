import React, { useState } from "react";
import "./button.css";

interface BtnProps {
  bgColor?: "red" | "blue" | "gradient" | "clicked";
  text?: string;
  size?: "small" | "medium" | "large";
}

export const Button = ({
  bgColor = "red",
  text = "primary",
  size = "small",
  ...props
}: BtnProps) => {
  const [color, setColor] = useState(bgColor);
  const changeCol = () => {
    setColor("clicked");
  };

  return (
    <div
      className={["button", `${size}`, `${color}`].join(" ")}
      {...props}
      onClick={changeCol}
    >
      {text}
    </div>
  );
};
