"use client";

import Item from "./item.js";
import React from "react";
import { useState } from "react";
import itemsData from "./items.json";
import { useEffect } from "react";

export default function Sorting() {
  const [sortBy, setSortBy] = useState("name");

  if (sortBy === "name") {
    console.log("sort by name");
    itemsData.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "category") {
    console.log("sort by category");
    itemsData.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Shopping List</h1>
      <div className="flex items-center justify-between w-full">
        <button
          className="border border-sky-500 bg-sky-800 w-1/2 max-w-xs m-4 p-2"
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className="border border-sky-500 bg-sky-800 w-1/2 max-w-xs m-4 p-2"
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <div className="flex flex-col items-center justify-between w-full">
        {itemsData.map((item) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            key={item.id}
          />
        ))}
      </div>
    </main>
  );
}
