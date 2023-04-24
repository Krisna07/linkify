import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../../../lib/utils";
const buttonVarients = cva("active:", {
  variants: {
    variant: {
      default:
        "flex  items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-full",
      ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
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
  ...props
}) => {
  return (
    <button
      className={cn(buttonVarients({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-5 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
