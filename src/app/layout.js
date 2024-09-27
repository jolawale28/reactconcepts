import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import logo from '../assets/img/logo.png';

import { DataProvider } from "./topComponents/DataContext";
import NavComponents from "./topComponents/NavComponents";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'React Frontend Practice',
  description: 'Practice React frontend challenges.',
  openGraph: {
    title: 'React Frontend Practice',
    description: 'React frontend practice and challenges',
    url: 'http://localhost:3000',
    type: 'website',
  },
};

export default function RootLayout({ children }) {

  const data = [
    {
      title: "Counter",
      desc: 'Build a simple counter that increments whenever a button is clicked.',
      dest_link: '/counter',
      author_link: 'https://github.com/jolawale28',
      author_image: 'https://avatar.iran.liara.run/public/20',
      image: 'https://images.unsplash.com/photo-1549488933-2392c609e512?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      title: "Contact",
      desc: 'Build a contact form which submits user feedback and contact details to a back end API.',
      dest_link: '/contactform',
      author_link: 'https://github.com/heebu',
      author_image: 'https://avatar.iran.liara.run/public/56',
      image: 'https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      title: "BMI Calc",
      desc: 'A BMI calculator quickly computes your Body Mass Index based on your weight and height to assess your body fat.',
      dest_link: '/bmicalc',
      author_link: 'https://github.com/heebu',
      author_image: 'https://avatar.iran.liara.run/public/56',
      image: 'https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      title: "Calculator",
      desc: 'A React calculator app for performing basic arithmetic operations interactively.',
      dest_link: '/calculator',
      author_link: 'https://github.com/heebu',
      author_image: 'https://avatar.iran.liara.run/public/56',
      image: 'https://images.unsplash.com/photo-1724304406928-c43b01912fa1?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    }
  ]

  return (
    <DataProvider data={data}>
      <html lang="en">

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between`}
          style={{ height: '100vh' }}>

          <header className="sm:px-10 md:px-10 lg:px-20 px-0 bg-navlinkhover">

            <div className="">
              <div className="lg:pt-10 md:pt-10 sm:pt-10">
                <div className="w-50 sm:w-100 flex justify-between items-center bg-white p-3 lg:rounded-t-2xl md:rounded-t-2xl sm:rounded-t-2xl rounded-t-0 border border-b">
                  <div className="flex items-center justify-center">
                    <Image src={logo} width={50} height={50} className="mr-3" alt="logo" priority />
                    <h1 className=" m-0"><span className="font-bold text-2xl">React Frontend</span> <br /><span className="text-xs">Practice and Exercises</span></h1>
                  </div>
                  <div className="flex">
                    <div className="flex">
                      <a target="_blank" href="https://github.com/jolawale28" className="mr-3 hover:scale-105 rounded-md" title="Joseph Olawale B.">
                        <img src="https://avatar.iran.liara.run/public/20" style={{ width: '30px', height: '30px' }} alt="profileJ" />
                      </a>
                      <a target="_blank" href="https://github.com/heebu" className="mr-3 hover:scale-105 rounded-md" title="Idris Adedeji">
                        <img src="https://avatar.iran.liara.run/public/56" style={{ width: '30px', height: '30px' }} alt="profileH" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavComponents />

          </header>

          <div className="grow flex justify-between flex-col">
            <div className="mb-10 h-full">
              {children}
            </div>

            <footer className="px-10 py-5 text-gray-500 text-center">
              &copy; {(new Date()).getFullYear()} Intel Region.
            </footer>
          </div>
        </body>
      </html>
    </DataProvider>

  );
}
