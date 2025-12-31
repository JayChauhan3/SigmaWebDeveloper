"use client"
import { useEffect,useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0)
  return (
   <div>
    i am a component  {count}
     <button className="bg-red-300 rounded p-1 ml-3 my-2" onClick={()=>setCount(count+1)} >click me</button>
   </div>
  );
}
