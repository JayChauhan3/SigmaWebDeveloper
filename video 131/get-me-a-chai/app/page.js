"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base  ">
        <div className="font-bold flex gap-6 md:gap-0 md:text-5xl justify-center items-center text-3xl">Get Me a Chai <span ><img className="invertImg " src="/tea.gif" width={88} alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their projects. 
          
        </p>
        <p className="text-center md:text-left">

          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>
        <div>
          <Link href={"/login"}>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href="/about">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>

        </div>
      </div>


     {/* <div className="my-8 h-[2px] w-full bg-[radial-gradient(closest-side,#a855f7,transparent)]" /> */}
    {/* <style jsx>{`
  .glow-gradient-line {
    stroke: url(#gradientGlow);
    stroke-width: 6;
    filter: drop-shadow(0 0 4px #9333ea);
    animation: glowPulse 2s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% {
      opacity: 0.4;
      filter: drop-shadow(0 0 4px #9333ea) drop-shadow(0 0 6px #3b82f6);
    }
    50% {
      opacity: 1;
      filter: drop-shadow(0 0 10px #9333ea) drop-shadow(0 0 12px #3b82f6);
    }
  }

  .fade-mask {
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  }
`}</style>
<div className="relative w-full bg-black overflow-hidden mt-0 fade-mask">
  <svg
    className="w-full h-[100px]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradientGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>

   
    <path
      d="M0,160 C360,320 1080,0 1440,160"
      fill="none"
      stroke="url(#gradientGlow)"
      strokeWidth="1.5"
    />

    <path
      className="glow-gradient-line"
      d="M0,160 C360,320 1080,0 1440,160"
      fill="none"
    />
  </svg>
</div> */}
{/* Black bg */}
{/* <style jsx>{`
  .glow-gradient-line {
    stroke: url(#gradientGlow);
    stroke-width: 6;
    filter: drop-shadow(0 0 4px #9333ea);
    animation: glowPulse 2s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% {
      opacity: 0.4;
      filter: drop-shadow(0 0 4px #9333ea) drop-shadow(0 0 6px #3b82f6);
    }
    50% {
      opacity: 1;
      filter: drop-shadow(0 0 10px #9333ea) drop-shadow(0 0 12px #3b82f6);
    }
  }

  .fade-mask {
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  }
`}</style>
<div className="relative w-full bg-black overflow-hidden mt-0 fade-mask">
  <svg
    className="w-full h-[100px]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradientGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>

   
    <path
      d="M0,160 C360,320 1080,0 1440,160"
      fill="none"
      stroke="url(#gradientGlow)"
      strokeWidth="1.5"
    />

    <path
      className="glow-gradient-line"
      d="M0,160 C360,320 1080,0 1440,160"
      fill="none"
    />
  </svg>
</div> */}




<style jsx>{`
  .glow-gradient-line {
    stroke: url(#gradientGlow);
    stroke-width: 6;
    filter: drop-shadow(0 0 4px #9333ea);
    animation: glowPulse 5s ease-in-out infinite; /* slower */
  }

  @keyframes glowPulse {
    0%, 100% {
      opacity: 0.4;
      filter: drop-shadow(0 0 4px #9333ea) drop-shadow(0 0 6px #3b82f6);
    }
    50% {
      opacity: 1;
      filter: drop-shadow(0 0 10px #9333ea) drop-shadow(0 0 12px #3b82f6);
    }
  }

  .fade-mask {
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  }
`}</style>
{/* Remove bg-black here */}
<div className="relative w-full overflow-hidden mt-0 fade-mask">
  <svg
    className="w-full h-[100px]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradientGlow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9333ea" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>

    <path
      d="M0,160 C360,320 1080,0 1440,160"
      fill="none"
      stroke="url(#gradientGlow)"
      strokeWidth="1.5"
    />

    <path
      className="glow-gradient-line"
      d="M0,160 C360,320 1080,0 1440,160"
      fill="none"
    />
  </svg>
</div>

      <div className="text-white container mx-auto pb-20 pt-14 px-10 relative z-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
      <p className="font-bold text-center">Fans want to contribute</p>
      <p className="text-center">Your fans are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
      <p className="font-bold text-center">Fans want to collaborate</p>
      <p className="text-center">Your fans are ready to collaborate with you</p>
    </div>
  </div>
</div>

  
{/* <div className="my-8 h-[2px] w-full bg-[radial-gradient(closest-side,#a855f7,#8b5cf6,#3b82f6,transparent)]" /> */}
{/* <div className="relative my-10 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.1)]" /> */}
<div className="relative w-full bg-black overflow-hidden mt-0">
  <svg
    className="w-full h-[160px]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="subtleBlackGlow" x1="0" y1="0" x2="0" y2="1">
         <stop offset="1%" stopColor="#000000" />
        <stop offset="100%" stopColor="#1a1a1a" />
        <stop offset="1%" stopColor="#fefcfc" />
        <stop offset="1%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path
      d="M0,160 C480,240 960,80 1440,160 L1440,0 L0,0 Z"
      fill="url(#subtleBlackGlow)"
    />
  </svg>
</div>





      <div className="  text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center relative z-10">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
      
      </div>
    </>
  );
}