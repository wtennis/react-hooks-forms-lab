import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, onInputChange}) {
  return (
    <form onSubmit = {onItemFormSubmit}className="NewItem">
      <label>
        Name:
        <input onChange= {onInputChange}type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
