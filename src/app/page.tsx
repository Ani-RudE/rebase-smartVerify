import { MoveRight } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
     return (
          <>
               <Head>
                    <title>Introducing SmartVerify</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <main className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between"
                    style={{ backgroundImage: "url('/your-background-image-path.jpg')" }}>
                    <header className="flex justify-between p-5 text-white">
                         <div>
                              <a href="#" className="font-bold text-lg">SmartVerify</a>
                         </div>
                         <nav>
                         </nav>
                         <div className="flex space-between">
                              <a href="https://dev.to/retr0kernel/securing-smart-contracts-our-ml-powered-solidity-vulnerability-scanner-webapp-2m1j-temp-slug-9404343?preview=b2bc9f2a4906972b2af042c5ea957c30006e23a386733c5b3c06ff6d576e6dd3e01f066c43a93b30aa816b68173d892517e04d1c53ab774355a3ca51" className="p-2 px-7">Blog</a>
                              {/* <a href="#" className="p-2 bg-blue-600 rounded-md">Login</a> */}
                              <a href="#" className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">Login</a>
                         </div>
                    </header>

                    <section className="flex-grow flex flex-col items-center justify-center text-center text-white p-4">
                         {/* Main content */}
                         <h1 className="text-5xl font-bold mb-4">Smart Verify:</h1>
                         <p className="text-2xl mb-6">Making contracts sustainable</p>
                         <button className="bg-purple-700 text-white font-bold py-2 px-12 rounded flex">
                              <MoveRight />
                         </button>
                    </section>

                    <footer className="text-white text-center p-4">
                         {/* Footer content */}
                         <p>Rebase&lt;01&gt;</p>
                    </footer>
               </main>
          </>
     );
}