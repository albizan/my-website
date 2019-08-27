import React from 'react'
import styled, { withTheme } from 'styled-components'

import Tool from './Tool'

const Tools = () => {
  return (
    <section className="container section-container">
      <h3 className="section-title">Tools I like to use</h3>
      <div className="block md:flex md:justify-start md:flex-wrap md:items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <Tool />
        </div>
      </div>
    </section>
  )
}

export default withTheme(Tools)
