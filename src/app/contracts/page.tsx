"use client";
import React from 'react';

const ContractsPage = () => {
     // Sample data
     const rows = [
          { id: 1, fileName: "contract1.sol", author: "Mirage", vulnerable: "Yes" },
          { id: 2, fileName: "contract2.sol", author: "Ascent", vulnerable: "No" },
          { id: 3, fileName: "contract3.sol", author: "Nuke", vulnerable: "No" },
          { id: 4, fileName: "contract4.sol", author: "Verdansk", vulnerable: "Yes" },
          { id: 5, fileName: "contract5.sol", author: "Miramar", vulnerable: "No" },
          { id: 6, fileName: "contract6.sol", author: "Dust", vulnerable: "No" },
          { id: 7, fileName: "contract7.sol", author: "Inferno", vulnerable: "No" },
          { id: 8, fileName: "contract8.sol", author: "Split", vulnerable: "No" },
          { id: 9, fileName: "contract9.sol", author: "Rust", vulnerable: "Yes" },
          { id: 10, fileName: "contract10.sol", author: "Quarry", vulnerable: "No" },
     ];

     return (
          <div className="flex justify-center items-center h-screen bg-gray-900 font-poppins">
               <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl">
                    <h1 className="text-xl font-semibold text-white mb-4">Contract History</h1>
                    <div className="overflow-x-auto">
                         <table className="w-full text-sm text-left text-gray-500">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-700 text-white">
                                   <tr style={{ backgroundColor: '#9747FF' }}>
                                        <th scope="col" className="px-6 py-3">
                                             <span className="sr-only">Check</span>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             File Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             Author
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             Vulnerable
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             View
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             <span className="sr-only">Actions</span>
                                        </th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {rows.map(row => (
                                        <tr key={row.id} className="bg-gray-700 border-b border-gray-600 text-white">
                                             <td className="px-6 py-4">
                                                  <input type="checkbox" className="text-purple-600 rounded" />
                                             </td>
                                             <td className="px-6 py-4">
                                                  {row.fileName}
                                             </td>
                                             <td className="px-6 py-4">
                                                  {row.author}
                                             </td>
                                             <td className="px-6 py-4">
                                                  {row.vulnerable}
                                             </td>
                                             <td className="px-6 py-4">
                                                  <button className="text-white hover:text-pruple-500">View</button>
                                             </td>
                                             <td className="px-6 py-4 text-right">
                                                  <button className="text-purple-500 hover:text-blue-500 hover:underline" >Edit</button>
                                                  {/* className="font-medium text-blue-500 hover:underline */}
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default ContractsPage;