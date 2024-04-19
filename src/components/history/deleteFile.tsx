"use client";
import React from 'react'
import Image from 'next/image';
import delIcon from '/public/delete.png';

export const DeleteFile = () => {
     const handleDeleteFile = () => {

     }

     return (
          <div>
               <button className="text-purple-500 hover:text-blue-500 hover:underline" onClick={()=>{}}> <Image src={delIcon} alt="Close" width={20} height={20} /> </button>
          </div>
     )
}
