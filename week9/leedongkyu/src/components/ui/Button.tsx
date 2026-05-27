import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const variantStyles = {
  primary: "bg-[#3182f6] text-white",
  category:
    "flex h-20 w-full flex-col items-center justify-center gap-1 overflow-hidden bg-neutral-50 text-gray-700",
  ghostIcon: "flex size-7 items-center justify-center bg-transparent text-gray-900",
  ghost: "flex items-center justify-center bg-transparent text-gray-900",
} as const;

const sizeStyles = {
  xs: "h-8 w-12 px-0 py-0 text-xs",
  sm: "px-[15px] py-[8px] text-[13px]",
  lg: "px-[16px] py-[10px] text-[15px]",
  xl: "px-[113px] pt-[18px] pb-[19px] text-[16px]",
} as const;

type ButtonSize = keyof typeof sizeStyles;
type ButtonVariant = keyof typeof variantStyles;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "sm",
  disabled,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "rounded-[8px] border-0 font-medium",
        disabled
          ? "cursor-not-allowed bg-[#D0DFFB] text-white"
          : cn("cursor-pointer", variantStyles[variant]),
        variant === "category" || variant === "ghostIcon" ? "" : sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
