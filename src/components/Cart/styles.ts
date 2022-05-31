import styled from "styled-components";

export const Content = styled.div`
    position: relative;
    padding: 30px 0;

    img {
        width: 40%;
    }

    h3 {
        font-size: 14px;
    }

    h1 {
        font-size: 16px;
    }

    .produtosCarrinho {
        display: flex;
        gap: 16px;
        align-items: center;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
        padding: 30px 0;

        & + .produtosCarrinho {
            border-top: none;
        }
    }

    .quantidade {
        display: flex;
        gap: 8px;
        padding: 18px 0;

        input {
            width: 28px;
            background: #dedede;
            border: none;
            border-bottom: 2px solid #000;
            text-align: center;
            padding-top: 2px;
        }
        
        button {
            background: #000;
            color: #fff;
            padding: 2px 7px;
            border-radius: 50%;
        }
    }

    .finalizarCompra {
        margin-top: 30px;

        h1 {
            font-size: 28px;
        }

        input {
            cursor: pointer;
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            border: none;
            background: red;
            color: #fff;
            font-size: 18px;
        }
    }
`;