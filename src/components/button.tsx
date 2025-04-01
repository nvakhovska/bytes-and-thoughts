import { ReactNode } from "react";
import "../assets/styles/button.css";

export function Button({
  children,
  asChild = false,
  variant = "outline",
}: {
  children: ReactNode;
  asChild?: boolean;
  variant?: string;
}) {
  const classes = `btn ${variant === "outline" ? "btn-outline" : ""}`;

  return asChild ? children : <button className={classes}>{children}</button>;
}
