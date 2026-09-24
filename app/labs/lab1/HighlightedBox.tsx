import type { ReactNode } from "react";
export default function HighlightedBox({
  children,
  backgroundColor,
  color,
}: {
  children: ReactNode;
  backgroundColor: string;
  color: string;
}) {
  return (
    <div
      id="wd-highlighted-box"
      style={{ backgroundColor, color, padding: 8, margin: "8px 0" }}
    >
      {children}
    </div>
  );
}
