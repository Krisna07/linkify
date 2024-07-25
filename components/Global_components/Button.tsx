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
        "bg-dark rounded transition-all text-silver w-fit h-fit  relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-bs ",
      accent:
        "bg-accent rounded transition-all text-black w-fit h-fit  relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-bs",
      primary:
        "bg-primary rounded transition-all text-white w-fit h-fit  relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-bs",
      submit:
        "bg-dark rounded transition-all text-sky-100 w-fit h-fit  relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-bs",
    },
    // border: {
    //   default: "border-rounded",
    //   round: "rounded-full",
    // },
    size: {
      default: "py-1 px-4  ",
      sm: "laptop:py-1 py-2 px-4 laptop:text-[12px] ",
      lg: "py-2 px-8 text-lg",
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      border: "default",
    },
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
  icon?: Boolean;
  className?: string;
  rightIcon?: any;

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
    <span className="flex w-fit ">
      <FaArrowRight
        className={`transition-all ${
          hover ? "relative opacity-1 " : "absolute opacity-0 "
        }`}
      />{" "}
      <FaChevronRight
        className={` transition-all ${
          hover ? "absolute opacity-0 " : "relative opacity-1 "
        }`}
      />
    </span>
  ) : null;

  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      {...props}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`flex items-center justify-center gap-2 relative z-[99] `}
      >
        <span className="block w-fit ">{children}</span>
        {rightIcon ? rightIcon : iconCheck}
      </div>
    </button>
  );
};

export default Button;
