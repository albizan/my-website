import React from 'react'

import Project from './Project'
import data from '../../data/projects.json'

const Projects = () => {
  const { projects } = data

  return (
    <section className="w-full">
      <div className="container section-container pb-0">
        <h3 className="section-title">Some stuff I enjoyed coding</h3>
      </div>
      <div className="w-full block sm:flex sm:justify-start sm:items-center sm:flex-wrap pb-16">
        {projects.map(project => {
          const {
            img,
            title,
            description,
            categories,
            technologies,
            link,
            github,
            github2,
          } = project
          return (
            <Project
              key={title}
              img={img}
              title={title}
              description={description}
              categories={categories}
              technologies={technologies}
              link={link}
              github={github}
              github2={github2}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
