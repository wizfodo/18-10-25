'use client'
import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";


function Counter(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount(count+1)} >Increase</button>
      <button type="button" onClick={() => setCount(count-1)} >Decrease</button>
      <button type="button" onClick={() => setCount(count == 0)} >Reset</button>
    </div>
  );
}

function Footer(){
  return (
    <>
    <p>This is Footer</p>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <Counter initCount={10}/>
      <Counter initCount={-10}/>
      <Footer />
    </div>
  );
}

