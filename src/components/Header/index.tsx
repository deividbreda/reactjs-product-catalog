import { Coluna, ContainerWidth } from "../../styles/global-styles";
import { FaShoppingCart } from "react-icons/fa";
import { Content } from "./styles";
import logo from "../../images/logo.png"

interface ModalCarrinhoProps {
    abrirCarrinho: () => void;
}

export function Header({ abrirCarrinho }: ModalCarrinhoProps) {
    return(
        <Content>
            <ContainerWidth>
                <Coluna>
                    <img src={logo} alt="" /> 
                    <input type="text" placeholder="Procurar um tênis..." />          
                    <a onClick={abrirCarrinho}> {<FaShoppingCart />} <span> 0 </span> </a>
                </Coluna>                           
            </ContainerWidth>
        </Content>
    );
}