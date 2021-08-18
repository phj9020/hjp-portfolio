import { FunctionComponent,useRef  } from "react";
import { ISKill } from "../type";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";


export const Bar:FunctionComponent<{data:ISKill}> = ({data : {name, Icon, level}}) => {
    const levelRef = useRef();
    return (
        <div className="mb-2 text-white bg-gray-300 rounded-full">
            <div className="flex items-center px-4 py-1 rounded-full cursor-pointer bg-gradient-to-r from-green to-blue"
            style={{width: level}} ref={levelRef}>
                <Icon className="mr-1 md:mr-2" />
                <span>{name}</span>
            </div>
            <Tooltips placement="right" ref={levelRef}>
                <TooltipsContent>{level}</TooltipsContent>
            </Tooltips>
        </div>
    )
};
