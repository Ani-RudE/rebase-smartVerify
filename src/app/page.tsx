"use client"
import React from 'react';
import { MoveRight } from 'lucide-react';
import Head from 'next/head';
import { Vortex } from "../ui/vortex";
import { HoverEffect } from "../ui/card-hover-effect";

export default function Home() {

     return (
          <>
               <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-screen overflow-hidden"
               >
                    <header className="w-full flex justify-between p-5 text-white absolute top-0">
                         <div className="font-bold text-lg">SmartVerify</div>
                         <div className="flex space-x-4">
                              <a href="#" className="p-2 px-7">Blog</a>
                              <a href="#" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">Login</a>
                         </div>
                    </header>

                    <main className="flex-grow flex flex-col items-center justify-center text-center text-white p-4 z-10">
                         <h1 className="text-5xl font-bold mb-4">SmartVerify:</h1>
                         <p className="text-2xl mb-6">Making contracts sustainable</p>
                         <button className="bg-purple-600 text-white font-bold py-2 px-12 rounded flex items-center">
                              <MoveRight />
                         </button>
                    </main>

                    <footer className="text-white text-center p-4 absolute bottom-0 w-full">
                         <p>Team N-Bytes   |   Rebase&lt;01&gt;</p>
                    </footer>

               </Vortex>

               <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-screen overflow-hidden"
               >

                    <div className="max-w-5xl mx-auto px-12 margin ">
                         <HoverEffect items={projects} />
                    </div>
               </Vortex>
          </>
     );
}

export const projects = [
     {
          title: "Check out the Blog",
          description:
               "Our team has developed a web application designed to enhance the security of Ethereum smart contracts written in Solidity. Recognizing the growing importance of blockchain technologies and the need for robust smart contract security, our application examines and scans Solidity files to ensure the smart contracts are safe, efficient, and scalable. By leveraging a machine learning model, our application takes into account gas fees, optimizing the smart contracts for cost-effectiveness.",
          link: "https://dev.to/retr0kernel/smartverify-securing-smart-contracts-our-ml-powered-solidity-vulnerability-scanner-webapp-3afa",
     },
     {
          title: "How it Works",
          description:
               "Through a user-friendly interface, users can conveniently provide a link to the Solidity file they wish to analyze. Our application then subjects the file to a comprehensive examination by our machine learning model, which is trained to identify patterns and signatures associated with four types of vulnerabilities. The analysis results are presented on a dedicated Result Page, offering a detailed breakdown of potential vulnerabilities and their respective severity levels, enabling users to address identified issues effectively.",
          link: "#",
     },
     {
          title: "Devfolio",
          description:
               "The link to our project submitted on devfolio for the hackathon Rebase<01>, make sure to give it a 💙",
          link: "#",
     },
     {
          title: "Creators",
          description:
               "Amrit Kumar Singha | S Gyanesh Rao | Krish Srivastava | Aniruddha Dewangan",
          link: "https://github.com/Gyanesh-Rao28/smartverify",
     },
];