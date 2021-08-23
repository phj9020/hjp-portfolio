import Head from 'next/head';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import {projects} from '../data';
import { Category } from '../type';
import { ProjectNavBar } from './../components/ProjectNavBar';
import { motion } from "framer-motion";
import { fadeInAnimation, routeAnimation, stagger } from '../animation';

function Projects() {
    const [projectFilter, setProjectFilter] = useState(projects);
    const [active, setActive] = useState("All");
    const [showDetail, setShowDetail] = useState<number | null>(null);

    const handleFilterCategory = (category: Category) => {
        const filteredData = projects.filter((project) => project.category.includes(category));
        setProjectFilter(filteredData);
        setActive(category);
    };
    
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            <Head>
                <title>박한진-포트폴리오 | Projects</title>
                <meta name="keywords" content="web-dev, frontend dev, clone projects"/>
                <meta name="description" content="박한진의 프로젝트 리스트" />
            </Head>
            <div className="p-5 overflow-y-auto max-h-container ">
                <ProjectNavBar handleFilterCategory={handleFilterCategory} active={active} />
                <motion.div variants={stagger} initial="initial" animate="animate" className="relative grid grid-cols-12 gap-4 my-3 min-h-container">
                    {
                        projectFilter.map(project => 
                            <motion.div variants={fadeInAnimation} className="col-span-12 p-2 sm:col-span-6 lg:col-span-4" key={project.id}>
                                <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                            </motion.div>
                        )
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Projects;
