import Modal from "react-modal";

import closeImg from '../../assets/close.svg'
import { Coluna } from "../../styles/global-styles";
import { Content } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";

interface Produto {
    id: number,
    titulo: string,
    valor: number,
    link: string,
}

export interface ModalCarrinhoProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function Cart({isOpen, onRequestClose }: ModalCarrinhoProps) {
    const { carrinho } = useCart();

    const total = carrinho.reduce((somaTotal, produto) => {
        return somaTotal + produto.valor * produto.amount;
    }, 0)

    return(
        <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={onRequestClose}
        overlayClassName="reactModalOverlay" className="reactModalContent" >

            <button type="button" onClick={onRequestClose} 
            className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> </button>

            <h1> Seu carrinho </h1>

            <Content>
                <Coluna>
                    {carrinho.map(produto => (
                        <div key={produto.id} className="produtosCarrinho">
                            <img src={produto.link} alt={produto.titulo} />
                        
                            <div className="itemCarrinho">
                                <h3> {produto.titulo} </h3>
                                <div className="quantidade">
                                    <button> - </button>
                                    <input type="text" readOnly value={produto.amount}/>
                                    <button> + </button>
                                    <button className="trash"> {<FaTrashAlt/>} </button>
                                </div>
                                <h1> { new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(produto.valor)} </h1>
                            </div>
                        </div> 
                    ))}

                    <div className="finalizarCompra">
                        <span> TOTAL </span>
                        <h1> { new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(total)} </h1>
                        <input type="submit" value="FINALIZAR COMPRA" />
                    </div> 
                </Coluna>   
            </Content>
        </Modal>
    );
}