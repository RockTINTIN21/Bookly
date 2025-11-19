"use client";

import { ButtonHTMLAttributes, FC } from "react";
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  typeStyle?: "primary" | "secondary";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  loading,
  typeStyle = "primary",
  disabled,
  className,
  ...props
}) => {

  return (
    <button
      className={`${typeStyle === 'primary' ? styles.primary : styles.secondary}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
