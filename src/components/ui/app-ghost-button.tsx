import { Button } from "./button";
import { cn } from "../../lib/utils";

interface AppGhostButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AppGhostButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  size = "md",
}: AppGhostButtonProps) => {
  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant='outline'
      className={cn(
        "w-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-transparent border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Button>
  );
};
