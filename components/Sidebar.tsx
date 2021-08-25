import Image from 'next/image';
import {AiFillGithub} from "react-icons/ai";
import {GoLocation} from 'react-icons/go';
import { useTheme } from 'next-themes';

function Sidebar() {
    const { theme, setTheme } = useTheme();
    
    const themeChange = ()=> {
        setTheme(theme === "light" ? "dark" : "light")
    };

    return (
        <div>
            <Image className="rounded-full" src="/profile.jpg" alt="profile" width="150" height="150" layout="intrinsic" />
            <h3 className="my-3 text-3xl font-medium tracking-wider font-nanum dark:text-white">박<span className="text-blue dark:text-menuActiveDark">한진</span></h3>
            <p className="w-8/12 p-2 m-auto text-sm bg-gray-200 rounded-lg dark:bg-lightgray text-center-sm">Front-End Developer</p>
            <a className="block w-8/12 p-2 m-auto my-2 text-sm transition duration-700 ease-in-out bg-gray-200 rounded-lg dark:bg-lightgray dark:hover:bg-red-400 text-center-sm hover:bg-blue hover:text-white" href="/assets/myresume.pdf" download="[프론트엔드개발]박한진_이력서">이력서 다운로드</a>
            <div className="flex items-center my-3 text-green dark:text-pinkyEnd justify-evenly">
                <a href="https://github.com/phj9020" target="_blank" rel="noreferrer" className="flex items-center justify-center py-1"> 
                    <AiFillGithub className="w-8 h-8"/>
                </a>
            </div>
            <div className="py-4 mb-3 text-sm bg-gray-200 rounded-lg dark:bg-lightgray lg:mb-12" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className="flex items-center justify-center my-2 space-x-2">
                    <GoLocation className="w-3 h-4"/>
                    <span>Seoul, Korea</span>
                </div>
                <p className="my-2">phj9020@hotmail.com</p>
                <p className="my-2">010-4229-7570</p>
            </div>
            <button onClick={()=> window.open('mailto:phj9020@hotmail.com')} className="w-8/12 py-2 my-2 font-semibold text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue dark:from-pinkyStart dark:to-pinkyEnd">이메일 보내기</button>
            <button onClick={themeChange} className="w-8/12 py-2 my-2 font-semibold text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue dark:from-pinkyStart dark:to-pinkyEnd">테마 변경</button>
        </div>
    )
}

export default Sidebar;
