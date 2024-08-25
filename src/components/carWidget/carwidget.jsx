import React from "react";

function CarWidget({ itemCount }) {
  return (
    <div className="car-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CarWidget;