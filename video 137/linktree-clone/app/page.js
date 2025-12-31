"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")

  
  const createTree = () => { 
    
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#264F1A] min-h-[100vh] grid grid-cols-2 gap-6">
        <div className="flex justify-center flex-col ml-[5vw] pt-30">
          <p className="text-[#D2E722] font-extrabold text-[80px] leading-[0.9]">Everything you </p>
          <p className="text-[#D2E722] font-extrabold text-[80px] leading-[0.9]">are. In one,</p>
          <p className="text-[#D2E722] font-extrabold text-[80px] leading-[0.9]">simple link in</p>
          <p className="text-[#D2E722] font-extrabold text-[80px] leading-[0.9]">bio.</p>
          <p className="text-[#FFFFFF] text-xl my-4 pt-3">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-2 pt-10">
            <input value={text} onChange={(e)=> setText(e.target.value)} className="px-4 py-2 focus:outline-green-800 rounded-md bg-amber-50 w-62" type="text" placeholder="Enter your Handle" />
            <button onClick={()=> createTree()} className="bg-[#E8C0E8] rounded-full px-6 py-6 font-semibold">Claim your Bittree</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-row mr-[10vw] pl-10 pt-5">
          <img src="/home.png" alt="homepage image" />
        </div>
      </section>
      <section className="bg-red-500 min-h-[100vh]">

      </section>
    </main>
  );
}
