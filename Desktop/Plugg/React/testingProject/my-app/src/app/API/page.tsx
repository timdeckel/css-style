'use client'
import { useEffect, useState } from 'react';

const API = () => {
  
  const [joke, setJoke] = useState<string>("");
  
  async function getData() {
    const url = "https://api.chucknorris.io/jokes/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      setJoke(json.value)
    } catch (e) {
      console.error(e);
    }
  }


  return (
    <div className="h-[90vh] w-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center bg-gray-500 md:w-4/6 w-5/6 p-8 rounded gap-8">
         <p>{joke}</p>
          <button
          onClick={getData}
          className='bg-gray-200 p-2'
          >
            click for a joke.
          </button>
        </div>
    </div>
  );
}


export default API;
