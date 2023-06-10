import { StyledButtonDefault } from "../../styles/Button";
import { StyledBody600, StyledCaption, StyledHeading } from "../../styles/Typography";
import { StyledLi } from "./style";

function Product({ burguer }) {

  const formattedValue = burguer.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledLi>
      <div className="div__img">
        <img src={burguer.img} alt="" />
      </div>
      <div className="div__information">
        <StyledHeading>{burguer.name}</StyledHeading>
        <StyledCaption>{burguer.category}</StyledCaption>
        <StyledBody600>{formattedValue}</StyledBody600>
        <StyledButtonDefault>adicionar</StyledButtonDefault>
      </div>

    </StyledLi>
  )
}

export default Product
