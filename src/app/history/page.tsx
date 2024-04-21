
import React from 'react';
import Sidebar from '../sidebar';
import { DeleteFile } from '@/components/history/deleteFile';
import { ViewFileResult } from '@/components/history/viewFileResult';

const ContractsPage = () => {
     // Sample data
     const rows = [
          { id: 1, fileName: "contract1.sol", author: "Mirage", vulnerable: "Yes" },
          { id: 2, fileName: "contract2.sol", author: "Ascent", vulnerable: "No" },
          { id: 3, fileName: "contract3.sol", author: "Verdansk", vulnerable: "No" },
          { id: 4, fileName: "contract4.sol", author: "Sanhok", vulnerable: "No" },
          { id: 5, fileName: "contract5.sol", author: "Rust", vulnerable: "Yes" },
          { id: 6, fileName: "contract6.sol", author: "Inferno", vulnerable: "No" },
          { id: 7, fileName: "contract7.sol", author: "Split", vulnerable: "No" },
     ];

     return (
          <>

               <div className="flex bg-gray-900 font-poppins h-lvh">
                    <Sidebar />
                    <div className="flex-1 flex flex-col">
                         <div className="flex flex-col items-center w-full">
                              <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl mt-20 mx-auto">
                                   <h1 className="text-xl font-semibold text-white mb-4 text-center">Contract History</h1>
                                   <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-500">
                                             <thead className="text-xs uppercase bg-purple-500 text-white">
                                                  <tr>
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
                                                                 <ViewFileResult />
                                                                 {/* VIEW  */}
                                                            </td>
                                                            <td className="px-6 py-4 text-right">
                                                                 <DeleteFile />
                                                            </td>
                                                       </tr>
                                                  ))}
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default ContractsPage;