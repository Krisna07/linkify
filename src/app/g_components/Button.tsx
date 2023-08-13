"use client";
import { ButtonHTMLAttributes, FC, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { IconType } from "react-icons/lib";

const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default:
        "bg-slate-900 text-sky-100 w-fit h-fit rounded-full relative overflow-hidden font-[500]",
      ghost:
        "bg-transparent rounded-md hover:text-slate-900 overflow-hidden w-fit h-fit relative font-[500]",
      primary:
        "rounded-md text-white  overflow-hidden w-fit h-fit relative font-[500]",
    },

    size: {
      default: "py-1 px-4 ",
      sm: "py-1 px-4 text-sm",
      lg: "py-2 px-8 text-lg",
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
  icon?: Boolean;
  className?: string;
  rightIcon?: IconType;
  leftIcon?: IconType;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  icon,
  rightIcon,
  leftIcon,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const iconCheck: any = icon ? (
    <span>{hover ? <FaArrowRight /> : <FaChevronRight />}</span>
  ) : null;

  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      {...props}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div
        className={`flex items-center justify-center gap-2 relative z-[99] hover:text-black`}>
        {children}
        {rightIcon ? rightIcon : iconCheck}
      </div>
      <div
        style={{ width: `${hover ? "100%" : "0%"}` }}
        className={`h-full 
          left-0 top-0 absolute bg-sky-500 transition-all `}></div>
    </button>
  );
};

export default Button;
