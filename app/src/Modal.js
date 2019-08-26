import React, { useEffect, useRef, ReactChild } from "react";
import { createPortal } from "react-dom";

const Modal = props => {
  const divRef = useRef(null);

  if (!divRef.current) {
    divRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalDiv = document.getElementById("modal");
    modalDiv.appendChild(divRef.current);

    return () => {
      modalDiv.removeChild(divRef.current);
    };
  }, []);

  return createPortal(<div>{props.children}</div>, divRef.current);
};

export default Modal;
