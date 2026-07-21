export default function MenuOverlay({
  isMenuOpen,
  setIsMenuOpen,
  isMobileAsideOpen,
  setIsMobileAsideOpen,
}) {
  return (
    <div
      onClick={() => {
        if (setIsMenuOpen) setIsMenuOpen(false);
        if (setIsMobileAsideOpen) setIsMobileAsideOpen(false);
      }}
      className={`fixed inset-0 z-40 bg-black transition-opacity duration-300
      ${isMenuOpen || isMobileAsideOpen ? "opacity-80 visible" : "opacity-0 invisible"}`}
    />
  );
}
