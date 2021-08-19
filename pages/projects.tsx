import Head from 'next/head';
import {projects} from '../data';

function projectsPage() {
    return (
        <div>
            <Head>
                    <title>박한진-포트폴리오 | Projects</title>
                    <meta name="keywords" content="keyword 1, keyword 2, keyword 3"/>
                    <meta name="description" content="Your description goes here" />
            </Head>
            <div className="p-5">
                <nav className="mb-2">navbar</nav>
                {
                    projects.map(project => <div key={project.id}>{project.name}</div>)
                }
            </div>
        </div>
    )
}

export default projectsPage;
