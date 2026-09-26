export default function HighlightedParagraph({
  text = "This paragraph is highlighted using component props.",
  backgroundColor = "lightyellow",
  color = "black",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
}: {
  text?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
}) {
  return (
    <p
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
      {text}
    </p>
  );
}
