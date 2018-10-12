import { Link } from 'react-router-dom'
import { css } from 'styled-components'
import styled from 'styled-components'

export const StyledHomesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40vw;
  padding: 10px;
  flex-wrap: wrap;
  `

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
