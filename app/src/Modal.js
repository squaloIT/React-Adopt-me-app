import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalDiv = document.getElementById("modal");

const Modal = props => {
  const divRef = useRef(null);

  if (!divRef.current) {
    divRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalDiv.appendChild(divRef.current);

    return () => {
      modalDiv.removeChild(divRef.current);
    };
  }, []);

  return createPortal(<div>{props.children}</div>, modalDiv);
};

export default Modal;
