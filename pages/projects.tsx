import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import {projects} from '../data';

function Projects() {
    return (
        <div>
            <Head>
                    <title>박한진-포트폴리오 | Projects</title>
                    <meta name="keywords" content="keyword 1, keyword 2, keyword 3"/>
                    <meta name="description" content="Your description goes here" />
            </Head>
            <div className="p-5 overflow-y-scroll max-h-container">
                {/* todo: Navbar component */}
                <nav>navbar</nav>
                <div className="grid grid-cols-12 gap-4 my-3">
                    {
                        projects.map(project => 
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
