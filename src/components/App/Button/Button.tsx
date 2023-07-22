import { useState } from "react";
import { IconType } from "react-icons/lib";

import styles from "./Button.module.css";

type ButtonPropsType = {
  href: string;
  text: string;
  ariaLabel: string;
  Icon: IconType;
  iconProps: { color: string; size: string };
};

function Button({ href, text, ariaLabel, Icon, iconProps }: ButtonPropsType) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${styles.button} ${isHovered ? styles.hovered : ""}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>
        <Icon {...iconProps} />
      </span>
      <span>{text}</span>
    </a>
  );
}

export default Button;
