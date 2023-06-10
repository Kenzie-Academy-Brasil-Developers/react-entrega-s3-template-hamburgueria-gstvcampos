import { useRef } from "react";
import { StyledHeading } from "../../styles/Typography";
import { useEffect } from "react";

function Modal({ setIsOpen }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    window.addEventListener("mousedown", handleOutclick)

    return () => {
      window.removeEventListener("mousedown", handleOutclick)
    }
  }, [])

  // const value = burguer.price.toLocaleString("pt-BR", {
  //   style: "currency",
  //   currency: "BRL",
  // })

  {/* <StyledHeading>Carrinho de compras</StyledHeading> */ }

  return (
    <div role="dialog">
      <div ref={modalRef}>
        <button
          onClick={() => setIsOpen(false)}
        >

        </button>



      </div>
    </div>
  )
}

export default Modal
