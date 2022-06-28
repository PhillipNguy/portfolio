import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #0a192f;
  display: flex;
  justify-content: space-between;
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #6AF9E2;

  @media all and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 33px;
    right: 25px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    height: 40px;
    width: auto;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-item: center;
  margin-right: 24px;

  @media all and (max-width: 768px) {
    display: none;
  }


`

