import React from 'react';
import { ScanResult } from '@/components/result/scanResult';
import { ScanData } from '@/components/result/scanData';

interface ReportPageProps{
     params:{
          fileId: string
     }
}

const ReportPage = ({params}:ReportPageProps) => {
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
                    <h1 className="text-2xl font-semibold text-white mb-6">Vulnerablity Report : {`${params.fileId}`}</h1>
                    <div className="flex justify-between items-center mb-8">
                         <p className="text-sm text-gray-400">{reportData.target}</p>
                         <span className="px-4 py-1 text-sm text-green-500 bg-green-100 rounded-full">
                              {reportData.scanStatus}
                         </span>
                    </div>

                    <h2 className="text-lg font-semibold text-white mb-4">→ Scan summary</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                         <div>
                              <ScanResult />
                         </div>

                         <div className="bg-gray-700 p-6 rounded-lg">
                              <ScanData />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ReportPage;    