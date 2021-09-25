import styled from 'styled-components';

// Styled-components is great for conditional rendering

export const StyledCell = styled.div`
    
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
    border-left-color: rgba(${props => props.color}, 0.3);
    border-right-color: rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 1);
    border-bottom-color: rgba(${props => props.color}, 0.1);
    
`;
