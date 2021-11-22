import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./button.module.css";

function Button({ style, id, onClick, title, icon, ahref }) {
  const [opacity, setOpacity] = useState(1);

  function onMouseEnter() {
    setOpacity(0.75);
  }

  function onMouseLeave() {
    setOpacity(1);
  }

  let styleOpacity = {
    ...style,
    opacity: opacity,
  };

  return (
    <button
      id={id}
      className={styles.button}
      onClick={onClick}
      style={styleOpacity}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title={title}
    >
      <FontAwesomeIcon icon={icon} /> {ahref}
    </button>
  );
}

export default Button;
