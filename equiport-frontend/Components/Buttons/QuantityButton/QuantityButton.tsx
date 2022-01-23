import React, { useState } from "react";

export interface IQuantityButtonProps {}

export default function QuantityButton(props: IQuantityButtonProps) {
  const [quantity, setQuantity] = useState(0);
  const setManualQuantity = (e: any) => {
    const manualQuantityInput = e.target.value;
    setQuantity(manualQuantityInput);
  };

  return (
    <div className="quantity-button">
      <button className="quantity-button__remove" onClick={() => {}}>
        -
      </button>
      <input
        className="quantity-button__input"
        value={quantity}
        onChange={e => setManualQuantity(e)}
      />
      <button className="quantity-button__add" onClick={() => {}}>
        +
      </button>
    </div>
  );
}
