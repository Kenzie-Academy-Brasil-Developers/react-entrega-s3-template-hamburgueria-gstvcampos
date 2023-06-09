import styled from "styled-components";

export const StyledTitle1 = styled.h1`
    font-family: var(--Font-Primary);
    font-size: 2.375rem;
    font-weight: 800;    
    color: var(--Color-Gray-4);  
`

export const StyledTitle2 = styled.h2`
    font-family: var(--Font-Primary);
    font-size: 1.375rem;
    font-weight: 700;    
    color: var(--Color-Gray-4);  
`

export const StyledTitle3 = styled.h3`
    font-family: var(--Font-Primary);
    font-size: 1rem;
    font-weight: 700;    
    color: ${props => props.color === 'primary' ? 'var(--Color-primary)' : 'var(--Color-Gray-4)'};
`
export const StyledTitle4 = styled.h4`
    font-family: var(--Font-Primary);
    font-size: .75rem;
    font-weight: 600;    
    color: var(--Color-Gray-4);  
`

export const StyledHeadline = styled.h3`
    font-family: var(--Font-Primary);
    font-size: 1rem;
    font-weight: 400;    
    color: var(--Color-Grey-3);  
`

export const StyledBody = styled.p`
    font-family: var(--Font-Primary);
    font-size: .75rem;
    font-weight: 400;    
    color: var(--Color-Grey-3);  
`