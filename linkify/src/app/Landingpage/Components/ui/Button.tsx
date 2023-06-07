"use client";
import { ButtonHTMLAttributes, FC, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from ".././../../../lib/utils";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default:
        "flex relative  items-center gap-2 bg-slate-900 text-sky-100  px-4 py-2 button rounded-full overflow-hidden",
      ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      primary: "bg-gray-500 gap-2 px-4 py-2 rounded-full text-white",
    },

    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-2",
      lg: "h-11 px-8",
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
});

export interface btnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  isLoading?: boolean;
}
const Button = ({
  className,
  children,
  variant,
  isLoading,
  size,
  icon,

  ...props
}) => {
  const [hover, setHover] = useState(true);

  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      disabled={isLoading}
      {...props}
      onMouseOver={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => setHover(!hover)}
    >
      {/* {isLoading ? <Loader2 className="mr-2 h-4 w-5 animate-spin" /> : null} */}
      <div className="flex items-center justify-center gap-2 relative z-[99]">
        {" "}
        {children}
        {icon ? !hover ? <FaArrowRight /> : <FaChevronRight /> : ""}
      </div>
    </button>
  );
};

export default Button;
