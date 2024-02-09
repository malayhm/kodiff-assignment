import { useState } from "react";

export default function BaseElement({
  children,
  tag: Element = "div",
  styles,
  ...rest
}) {
  // baseStyles, hoverStyles, focusStyles
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isFocusAvailable = ["input", "textarea"].indexOf(Element) !== -1;

  // Base styles will be applied first
  let combinedStyles = { ...styles.base };

  // Input and textarea will have focus style
  if (isFocused) {
    combinedStyles = { ...combinedStyles, ...styles.focus };
  }

  // other elements will have hover style
  if (isHovered) {
    combinedStyles = { ...combinedStyles, ...styles.hover };
  }

  return (
    <Element
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => {
        isFocusAvailable && setIsFocused(true);
      }}
      onBlur={() => isFocusAvailable && setIsFocused(false)}
      style={combinedStyles}
      {...rest}
    >
      {children}
    </Element>
  );
}
