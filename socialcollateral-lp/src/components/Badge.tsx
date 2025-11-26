import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "border-2 border-border bg-transparent text-foreground": variant === "outline",
          "bg-secondary text-secondary-foreground": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
