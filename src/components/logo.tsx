export function Logo() {
  return (
    <div className="flex items-center gap-2" title="Pacheco Team">
      <svg
        width="150"
        height="40"
        viewBox="0 0 150 40"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <rect width="150" height="40" fill="transparent" />
        <text
          x="10"
          y="28"
          fontFamily="Montserrat, sans-serif"
          fontSize="20"
          fontWeight="bold"
          fill="hsl(var(--primary))"
        >
          PACHECO
        </text>
        <text
          x="100"
          y="28"
          fontFamily="Montserrat, sans-serif"
          fontSize="20"
          fontWeight="bold"
          fill="hsl(var(--secondary))"
        >
          TEAM
        </text>
      </svg>
    </div>
  );
}
