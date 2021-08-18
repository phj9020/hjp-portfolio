import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import "@material-tailwind/react/tailwind.css";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-8 my-28 lg:px-36 sm:px-14">
      <div className="col-span-12 px-4 py-8 text-center bg-white rounded-md lg:col-span-3">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-white rounded-md lg:col-span-9">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
    )
}

export default MyApp
