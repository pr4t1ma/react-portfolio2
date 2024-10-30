import { useState } from "react";

const Shoppinglist = () => {
  const [newItem, setNewItem] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [items, setItems] = useState([
    { name: "Milk" },
    { name: "Milk" },
    { name: "Milk" },
  ]);
  const addItem = () => {
    if(!newItem){
        alert("add new item here")
        return
    }
    }
  };

  return (
    <div className="bg-pink-100 my-10 p-10">
      <div>
        <h1 className="my-3">Shopping list</h1>
        <input
          className="border-sky-200 border-none p-3 rounded-md my-2"
          type="text"
          placeholder="type here items"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="bg-pink-300 px-6 py-3 rounded-lg m-2">Search</button>
      </div>
      <ul>
        {items.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Shoppinglist;
