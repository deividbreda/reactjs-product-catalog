import styled from "styled-components";

export const Content = styled.div`
    padding: 50px 0;

    .divTitulo {
        padding-bottom: 45px;
        position: relative;
    }

    h2 {
        font-weight: 400;
        text-align: center;
        font-size: 18px;
        color: #fff;
        letter-spacing: 5px;
    }

    h1 {
        color: red;
        font-size: 65px;
        font-weight: bold;
        line-height: 50px;
        position: relative;
        text-align: center;
        letter-spacing: -8px;
    }

    img {
        width: 100%;
    }

    .itemColuna {
        background: #fff;
        border-radius: 6px;
        padding: 20px;
        margin: 15px;        
       
        transition: all .3s;

        button {
            background: red;
            color: #fff;
            border: none;
            padding: 8px 10px;
            width: 100%;
            margin-top: 16px;
            text-transform: uppercase;

            transition: all .3s;

            &:hover {
                background: #000;
                transition: all .3s;
            }
        }
    }

    .itemColuna:hover{
        transform: scale(1.05);
        box-shadow: 0px 0px 12px #00000029;
        transition: all .3s;
    }

`;