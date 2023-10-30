"use client"

import Sorting from './item-list.js';
import NewItem from './new-item';
import React from 'react';
import itemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';



export default function Page() {


const [items, setItems] = useState(itemsData);

const [newItem, setItem] = useState(false);

const [selectedItem, setSelectedItem] = useState("");



const handleAddItem = (item) => {
    setItems([...items, item]);
    };


function handleItemSelect(item) {
    const cleanedItem = item.name.toString().split(",")[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItem(cleanedItem);
}




    





    
    
    
return(

    <main>
       <div> 
        <NewItem onAddItem={handleAddItem} />
        <Sorting items={items} onItemSelect={handleItemSelect} />
        <div>
            {selectedItem && <MealIdeas ingredients={selectedItem} />}
        </div>
       </div>
    </main>
    )

}
