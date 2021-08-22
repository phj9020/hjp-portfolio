import { FunctionComponent } from 'react'
import { Category } from '../type';


const NavItem:FunctionComponent<{value:Category, handleFilterCategory:Function, active:String}> = ({value, handleFilterCategory, active}) => {
    
    let defaultStyle = "mr-4 captialize cursor-pointer hover:text-green dark:hover:text-pinkyEnd" 
    // add Active style
    if(active === value) {
        defaultStyle += " text-green dark:text-pinkyEnd"
    };
        
    return (
        <li className={defaultStyle} onClick={()=> handleFilterCategory(value)}>
            {value}
        </li>
    )
}



export const ProjectNavBar:FunctionComponent<{handleFilterCategory:Function, active:String}> = (props) => {

    return (
        <nav>
            <ul className="flex px-3 py-2">
                <NavItem value="All" {...props} />
                <NavItem value="React"{...props} />
                <NavItem value="Expo" {...props} />
                <NavItem value="Next" {...props} />
                <NavItem value="Express" {...props} />
            </ul>
        </nav>
    )
}

export default ProjectNavBar;