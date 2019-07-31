import React from 'react'
import styled, { withTheme } from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  padding: 0.8rem;
  opacity: 0;
  transition: opacity 0.4s;
  background: #333;
  border-radius: 0.8rem;
  &:hover {
    opacity: 1;
  }
`

const Tool = ({ logoUrl, item, text }) => {
  return (
    <div className="md:w-1/3 md:mb-16 relative">
      <Overlay>
        <div className="flex flex-col h-full justify-center items-center">
          <h4 className="text-2xl">{item}</h4>
          <p className="text-sm">{text}</p>
        </div>
      </Overlay>
      <img
        src={logoUrl}
        className="h-32 w-32 mb-16 md:mb-0 md:w-40 md:h-40 object-cover mx-auto"
        alt={`${item} logo`}
      />
    </div>
  )
}

export default Tool
