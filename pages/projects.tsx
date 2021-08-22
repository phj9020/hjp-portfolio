import Head from 'next/head';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import {projects} from '../data';
import { Category } from '../type';
import { ProjectNavBar } from './../components/ProjectNavBar';

function Projects() {
    const [projectFilter, setProjectFilter] = useState(projects);
    const [active, setActive] = useState("All");
    console.log(active);
    
    const handleFilterCategory = (category: Category) => {
        if(category === "All") {
            setProjectFilter(projects);
            setActive(category);
        }
        const filteredData = projects.filter((project) => project.category.includes(category));
        console.log(filteredData);
        setProjectFilter(filteredData);
        setActive(category);
    };
    
    return (
        <div>
            <Head>
                    <title>박한진-포트폴리오 | Projects</title>
                    <meta name="keywords" content="keyword 1, keyword 2, keyword 3"/>
                    <meta name="description" content="Your description goes here" />
                    <link rel="icon" href="/portfolio.png" />
            </Head>
            <div className="p-5 overflow-y-auto max-h-container ">
                <ProjectNavBar handleFilterCategory={handleFilterCategory} active={active} />
                <div className="relative grid grid-cols-12 gap-4 my-3 min-h-container">
                    {
                        projectFilter.map(project => 
                            <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4" key={project.id}>
                                <ProjectCard project={project} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;
