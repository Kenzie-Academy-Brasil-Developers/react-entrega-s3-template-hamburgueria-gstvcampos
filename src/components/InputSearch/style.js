import styled, { css } from "styled-components";

const InputDefaultStyles = css`
   font-family: var(--Font-Primary);
   font-weight: 400;
   font-size: 1rem;

   max-width: 100%;
   height: 3.25rem;
   padding: 0 1rem;

   border-radius: 0.5rem;
   border: 2px solid var(--Color-Grey-1);
   color: var(--Color-Grey-3);
   background-color: var(--Color-Grey-1);
   
   :focus {
      border: 2px solid green;
   }
`

export const StyledInput = styled.input`
   ${InputDefaultStyles};

`

export const StyledSelect = styled.select`
   ${InputDefaultStyles};
`