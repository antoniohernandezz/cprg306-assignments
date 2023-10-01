"use client";

import { useState } from "react";

export default function NewItem() {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    const [itemCreated, setItemCreated] = useState(false);

  const handleSubmit = (item) => {
    item.preventDefault();

    const newItem = {
        item,
        quantity,
        category,
    };
    console.log(newItem);
    alert(`You added ${quantity} ${item} to the ${category} list!`);
    setItemCreated(true);
    setItem("");
    setQuantity(1);
    setCategory("Produce");
};

const handleItemChange = (item) => {
    setItem(item.target.value);
};

const handleQuantityChange = (quantity) => {
    setQuantity(quantity.target.value);
};
//Changes value//
const handleCategoryChange = (category) => {
    setCategory(category.target.value);
};




return(
    <main>
        <h1>New Item</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input
                id="item"
                type="text"
                value={item}
                onChange={handleItemChange}
                required
            />
            <label htmlFor="quantity">Quantity</label>
            <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                required
            />
            <label htmlFor="category">Category</label>
            <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                required
            >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Pantry">Pantry</option>
                <option value="Meat">Meat</option>
                <option value="Frozen">Frozen</option>
            </select>
            <button type="submit">Add Item</button>
        </form>
    </main>
    );
}