import React, { Fragment } from 'react'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'
import { accentColor } from '../../themes/base'

const FooterContent = styled.p`
  display: block;
  text-align: center;
  background-color: ${accentColor};
  color: white;
  padding: 2rem;
  letter-spacing: 1px;

  @media screen {
  }
`

const Footer = () => {
  return (
    <Fragment>
      <section className="w-full">
        <FooterContent>
          Made with <FaHeart className="inline" /> by Alberto Zanotti with react
          and tailwind
        </FooterContent>
      </section>
    </Fragment>
  )
}

export default Footer
