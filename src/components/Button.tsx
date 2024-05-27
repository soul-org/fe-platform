import React, { FC } from "react";

interface ButtonProps {
  className?: string;
  onclick: () => void;
  children: React.ReactNode
}
const Button: FC<ButtonProps> = ({className, onclick, children}) => {
  return (
    <button className={`px-2 py-1, ${className}`} onClick={onclick}>{children}</button>
  )
}

export default Button;
