import logo from "../../assets/logo.svg"
import { StyledContainer } from "../../styles/container"
import { StyledHeader } from "./style"


function Header() {
  return (
    <StyledHeader>
      <StyledContainer>
        <div className="flexbox">
          <img src={logo} alt="logo Burguer Kenzie" />
        </div>
        <div>
          {/* carrinho de compra */}
          {/* input */}
        </div>

      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
