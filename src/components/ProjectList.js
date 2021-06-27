import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
	const projects = [
		{
			name: 'Scholar Scrape',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			github: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			languages: 'Python',
			description:
				'Output a list of scholarships that match my criteria using web scrapping',
		},
	];
	return (
		<div className='py-3 d-flex flex-column justify-content-center align-items-center align-content-center '>
			<h2> What I have worked on</h2>
			<div className='container'>
				<div className='row justify-content-center'>
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							url={project.url}
							name={project.name}
							github={project.github}
							languages={project.languages}
							description={project.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
