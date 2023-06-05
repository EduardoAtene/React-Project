import styled from "styled-components";


export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input{
        flex:1;
        border: 0;
        border-radius: 6px;
        background: ${props=>props.theme["gray-900"]};
        color: ${props=>props.theme["gray-400"]};
        padding: 1rem;

        &::placeholder{
            color: ${props=>props.theme["gray-300"]};
        }

    }
`;

export const ButtonSearchForm = styled.button`
    display: flex;
    align-items: center;
    gap: .75rem;

    color: ${props => props.theme["green-500"]};
    border: 1px solid ${props => props.theme["green-500"]};
    background-color: transparent;
    padding: 0.5rem 2.4rem;
    border-radius: 6px;

    cursor: pointer;

    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;

    }
    &:not(:disabled):hover, &:not(:disabled):focus{
        background: ${props => props.theme["green-500"]} ;
        color: ${props => props.theme.white};
        border: ${props => props.theme["green-500"]} ;
        transition: background-color .25s, color  .25s, border-color  .25s;


    }
    &:focus{
        box-shadow: 0 0 0 3px ${props => props.theme['green-700']};
    }
`;