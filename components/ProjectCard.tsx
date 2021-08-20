import { FunctionComponent } from 'react';
import {IProject} from '../type';
import Image from 'next/image';

const ProjectCard:FunctionComponent<{project:IProject}> = ({project}) => {
    const {id,name,image_path, github_url, category, key_stacks} = project
    
    return (
        <div className="flex flex-col cursor-pointer">
            <Image src={image_path} alt={name} width={300} height={200} />
            <p className="my-2 text-center">{name}</p>
            {/* todo : modal */}
        </div>
    )
}

export default ProjectCard
