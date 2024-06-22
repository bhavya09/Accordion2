import { useState } from "react";
const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  console.log("isOpen child", isOpen);

  return (
    <div className="accordionHeader">
      <div
        className="accordionTitle"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? "↓" : "↑"}</span>
      </div>
      {isOpen && <div className="accordionBody">{body}</div>}
    </div>
  );
};

export default AccordionItem;
