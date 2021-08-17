import Image from 'next/image';
import {AiFillGithub} from "react-icons/ai";
import {GoLocation} from 'react-icons/go';

function Sidebar() {
    return (
        <div>
            <Image className="rounded-full" src="/profile.jpg" alt="profile" width="150" height="150"/>
            <h3 className="my-3 text-3xl font-medium tracking-wider font-nanum">박<span className="text-blue">한진</span></h3>
            <p className="w-8/12 p-2 m-auto text-sm bg-gray-200 rounded-lg text-center-sm">Front-End Developer</p>
            <a className="block w-8/12 p-2 m-auto my-2 text-sm transition duration-700 ease-in-out bg-gray-200 rounded-lg text-center-sm hover:bg-blue hover:text-white" href="" download="name">이력서 다운로드</a>
            <div className="flex items-center my-3 text-green justify-evenly">
                <a href="https://github.com/phj9020" target="_blank" rel="noreferrer" className="flex items-center justify-center py-1"> 
                    <AiFillGithub className="w-8 h-8"/>
                </a>
            </div>
            <div className="py-4 mb-3 text-sm bg-gray-200 rounded-lg lg:mb-12" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className="flex items-center justify-center my-2 space-x-2">
                    <GoLocation className="w-3 h-4"/>
                    <span>Seoul, Korea</span>
                </div>
                <p className="my-2">phj9020@hotmail.com</p>
                <p className="my-2">010-4229-7570</p>
            </div>
            <button onClick={()=> window.open('mailto:phj9020@hotmail.com')} className="w-8/12 py-2 my-2 font-semibold text-white rounded-full bg-gradient-to-r from-green to-blue">Email me</button>
            <button className="w-8/12 py-2 my-2 font-semibold text-white rounded-full bg-gradient-to-r from-green to-blue">Toggle Theme</button>
        </div>
    )
}

export default Sidebar;
