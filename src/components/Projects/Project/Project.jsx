import React from 'react'
import styled, { withTheme } from 'styled-components'

const Project = () => {
  return (
    <div id="project-wrapper" className="w-full md:w-1/3 lg:1/4 p-3 mb-4">
      <div className="rounded-lg overflow-hidden bg-white shadow-lg">
        <img
          src="https://picsum.photos/500/250"
          alt="test"
          className="mx-auto w-full object-cover"
        />
        <div className="p-6">
          <div id="techs">
            <span className="bg-teal-300 text-gray-700 rounded-full px-2 py-1 text-xs tracking-tight uppercase font-semibold mr-2">
              front-end
            </span>
          </div>
          <h4 className="font-semibold tracking-wide truncate mt-3">
            This very website
          </h4>
          <p className="text-sm md:text-base text-gray-700 text-justify leading-snug">
            This is my personal website, here I tried exploring some exciting
            new libraries.
          </p>
        </div>
      </div>
    </div>
  )
}

export default withTheme(Project)
