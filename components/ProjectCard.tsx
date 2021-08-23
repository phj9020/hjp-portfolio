import { FunctionComponent, useState } from 'react';
import {IProject} from '../type';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import {MdClose} from 'react-icons/md';
import { motion } from "framer-motion";
import { projectModalAnimation, stagger, fadeInAnimation } from '../animation';

const ProjectCard:FunctionComponent<{project:IProject}> = ({project}) => {
    const [showDetail, setShowDetail] = useState(false);
    const {name, description, image_path, github_url, deployed_url, key_stacks} = project;
    
    const showDetailModal = ()=> {
        setShowDetail(true);
    }
    const hideDetailModal = ()=> {
        setShowDetail(false);
    }

    return (
        <div className="flex flex-col">
            <Image className="cursor-pointer" src={image_path} alt={name} width={300} height={200} layout="responsive" onClick={showDetailModal} />
            <p className="my-2 text-sm text-center cursor-pointer" onClick={showDetailModal}>{name}</p>
            {/* modal */}
            {showDetail ? (
                <motion.div id="modal" variants={projectModalAnimation} initial="initial" animate="animate" className="absolute top-0 left-0 z-10 grid w-full h-auto px-5 text-black bg-white border-2 rounded py-9 border-green dark:border-pinkyEnd md:grid-cols-2 gap-x-12 dark:text-white dark:bg-grayish">
                    <motion.div variants={stagger} initial="initial" animate="animate" >
                        <motion.div variants={fadeInAnimation}>
                            <Image src={image_path} alt={name} width={300} height={200} layout="responsive" />
                        </motion.div>
                        <motion.div variants={fadeInAnimation} className="flex justify-center mt-6 mb-6 space-x-3 md:mb-0">
                            <a href={github_url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 space-x-1 text-sm bg-gray-300 rounded dark:bg-gray-400">
                                <AiFillGithub />
                                <span>Github</span>
                            </a>
                            <a href={deployed_url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 space-x-1 text-sm bg-gray-300 rounded dark:bg-gray-400">
                                <AiFillProject /> 
                                <span>웹사이트</span>
                            </a>
                        </motion.div>
                    </motion.div>
                    <div>
                        <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                        <p className="mb-3 text-sm font-medium">{description}</p>
                        <motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-wrap mt-5 text-sm tracking-wider">
                            {key_stacks.map(stack => 
                                <motion.span variants={fadeInAnimation} className="block px-2 py-1 mt-2 mr-2 bg-gray-300 rounded dark:bg-gray-400" key={stack}>
                                    {stack}
                                </motion.span>)}
                        </motion.div>
                    </div>
                    <button className="absolute p-1 right-3 top-3 focus:outline-none" onClick={hideDetailModal}>
                        <MdClose size={25} />
                    </button>
                </motion.div>
            ) : null}
        </div>
    )
}

export default ProjectCard
