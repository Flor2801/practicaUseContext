import {useContext} from 'react' 
import styled from 'styled-components'
import UserContext from '../Context/UserContext';

const NavBar = styled.nav`
background-color: ${props => props.esUsuarioPremium ? "pink" : "red"};
height: 30px;
`;

const Nav = () => {
  const {esUsuarioPremium} = useContext(UserContext);
  return (
    <NavBar esUsuarioPremium={esUsuarioPremium}>
      <h1>Soy Nav</h1>
    </NavBar>
  )
}

export default Nav
