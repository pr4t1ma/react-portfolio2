import { useState } from "react";

const AccordionItem = ({ name, text }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="">
      <h1 className="my-10 p-5 bg-pink-200">
        <button onClick={() => setIsOpen(!isOpen)}>+</button>
        {name}
      </h1>
      {isOpen && <div className="bg-white p-4">{text}</div>}
    </div>
  );
};
export default AccordionItem;
