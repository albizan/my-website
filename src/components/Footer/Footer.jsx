import React, { Fragment } from 'react'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'
import { accentColor } from '../../themes/base'

const FooterContent = styled.div`
  display: block;
  text-align: center;
  background-color: ${accentColor};
  color: white;
  padding: 2rem;
`

const Footer = () => {
  return (
    <Fragment>
      <section className="w-full">
        <FooterContent className="text-sm md:text-lg">
          <p>
            Coded with <FaHeart className="inline" /> by Alberto Zanotti
          </p>
          <p className="mt-3">Built with react and tailwind</p>
        </FooterContent>
      </section>
    </Fragment>
  )
}

export default Footer
