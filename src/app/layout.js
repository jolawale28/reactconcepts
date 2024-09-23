import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import logo from '../assets/img/logo.png'

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
  title: "React Frontend Concepts",
  description: "A collection of Frontend practice implemented with React.",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white flex flex-col`}
        style={{ height: '100vh' }}>

        <header className="sm:px-5 md:px-5 lg:px-20 bg-gray-900">

          <div className="">
            <div className="lg:pt-10">
              <div className="w-50 sm:w-100 flex justify-between items-center bg-white p-3 rounded-ss-2xl rounded-se-2xl border border-b">
                <div className="flex items-center justify-center">
                  <Image src={logo} width={50} height={50} className="mr-3" alt = "logo" priority />
                  <h1 className=" m-0"><span className="font-bold text-2xl">React Frontend</span> <br /><span className="text-xs">Practice and Exercises</span></h1>
                </div>
                <div className="flex">
                  <div className="flex">
                    <a href="https://github.com/jolawale28" className="mr-3 hover:scale-105 rounded-md" title="Joseph Olawale B.">
                      <img src="https://avatar.iran.liara.run/public/20" style={{ width: '30px', height: '30px' }} alt = "profileJ" />
                    </a>
                    <a href="https://github.com/heebu" className="mr-3 hover:scale-105 rounded-md" title="Idris Adedeji">
                      <img src="https://avatar.iran.liara.run/public/56" style={{ width: '30px', height: '30px' }} alt = "profileH" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="bg-white relative">
            <div className="absolute right-1 top-1 bg-navlinkhover text-white font-bold h-10 w-10 flex items-center justify-center">
              {'>'}
            </div>
            <ul className="list-none flex space-x-5 py-3">
              <li className="text-center">
                <a className="pl-5 pr-3 relative hover:text-navlinkhover font-bold inline-block" href="/">
                  Home
                </a>

              </li>
              <li className="">
                <a className="px-3 relative hover:text-navlinkhover font-bold inline-block" href="/counter">
                  Counter
                </a>

              </li>
              <li className="">
                <a className="px-3 relative hover:text-navlinkhover font-bold inline-block" href="/contactform">
                  Contact Form
                </a>

              </li>
            </ul>
          </nav>
          
        </header>

        {children}

        <footer className="p-10 text-gray-500 text-center">
          &copy; {(new Date()).getFullYear()}
        </footer>
      </body>
    </html>
  );
}
