import { useState, useEffect, FunctionComponent } from "react";
import Link from 'next/link';

type NavProps = {
    activeMenu: string;
    setActiveMenu:Function;
    name:string;
    route:string;
};

const NavItem:FunctionComponent<NavProps> = ({activeMenu,name,route,setActiveMenu})=> {
    return (
        activeMenu !== name ? (
            <Link href={route}>
                <a className="hover:text-green" onClick={()=> setActiveMenu(name)}>{name}</a>
            </Link>
        ) : null
    )
};


function Navbar() {
    const [activeMenu, setActiveMenu] = useState<string>('');

    useEffect(()=>{
        const pathname = window.location.pathname;
        if(pathname === "/") {
            setActiveMenu("About")
        } else if(pathname === "/resume") {
            setActiveMenu("Resume")
        } else if(pathname === "/projects") {
            setActiveMenu("Projects")
        }
    },[]);
    return (
        <div className="flex justify-between p-5">
            <span className="text-xl font-bold border-b-4 border-menuActive text-menuActive md:text-2xl">{activeMenu}</span>
            <div className="flex space-x-5 text-lg text-red-400">
                <NavItem activeMenu={activeMenu}  setActiveMenu={setActiveMenu} name="About" route="/" />
                <NavItem activeMenu={activeMenu}  setActiveMenu={setActiveMenu} name="Resume" route="/resume" />
                <NavItem activeMenu={activeMenu}  setActiveMenu={setActiveMenu} name="Projects" route="/projects" />
            </div>
        </div>
    )
}

export default Navbar
