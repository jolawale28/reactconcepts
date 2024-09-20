import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800 flex flex-col justify-between`}
        style={{ height: '100vh' }}>
        <header className="flex justify-between items-center border-b border-gray-700">
          <div className="p-20">
            <h1 className="text-7xl font-bold">React</h1>
            <div>Frontend Practice Concepts, exercises and tutorials</div>
          </div>

          <div className="p-20 flex">
            <a href="https://github.com/jolawale28" className="mr-3 hover:scale-105 rounded-full" title="Joseph Olawale B.">
              <img src="https://avatar.iran.liara.run/public/20" style={{ width: '50px', height: '50px' }} />
            </a>
            <a href="https://github.com/heebu" className="mr-3 hover:scale-105 rounded-full" title="Idris Heebu">
              <img src="https://avatar.iran.liara.run/public/56" style={{ width: '50px', height: '50px' }} />
            </a>

          </div>
        </header>
        {children}

        <footer className="p-10 text-gray-500 text-center">
          &copy; {(new Date()).getFullYear()}
        </footer>
      </body>
    </html>
  );
}
