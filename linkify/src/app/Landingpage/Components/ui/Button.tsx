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

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  icon,
  ...props
}) => {
  const [enterDirection, setEnterDirection] = useState<string | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const direction = calculateEnterDirection(event);
    setEnterDirection(direction);
  };

  const handleMouseLeave = () => {
    setEnterDirection(null);
  };

  const calculateEnterDirection = (
    event: React.MouseEvent<HTMLButtonElement>
  ): string | null => {
    const rect = event.currentTarget.getBoundingClientRect();
    const { left, top, width, height } = rect;

    const { clientX, clientY } = event;

    const x = clientX - left;
    const y = clientY - top;

    if (x < 0 || x > width || y < 0 || y > height) {
      return null; // Mouse is outside the button boundaries
    }

    const centerX = width / 2;
    const centerY = height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        return "right";
      } else {
        return "left";
      }
    } else {
      if (deltaY > 0) {
        return "bottom";
      } else {
        return "top";
      }
    }
  };

  const getBackgroundClassName = (direction: string | null): string => {
    switch (direction) {
      case "left":
        return " w-[100%] left-0";
      case "right":
        return " right-0 w-[100%]";
      case "top":
        return " top-0 h-[100%] left-0";
      case "bottom":
        return " bottom-0 h-[100%] left-0";
      default:
        return "";
    }
  };

  const backgroundClassName = getBackgroundClassName(enterDirection);
  console.log(enterDirection);
  enterDirection === "left" || enterDirection === "right"
    ? console.log("w-0 h-[100%]")
    : console.log("w-[100%] h-[0%]");

  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      disabled={isLoading}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center gap-2 relative z-[99]">
        {children}
        {icon ? <FaChevronRight /> : null}
      </div>
      {enterDirection && (
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
      )}
    </button>
  );
};

export default Button;
