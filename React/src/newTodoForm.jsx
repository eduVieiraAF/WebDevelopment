/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export function NewTodoForm( {onSubmit}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return

        onSubmit(newItem)
    
        setNewItem("");
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item" className="itemLabel">New item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} // updates state → "" to new item/value
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}