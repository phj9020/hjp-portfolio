import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import "@material-tailwind/react/tailwind.css";
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-8 my-28 lg:px-36 sm:px-14 dark:text-white">
        <div className="col-span-12 px-4 py-8 text-center bg-white rounded-md shadow-custom-light dark:shadow-custom-dark lg:col-span-3 dark:bg-black">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 bg-white rounded-md lg:col-span-9 shadow-custom-light dark:shadow-custom-dark dark:bg-black">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
    )
}

export default MyApp
