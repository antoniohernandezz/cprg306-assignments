import React from 'react';


export default function item({name , quantity , category , onSelect}){

    return(
        <main className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2" onClick = {onSelect}>
             
                <p>Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
                
        </main>
    );

}