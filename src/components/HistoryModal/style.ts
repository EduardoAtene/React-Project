import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0,0,0,.75);  
`;

export const Content = styled(Dialog.Content)`
    min-width: auto;
    border-radius: 6px;
    padding: 2.5rem 10rem;
    background: ${props => props.theme["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form{
        margin-top: 2rem;
        
        display: flex;
        flex-direction: column;
        gap:1rem;

        input{
            color: ${props => props.theme["gray-300"]};
            background: ${props => props.theme["gray-900"]};
            border-radius: 6px;

            padding: 1rem;
            border: 0;
            &::placeholder{
                color: ${props => props.theme["gray-500"]};

            }
        }

        button[type='submit']{
            height:58px;
            border: 0;
            color: ${props => props.theme.white};
            background: ${props => props.theme["green-500"]};

            padding: 0 1.25rem;
            font-weight: bold;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:disabled{
                opacity: 0.3;
                cursor: not-allowed;
            }
            &:not(:disabled):hover, &:not(:disabled):focus{
                background-color: ${props => props.theme["green-700"]} ;
                transition: background-color .25;

            }
        }
    }

`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;

    line-height: 0;

    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme["gray-500"]};

`;


export const TypesHistory = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 1rem;
    margin-top: 0.5rem;

`;


interface PropsTypesHistoryButton{
    variant?: 'income' | 'outcome';
    data_state?: 'checked' | 'unchecked';
}


export const TypesHistoryButton = styled(RadioGroup.Item)<PropsTypesHistoryButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 0;
    color: ${props => props.theme["gray-300"]};
    background: ${props => props.theme["gray-700"]};

    padding: 1rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;


    &:hover, &:focus{

        background-color: ${props => props.theme["gray-600"]} ;
        transition: background-color .25;

    }

    svg{
        color: ${props => props.variant == 'income' ? props.theme['green-300'] : props.theme['red-300']}
    }

    &[data-state='checked']{
        background-color: ${props => props.variant == 'income' ? props.theme['green-300'] : props.theme['red-300']};
        box-shadow: 0 0 0 2px ${props => props.variant == 'income' ? props.theme['green-700'] : props.theme['red-500']};;
        color: ${props => props.theme.white};
        svg{
            color: ${props => props.theme.white}
        }
    }
`;