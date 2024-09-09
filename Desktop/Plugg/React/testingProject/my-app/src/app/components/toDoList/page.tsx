'use client'
import { useEffect, useState } from 'react';
import React from 'react'

const ToDoList = () => {

    /*
    const [item, setNewItem] = useState<string>("");
    const [savedItem, setNewSavedItem] = useState<string>("");
    */
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>("");




    useEffect(() => {
        const storedItems = localStorage.getItem("items");
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

   const addItem = () => {
    if (newItem) {
        const newArr = items
        newArr.push(newItem)
        setItems(newArr);
        localStorage.setItem("items", JSON.stringify(items))
        setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(items));
  };
  

  return (
    <>
        <div className='flex-col h-full w-full gap-8'>
            <div className="flex bg-red-400 w-full h-1/6">
                <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter a new item"
                className="border p-2 flex-grow mr-2 rounded"
                />
                <button
                onClick={addItem}
                className="bg-blue-500 text-white p-2 rounded"
                >
                Add Item
                </button>
            </div>
            <div className="flex bg-blue-400 w-full h-5/6">
            <ul className="list-disc pl-5 w-full">
            {items.map((items, index) => (
                <li
                    key={index}
                    className="flex justify-between items-center mb-2 p-2 border-2"
                >
                    {items}
                    <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white p-1 rounded"
                    >
                    Remove
                    </button>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </>
  )
}


export default ToDoList;