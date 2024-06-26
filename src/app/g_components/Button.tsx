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
        "bg-[#000000] text-sky-100 w-fit h-fit rounded-full relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-[0_0_2px_0_gray]",
      accent:
        "bg-[#DD5746] text-black w-fit h-fit rounded relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-[0_0_2px_0_gray]",
      primary:
        "bg-[#4792AE] text-black w-fit h-fit rounded-lg bg-[#FFC370] relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-[0_0_2px_0_gray]",
      submit:
        "bg-[#4792AE] text-sky-100 w-fit h-fit rounded-full relative flex items-center gap-2 overflow-hidden font-[500] hover:shadow-[0_0_2px_0_gray]",
    },

    size: {
      default: "py-1 px-4 text-[14px] ",
      sm: "laptop:py-1 py-2 px-4 laptop:text-[12px] ",
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
    <span>{hover ? <FaArrowRight /> : <FaChevronRight />}</span>
  ) : null;

  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      {...props}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`flex items-center justify-center gap-2 relative z-[99] hover:text-gray-800`}
      >
        <span className="block w-fit ">{children}</span>
        {rightIcon ? rightIcon : iconCheck}
      </div>
      <div
        style={{ width: `${hover ? "100%" : "0%"}` }}
        className={`h-full 
          left-0 top-0 absolute bg-blue-300/75  transition-all `}
      ></div>
    </button>
  );
};

export default Button;
