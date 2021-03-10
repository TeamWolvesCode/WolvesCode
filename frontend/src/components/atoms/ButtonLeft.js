import React, { useState } from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";

//assets
import arrowLeft from "../../assets/caret-left-fill.svg";

const ButtonLeft = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <>
      <button
        type="button"
        className="left btn btn-primary btn-sm"
        // onClick={this.handleLeftClick}
        ref={setReferenceElement}
        aria-hidden="true"
      >
        <img className="arrowImg" src={arrowLeft} alt="" aria-hidden="true" />
      </button>
      {ReactDOM.createPortal(
        <div
          ref={setPopperElement}
          style={styles.popper}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...attributes.popper}
        >
          Popper
        </div>,
        document.querySelector("#destination")
      )}
    </>
  );
};

export default ButtonLeft;
