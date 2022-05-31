import { Coluna, ContainerWidth } from "../../styles/global-styles";
import { FaShoppingCart } from "react-icons/fa";
import { Content } from "./styles";
import logo from "../../images/logo.png"

export function Header(){
    return(
        <Content>
            <ContainerWidth>
                <Coluna>
                    <img src={logo} alt="" /> 
                    <input type="text" placeholder="Procurar um tênis..." />          
                    <a> {<FaShoppingCart />} <span> 0 </span> </a>
                </Coluna>                           
            </ContainerWidth>
        </Content>
    );
}