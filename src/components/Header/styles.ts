import styled from "styled-components";

export const Content = styled.header`
    background: #000;
    padding: 20px 0;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 64px;
    }

    img {
        width: 150px;
    }

    input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 2px solid #fff;
        padding: 8px;
        color: #fff;

        &::placeholder {
            color: #fff;
        }
    }

    a {
        position: relative;
        color: #fff;
        font-size: 40px;
        margin-top: 18px;
        cursor: pointer;

        transition: all .3s;

        span {
            height: 17px;
            width: 17px;
            background: red;
            font-size: 14px;
            color: #ffffff;
            line-height: 17px;
            text-align: center;
            font-weight: 700;
            display: inline-block;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: -18px; 
        }

        &:hover {
            transform: rotate(-8deg);
            transition: all .3s;
        }
    }

    h1 {
        color: #fff;
    }
`;