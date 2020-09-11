import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--header);
    padding: 11px 16px;
`;

export const GitHubLogo = styled(FaGithub)`
    fill: var(--logo);
    width: 32px;
    height: 32px;
    flex-shrink: 0; /*A logo não é "amassada" quando diminuimos a responsibilidade*/
`
export const SearchForm = styled.form`
    padding-left: 16px;
    width: 100%;

    input {
        background: var(--search);
        outline: 0; /*Tira aquela linha branca em volta dos campos do form*/
        border-radius: 6px;
        padding: 7px 12px;
        width: 100%;

        &:focus { /*Para quando clicarem no input ele executar tal ação, nesse caso vai ser aumentar a barrinha e mudar ela de cor*/
            width: 318px;
        }
 
        /* Responsável pela animação que a barra faz*/
        transition: width 0.2s ease-out, color 0.2s ease-out;
    }
`