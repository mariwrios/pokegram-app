import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  
  ::-webkit-scrollbar {
    width: 2px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6d2cf;
    border-radius: 10px;
  }

  ${props => props.fixed && css`
    ${fadeIn()}
    background-color: #fff;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 10px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    `}
  `

export const Item = styled.li`
  padding: 0 8px;
`
