import { StyledButtonDefault } from "../../styles/Button";
import { StyledBody600, StyledCaption, StyledHeading } from "../../styles/Typography";
import FormattedPrice from "../FormattedPrice";
import { StyledLi } from "./style";

function Product({ burguer, listShopping, setListShopping }) {

  return (
    <StyledLi>
      <div className="div__img">
        <img src={burguer.img} alt="" />
      </div>
      <div className="div__information">

        <StyledHeading>{burguer.name}</StyledHeading>
        <StyledCaption>{burguer.category}</StyledCaption>
        <StyledBody600><FormattedPrice price={burguer.price} /></StyledBody600>
        <StyledButtonDefault
          onClick={() => {
            const checkCart = listShopping.find(item => item.id === burguer.id)
            if(!checkCart) {
              setListShopping([...listShopping, burguer]) 
            }
          }}
          >adicionar
        </StyledButtonDefault>
      </div>

    </StyledLi>
  )
}

export default Product
