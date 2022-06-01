import { Coluna, ContainerWidth } from "../../styles/global-styles";
import { FaShoppingCart } from "react-icons/fa";
import { Content } from "./styles";
import logo from "../../images/logo.png"
import { useCart } from "../../hooks/useCart";

interface ModalCarrinhoProps {
    abrirCarrinho: () => void;
}

export function Header({ abrirCarrinho }: ModalCarrinhoProps) {
    const { carrinho } = useCart();

    const carrinhoQtd = carrinho.reduce((somaTotal, produto) => {
        return somaTotal + produto.amount;
    }, 0)

    return(
        <Content>
            <ContainerWidth>
                <Coluna>
                    <img src={logo} alt="" /> 
                    <input type="text" placeholder="Procurar um tênis..." />          
                    <a onClick={abrirCarrinho}> {<FaShoppingCart />} <span> {carrinhoQtd} </span> </a>
                </Coluna>                           
            </ContainerWidth>
        </Content>
    );
}