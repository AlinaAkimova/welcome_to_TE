import { useState } from "react";

export const MouseEnterActivator = ({ mouseEnterCallback, children, className = "" }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallback();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={`${className} ${isActive ? "active" : ""}`}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallback, imgSrc, imgAlt }) => (
  <MouseEnterActivator mouseEnterCallback={mouseEnterCallback}>
    <img src={imgSrc} alt={imgAlt} />
  </MouseEnterActivator>
);

export const Block2 = ({ mouseEnterCallback, content }) => (
  <MouseEnterActivator mouseEnterCallback={mouseEnterCallback}>
    <p>{content}</p>
  </MouseEnterActivator>
);

export const Block3 = ({ mouseEnterCallback, userData }) => (
  <MouseEnterActivator mouseEnterCallback={mouseEnterCallback}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </MouseEnterActivator>
);
