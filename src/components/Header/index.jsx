import { useState } from "react"
import logo from "../../assets/logo.svg"
import search from "../../assets/search.svg"
import { StyledInput, StyledFormContainer } from "../../styles/Input"
import { StyledContainer } from "../../styles/container"
import { StyledHeader } from "./style"
import { FaShoppingCart } from "react-icons/fa"
import Modal from "../Modal"

function Header({ setInputSearch }) {
  const [isOpen, setIsOpen] = useState(false)

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

          <a onClick={() => setIsOpen(true)}>
            <span>0</span>
            <FaShoppingCart color="#BDBDBD" size={30}></FaShoppingCart>
          </a>

          {isOpen ? <Modal setIsOpen={setIsOpen}></Modal> : null}

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
