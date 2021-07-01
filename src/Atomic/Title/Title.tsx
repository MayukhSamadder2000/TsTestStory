import React from "react";
import "./title.css";

interface TitleProps {
  size?: "large" | "medium" | "small";
  color?: "colLight" | "colDark";
  text?: string;
}

export const Title = ({
  size = "small",
  color = "colDark",
  text = "My Title",
  ...props
}: TitleProps) => {
  return (
    <div className={["title", `${size}`, `${color}`].join(" ")} {...props}>
      {text}
    </div>
  );
};
