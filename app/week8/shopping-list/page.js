"use client"

import Sorting from './item-list.js';
import NewItem from './new-item';
import React from 'react';
import itemsData from './items.json';
import { useState } from 'react';
import MealIdeas from './meal-ideas.js';
import { useUserAuth } from "../_utils/auth-context";



export default function Page() {


const [items, setItems] = useState(itemsData);

const [newItem, setItem] = useState(false);

const [selectedItem, setSelectedItem] = useState("");

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

if (!user){
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Login</h1>
              <button
                onClick={gitHubSignIn}
                className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded"
              >
                Sign In with GitHub
              </button>
            </div>
          </div>
        </main>
      );
}

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
