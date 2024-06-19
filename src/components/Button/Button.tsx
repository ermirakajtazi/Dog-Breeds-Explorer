import React from "react";

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "large";
  title?: string;
  children?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  className?: string;
  outlined?: boolean;
  testId?: string;
}

export const Button = ({
  onClick,
  size,
  title,
  children,
  type = "submit",
  disabled = false,
  className = "",
  outlined = false,
  testId = "",
}: ButtonProps) => {
  let buttonSizeClass = "";

  if (size === "small") {
    buttonSizeClass = "px-4 py-2 w-full";
  } else if (size === "large") {
    buttonSizeClass = "px-8 py-3";
  } else {
    buttonSizeClass = "px-3 py-2";
  }
  const buttonStyles = outlined
    ? `border border-primary rounded-full hover:bg-slate-800 text-textPrimary ${buttonSizeClass}`
    : `bg-primary text-textPrimary rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${buttonSizeClass}`;
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  return (
    <button
      data-testid={testId}
      disabled={disabled}
      type="submit"
      onClick={onClick}
      className={`focus:ring-2 focus:ring-primary text-sm lg:text-base ${buttonStyles} ${className} ${disabledStyles}`}
    >
      {title || children}
    </button>
  );
};
