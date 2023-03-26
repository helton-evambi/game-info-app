import { Container, Left, Menu, MenuItem, Right} from './style'

const Navbar = () => {
  return (
    <Container>
      <Left>HELTON</Left>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>About</MenuItem>
      </Menu>
      <Right>Login Sign Up</Right>
    </Container>
  )
}

export default Navbar