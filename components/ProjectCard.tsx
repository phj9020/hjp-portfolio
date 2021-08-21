import { FunctionComponent, useState } from 'react';
import {IProject} from '../type';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import {MdClose} from 'react-icons/md';

const ProjectCard:FunctionComponent<{project:IProject}> = ({project}) => {
    const [showDetail, setShowDetail] = useState(false);
    const {id,name, description, image_path, github_url, deployed_url, category, key_stacks} = project;
    
    
    const showDetailModal = ()=> {
        setShowDetail(true);
    }
    const hideDetailModal = ()=> {
        setShowDetail(false);
    }

    return (
        <div className="flex flex-col" >
            <Image className="cursor-pointer" src={image_path} alt={name} width={300} height={200} layout="responsive" onClick={showDetailModal} />
            <p className="my-2 text-sm text-center">{name}</p>
            {/* modal */}
            {showDetail ? (
                <div className="absolute left-0 z-10 grid w-full h-auto px-5 text-black bg-white border-2 rounded py-9 top-20 border-green dark:border-pinkyEnd md:grid-cols-2 gap-x-12 dark:text-white dark:bg-grayish">
                    <div>
                        <Image src={image_path} alt={name} width={300} height={200} layout="responsive" />
                        <div className="flex justify-center mt-6 space-x-3">
                            <a href={github_url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 space-x-1 text-sm bg-gray-300 rounded dark:bg-gray-400">
                                <AiFillGithub />
                                <span>Github</span>
                            </a>
                            <a href={deployed_url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 space-x-1 text-sm bg-gray-300 rounded dark:bg-gray-400">
                                <AiFillProject /> 
                                <span>프로젝트</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                            <p className="mb-3 text-sm font-medium">{description}</p>
                            <div className="flex flex-wrap mt-5 text-sm tracking-wider">{key_stacks.map(stack => <span className="block px-2 py-1 mt-2 mr-2 bg-gray-300 rounded dark:bg-gray-400" key={stack}>{stack}</span>)}</div>
                        </div>
                    </div>
                    <button className="absolute p-1 right-3 top-3 focus:outline-none" onClick={hideDetailModal}>
                        <MdClose size={25} />
                    </button>
                </div>
            ) : null}
        </div>
    )
}

export default ProjectCard
