"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const ViewFileResult = () => {
     const router = useRouter()
     return (
          <div>
               <button className="text-white hover:text-purple-500" onClick={()=>{router.push(`history/:fileId`)}}>View</button>
          </div>
     )
}