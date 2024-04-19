"use client";
import React from 'react'

export const ScanResult = () => {
     return (
          <div>
               <div>
                    <div className="mb-4">
                         <p className="text-sm text-white">Overall risk level</p>
                         <p className="text-sm text-blue-300 font-semibold mb-6">Low</p>
                    </div>

                    <div className="mb-4">
                         <p className="text-sm text-white mb-6">Risk ratings</p>
                         <div className="space-y-4">
                              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                                   <div className="bg-red-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                              </div>
                              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                                   <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                              </div>
                              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                                   <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                              <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                                   <div className="bg-teal-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
