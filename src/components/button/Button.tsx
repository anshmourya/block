import React from "react";

interface ButtonProps {
  children: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

const defaultProps: Partial<ButtonProps> = {
  variant: "primary",
  size: "default",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, className, size, ...props }, ref) => {
    const variants = {
      primary:
        "text-black bg-[#fec30e] border rounded border-transparent text-center hover:bg-transparent hover:border-white hover:text-white transition-all text-sm font-medium",
      destructive:
        "bg-transparent border-2 border-white text-white hover:bg-[#333] hover:border-transparent transition-all",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-transparent border-2 border-[#ccc] text-[#ccc] hover:bg-[#7c80c1] hover:text-white hover:border-[#7c80c1]",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-blue-600 font-bold transition-all text-sm",

      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    };

    const variantClass: string = variant ? variants[variant] : variants.primary;

    const sizeClass: string = size
      ? variants.size[size]
      : variants.size.default;

    return (
      <button
        ref={ref}
        {...props}
        className={`${variantClass} ${className} ${sizeClass}`}
      >
        {children}
      </button>
    );
  }
);

Button.defaultProps = defaultProps;
export default Button;
