import { FunctionComponent } from "react";
import { IService } from "../type";

const CapabilityCard:FunctionComponent<{service:IService}> = ({service:{id, title, Icon, description}}) => {

    const createMarkUp = ()=> {
        return {
            __html: description
        }
    };
    
    return (
        <div key={id} className="flex items-center p-4 bg-gray-200 rounded-md">
            <Icon className="w-12 h-12 mr-4 lg:mr-6 text-green"/>
            <div className="text-sm lg:text-base ">
                <h3 className="mb-1 font-semibold lg:mb-2">{title}</h3>
                <p dangerouslySetInnerHTML={createMarkUp()} />
            </div>
        </div>
    )
}

export default CapabilityCard
