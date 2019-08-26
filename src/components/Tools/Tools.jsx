import React from 'react'
import styled, { withTheme } from 'styled-components'

import vscodeLogo from '../../assets/img/logos/vscode.png'
import tailwindLogo from '../../assets/img/logos/tailwind.png'
import reactLogo from '../../assets/img/logos/react.png'

const ToolCard = styled.div`
  background: linear-gradient(45deg, #3503ad, #f7308c);
  margin-bottom: 1rem;
  height: 15rem;
  width: 100%;
  color: white;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
`

const Tools = () => {
  return (
    <section className="container section-container">
      <h3 className="section-title">Tools I like to use</h3>
      <div className="block md:flex md:justify-start md:flex-wrap md:items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <ToolCard className="flex justify-center items-center rounded">
            <div id="image-box">
              <img
                src={vscodeLogo}
                alt="Visual Studio Code Logo"
                className="h-20 w-20"
              />
              <h3 className="text-center uppercase mt-6 font-bold tracking-wider">
                VsCode
              </h3>
            </div>
            <div id="card-overlay" className="absolute inset-0"></div>
          </ToolCard>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <ToolCard className="flex justify-center items-center rounded">
            <div id="image-box">
              <img
                src={tailwindLogo}
                alt="Visual Studio Code Logo"
                className="h-20 w-20"
              />
              <h3 className="text-center uppercase mt-6 font-bold tracking-wider">
                tailwind
              </h3>
            </div>
            <div id="card-overlay" className="absolute inset-0"></div>
          </ToolCard>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <ToolCard className="flex justify-center items-center rounded">
            <div id="image-box">
              <img
                src={reactLogo}
                alt="Visual Studio Code Logo"
                className="h-20 w-20"
              />
              <h3 className="text-center uppercase mt-6 font-bold tracking-wider">
                react
              </h3>
            </div>
            <div id="card-overlay" className="absolute inset-0"></div>
          </ToolCard>
        </div>
      </div>
    </section>
  )
}

export default withTheme(Tools)
