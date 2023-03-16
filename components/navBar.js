import styled from 'styled-components';
import { NavLink } from './navLinks';

const links = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary'];

const NavBarWrap = styled.div`
    background-image: url('/assets/images/bg-sidebar-mobile.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px;
    display: flex;
    justify-content: center;
    gap: 15px;
    height: 170px;
    width: 100%;
    @media screen and (min-width: 500px) {
      background-image: url('/assets/images/bg-sidebar-desktop.svg');
      flex-flow: column nowrap;
      height: 100%;
      padding: 40px 0 20px 30px;
      justify-content: flex-start;
      border-radius: 10px;
    }
`

const NavBar = ({active, currentPageNo, isNext}) => {
  return (
    <NavBarWrap>
          {links.map((x, y) => {
          // console.log(x , y)
       return ( <NavLink
          active={active == x.toLowerCase().replace(' ', '-') ? true : false}
          number={y + 1}
          name={x.toUpperCase()}
          href={`/${x.toLowerCase().replace(' ', '-')}`}
          key = {y}
        />)
      })}
    </NavBarWrap>
  );
};

export default NavBar
