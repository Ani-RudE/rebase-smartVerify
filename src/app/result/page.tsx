"use client";
import React from 'react';

const ReportPage = () => {
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
          <div className="flex flex-col justify-center items-center h-screen bg-gray-900 font-poppins">
               <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
                    <h1 className="text-2xl font-semibold text-white mb-6">Vulnerablity Report</h1>
                    <div className="flex justify-between items-center mb-8">
                         <p className="text-sm text-gray-400">{reportData.target}</p>
                         <span className="px-4 py-1 text-sm text-green-500 bg-green-100 rounded-full">
                              {reportData.scanStatus}
                         </span>
                    </div>

                    <h2 className="text-lg font-semibold text-white mb-4">→ Scan summary</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                         <div>
                              {/*
                              <div className="mb-4">
                                   <p className="text-sm text-white">Overall risk level</p>
                                   <p className="text-sm text-blue-300 font-semibold">{reportData.overallRiskLevel}</p>
                              </div>
                              <div className="mb-4">
                                   <p className="text-sm text-white">Risk ratings</p>
                                   <div className="space-y-2">
                                        <div className="bg-gray-700 h-2 rounded-full overflow-hidden my-2">
                                             <div className="bg-red-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                                        </div>
                                        <div className="bg-gray-700 h-2 rounded-full overflow-hidden my-2">
                                             <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                                        </div>
                                        <div className="bg-gray-700 h-2 rounded-full overflow-hidden my-2">
                                             <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                                        </div>
                                        <div className="bg-gray-700 h-2 rounded-full overflow-hidden my-2">
                                             <div className="bg-teal-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                                        </div>
                                   </div>
                              </div>
                              */}
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

                         <div className="bg-gray-700 p-6 rounded-lg">
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
                    </div>
               </div>
          </div>
     );
};

export default ReportPage;