"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const UploadPage = () => {
     const router = useRouter();

     const [formData, setFormData] = useState({
          contractName: '',
          yourName: '',
          idNumber: 'Hello',
          description: ''
     });

     const [file, setFile] = useState<File | null>(null);

     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = event.target;
          setFormData(prevFormData => ({
               ...prevFormData,
               [name]: value
          }));
     };

     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const files = event.target.files;
          if (files) {
               setFile(files[0]);
          }
     };

     const handleSubmit = (event: React.FormEvent) => {
          event.preventDefault();
          console.log('Form Data:', formData);
          if (file) {
               console.log('Uploaded File:', file);
          }
          // Redirect to the result page
          // router.push('');
     };

     return (
          <div className="flex justify-center items-center h-screen bg-gray-900 font-poppins">
               <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                         <div>
                              <label htmlFor="contract-name" className="block text-sm font-semibold text-gray-400">
                                   Contract Name
                              </label>
                              <input
                                   type="text"
                                   id="contract-name"
                                   name="contractName"
                                   onChange={handleInputChange}
                                   className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                   required
                              />
                         </div>

                         <div>
                              <label htmlFor="name" className="block text-sm font-semibold text-gray-400">
                                   Your Name
                              </label>
                              <input
                                   type="text"
                                   id="name"
                                   name="yourName"
                                   onChange={handleInputChange}
                                   className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                   required
                              />
                         </div>

                         <div>
                              <label htmlFor="personal-id" className="block text-sm font-semibold text-gray-400">
                                   ID Number
                              </label>
                              <input
                                   type="text"
                                   id="personal-id"
                                   name="idNumber"
                                   onChange={handleInputChange}
                                   className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                   required
                              />
                         </div>

                         <div>
                              <label htmlFor="description" className="block text-sm font-semibold text-gray-400">
                                   Description
                              </label>
                              <textarea
                                   id="description"
                                   name="description"
                                   onChange={handleInputChange}
                                   rows={4}
                                   className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                   required
                              />
                         </div>

                         <div>
                              <div className="flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md bg-gray-900">
                                   {/* Make sure the SVG URL is correct */}
                                   <svg className="mx-auto h-12 w-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://cdn.discordapp.com/attachments/1075621727004016721/1228797243063144580/outbox.png?ex=662d599c&is=661ae49c&hm=f58ca0e846294458e05cce8ddeed7802981848c6600d7fd6602d18178e2d3ae2&">
                                        {/* Your SVG path here */}
                                   </svg>
                                   <div className="text-sm text-gray-400">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-900 rounded-md font-medium text-purple-500 hover:text-purple-400 focus-within:outline-none">
                                             <span>Upload your Smart Contract &quot;.sol&quot; File</span>
                                             <input id="file-upload" name="file-upload" type="file" onChange={handleFileChange} className="sr-only" />
                                        </label>
                                   </div>
                              </div>
                         </div>

                         <div className="flex items-center">
                              <input
                                   type="checkbox"
                                   id="terms"
                                   className="text-blue-600 border-gray-600 focus:ring-blue-500"
                                   required
                              />
                              <label htmlFor="terms" className="ml-2 block text-sm font-semibold text-gray-400">
                                   Terms and Conditions
                              </label>
                         </div>

                         <button
                              type="submit"
                              className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                         >
                              Submit
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default UploadPage;