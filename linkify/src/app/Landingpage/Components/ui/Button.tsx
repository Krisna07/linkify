"use client";
import { ButtonHTMLAttributes, FC, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from ".././../../../lib/utils";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default:
        "flex relative  items-center gap-2 bg-slate-900 text-sky-100 w-fit  px-4 py-1 button rounded-full overflow-hidden",
      ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      primary:
        "flex relative bg-gray-500 gap-2 rounded-full text-white overflow-hidden  w-fit px-2  items-center button rounded-full overflow-hidden ",
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

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  icon: Boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  icon,
  ...props
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      {...props}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div
        className={`flex items-center justify-center gap-2 relative z-[99] `}>
        {children}
        {icon ? (
          <span>{hover ? <FaArrowRight /> : <FaChevronRight />}</span>
        ) : null}
      </div>
      <div
        style={{ width: `${hover ? "100%" : "0%"}` }}
        className={`h-full 
          left-0  absolute bg-red-500 transitio-all `}></div>

      {/* {enterDirection && (
        <div
          className={`btmmm
          ${backgroundClassName}
        absolute ${
          enterDirection === "left" || enterDirection === "right"
            ? ""
            : "w-[100%]"
        } ${
            enterDirection === "top" || enterDirection === "bottom"
              ? ""
              : "h-[100%]"
          } bg-green-500 transition-all
      `}
        />
      )} */}
    </button>
  );
};

export default Button;
