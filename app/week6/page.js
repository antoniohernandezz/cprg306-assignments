"use client"

import Sorting from './item-list.js';
import NewItem from './new-item';
import React from 'react';
import itemsData from './items.json';
import { useState } from 'react';


export default function Page() {


const [items, setItems] = useState(itemsData);

const [newItem, setItem] = useState(false);

const handleAddItem = (item) => {
    setItems([...items, item]);
    };







    





    
    
    
return(
        <main>
            <h1>Grocery List</h1>
            <NewItem onAddItem={handleAddItem} />
            <Sorting items={items}/>
        </main>
    )

}

