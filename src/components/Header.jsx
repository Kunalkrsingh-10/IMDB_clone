import React from 'react'
import MenuIteam from './MenuIteam'
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link'
export default function Header() {
  return (
    <div className="flex justify-between p-3 max-w-6xl mx-auto">
        <div className="flex gap-4 ">
       
        <MenuIteam title="home" address="/" icon={AiTwotoneHome }/> 
        <MenuIteam title="about" address="/about" icon={BsFillInfoCircleFill}/> 
        </div>
        <div className="flex gap-1 items-center">
        <Link href={"/"} className="bg-amber-500 text-2xl px-2 py-1 rounded-xl font-extrabold">IMDB</Link>
        <span className="text-xl hidden sm:inline">Clone</span>
        </div>
    </div>
  )
}
