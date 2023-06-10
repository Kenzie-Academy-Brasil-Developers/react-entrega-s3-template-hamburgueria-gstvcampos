import styled from "styled-components";

export const StyledButtonDefault = styled.button`
    font-size: 1rem;
    font-weight: 600;

    padding: 0.6rem 1.25rem;

    color: var(--color-white);
    background-color: ${props => props.color === 'grey' ? 'var(--color-grey-100)' : 'var(--color-primary)'};
    border: 1px solid ${props => props.color === 'grey' ? 'var(--color-grey-100)' : 'var(--color-primary)'};
    border-radius: 0.5rem;

    :hover {
      background-color: ${props => props.color === 'grey' ? 'var(--color-grey-300)' : 'var(--color-primary-50)'};
      border-color: ${props => props.color === 'grey' ? 'var(--color-grey-300)' : 'var(--color-primary-50)'};
    }
`
export const StyledButtonMedium = styled.button`
    font-size: 1rem;
    font-weight: 600;

    padding: .625rem 1.25rem;
    
    color: var(--color-white);
    background-color: ${props => props.color === 'grey' ? 'var(--color-grey-100)' : 'var(--color-primary)'};
    border: 1px solid ${props => props.color === 'grey' ? 'var(--color-grey-100)' : 'var(--color-primary)'};   
    border-radius: 0.5rem;

    :hover {
      background-color: ${props => props.color === 'grey' ? 'var(--color-grey-300)' : 'var(--color-primary-50)'};
      border-color: ${props => props.color === 'grey' ? 'var(--color-grey-300)' : 'var(--color-primary-50)'};
    }
`