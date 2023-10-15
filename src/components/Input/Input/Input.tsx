import React from "react";
import "./Input.scss";
interface inputs {
  label: string;
  variant?: "primary";

  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

const defaultProps: Partial<inputs> = {
  variant: "primary",
  size: "default",
};
const Input = React.forwardRef<HTMLInputElement, inputs>(
  ({ label, variant, className, size, ...props }, ref) => {
    const inputVariants = {
      primary: "border rounded text-black transition-all",

      size: {
        default: "h-11 w-full py-2.5 px-4",
        sm: "h-8",
        lg: "h-14",
        icon: "h-9 w-9",
      },
    };

    const variantClass: string = variant
      ? inputVariants[variant]
      : inputVariants.primary;

    const sizeClass: string = size
      ? inputVariants.size[size]
      : inputVariants.size.default;

    return (
      <>
        <div>
          <label>{label}</label>
          <input
            type="text"
            ref={ref}
            {...props}
            className={`${variantClass} ${className} ${sizeClass}`}
          />
        </div>
      </>
    );
  }
);
Input.defaultProps = defaultProps;
Input.displayName = "Input";
export default Input;
