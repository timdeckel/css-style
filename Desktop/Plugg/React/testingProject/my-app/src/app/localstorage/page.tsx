'use client'

import { useEffect, useState } from 'react';
import ToDoList from '../components/toDoList/page';

const localstorage = () => {
  return (
    <main className="h-[90%] w-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col w-9/12 h-4/6 bg-gray-500 p-8 rounded">
          
          <ToDoList></ToDoList>
        </div>
    </main>
  );
}

export default localstorage;