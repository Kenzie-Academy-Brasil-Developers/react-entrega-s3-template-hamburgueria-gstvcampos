import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"
import { StyledInput, StyledFormContainer } from "../../styles/Input"
import { StyledContainer } from "../../styles/container"
import { StyledHeader } from "./style"

function Header({ setInputSearch }) {

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <StyledHeader>
      <StyledContainer>
        <div className="flexbox">
          <img src={logo} alt="logo Burguer Kenzie" />
        </div>
        <StyledFormContainer onSubmit={handleSubmit}>
          <StyledInput 
            type="text"
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <button type="submit"><img src={search} alt="botão de busca" /></button>
        </StyledFormContainer>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
