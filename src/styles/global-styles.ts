import styled, { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
     * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: #0f0f0f;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    /* Uma Colunas */
    .col {
        display: inline-block;
        vertical-align: top;
        min-height: 1px;
        width: 100%;
        margin-right: -4px;
        *zoom: 1;
        *display: inline;
    }

    /* Duas Colunas */
    @media (min-width: 728px) {
        .col-2 {
            width: 50%;
        }
    }

    @media (min-width: 728px) {
        .col-2-picture {
            width: 40%;
        }

        .col-2-text {
            width: 60%;
        }
    }

    /* Três Colunas */
    @media (min-width: 728px) {
        .col-3 {
            width: 33.33333%;
        }
    }

    /* Quatro Colunas */
    @media (min-width: 728px) {
        .col-4 {
            width: 25%;
        }
    }

    @media (min-width: 500px) and (max-width: 727px) {
        .col-4 {
            width: 50%;
        }
    }

    @media (min-width: 50px) and (max-width: 499px) {
        .col-4 {
            width: 100%;
        }
    }

    /* Cinco Colunas */
    @media (min-width: 728px) {
        .col-5 {
            width: 20%;
        }
    }

    /* Seis Colunas */
    @media (min-width: 728px) {
        .col-6 {
            width: 16.6666667%;
        }
    }

    .reactModalOverlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .reactModalContent{
        width: 100%;
        max-width: 400px;
        background: #fff;
        height: 100%;
        right: 0;
        padding: 40px 35px;
        position: absolute;
        border-radius: 0px;
        overflow: auto;
    }

    .reactModalClose {
        position: absolute;
        right: 26px;
        top: 26px;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const ContainerWidth = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Coluna = styled.div`
    width: 100%;
`