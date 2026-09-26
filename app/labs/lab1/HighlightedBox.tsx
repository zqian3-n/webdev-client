import type { ReactNode } from "react";
export default function HighlightedBox({
  children,
  backgroundColor = "lightyellow",
  color = "black",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
}: {
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
}) {
  return (
    <div
      style={{
        backgroundColor,
        color,
        borderColor,
        borderWidth,
        borderRadius,
        borderStyle: "solid",
        padding: "0.75rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}
