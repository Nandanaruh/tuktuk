export default function BackgroundSvg() {
  return (
    <div
      className="w-full h-[80px] -mt-15 relative z-50 transform -scale-y-100"
      style={{
        backgroundImage: "url('/brush.svg')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "auto 100%",
      }}
    />
  );
}
