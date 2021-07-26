import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterSearch, setFilterSearch] = useState("");
  const [formData, setFormData] = useState([])

  function handleInputChange() {
    console.log('handleInputChange evoked')
  }
  
  function handleItemFormSubmit(e) {
    e.preventDefault();
    const formData = {
      StuffKey: 'put Stuff here'
    }
    console.log(formData)
  }

  function handleSetFilterSearch(e) {
    setFilterSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if ((filterSearch === "") && (selectedCategory === "All")) return true;
        else if (item.category === selectedCategory) {
          return true
      } else if (item.category === filterSearch) {
        return true
      }

   
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit = {handleItemFormSubmit}
        onInputChange = {handleInputChange}/>
      <Filter 
          onCategoryChange={handleCategoryChange} 
          filterSearch = {filterSearch} 
          onSearchChange = {handleSetFilterSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
