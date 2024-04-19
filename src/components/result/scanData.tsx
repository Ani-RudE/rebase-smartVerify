import React from 'react'

export const ScanData = () => {
     const reportData = {
          target: "contract.sol",
          overallRiskLevel: 'Low',
          high: 0,
          medium: 0,
          low: 4,
          info: 14,
          scanStatus: 'Finished',
          startTime: '2024-04-14 10:54:29 (GMT+5:30)',
          finishTime: '2024-04-14 10:55:02 (GMT+5:30)',
          scanDuration: '33 seconds',
          author: 'Ani',
     };

     return (
          <div>
               <div className="mb-4">
                    <p className="text-sm text-white">Scan status</p>
                    <p className="text-sm font-semibold text-green-400">{reportData.scanStatus}</p>
               </div>
               <div className="mb-4">
                    <p className="text-sm text-white">Start time</p>
                    <p className="text-sm font-semibold text-gray-300">{reportData.startTime}</p>
               </div>
               <div className="mb-4">
                    <p className="text-sm text-white">Finish time</p>
                    <p className="text-sm font-semibold text-gray-300">{reportData.finishTime}</p>
               </div>
               <div className="mb-4">
                    <p className="text-sm text-white">Scan duration</p>
                    <p className="text-sm font-semibold text-gray-300">{reportData.scanDuration}</p>
               </div>
               <div className="mb-4">
                    <p className="text-sm text-white">Author</p>
                    <p className="text-sm font-semibold text-gray-300">{reportData.author}</p>
               </div>
          </div>
     )
}
