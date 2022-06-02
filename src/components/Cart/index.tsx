import Modal from "react-modal";

import closeImg from '../../assets/close.svg'
import { useCart } from "../../hooks/useCart";
import { CartProducts } from "../CartProducts";
import { Content } from "./styles";

export interface Produto {
    id: number,
    titulo: string,
    valor: number,
    link: string,
    amount: number
}

export interface ModalCarrinhoProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function Cart({isOpen, onRequestClose }: ModalCarrinhoProps) {
    const { carrinho, atualizaQtdProduto, deleteProduto } = useCart();

    function handleIncrementQtd(produto: Produto){
        atualizaQtdProduto({ id: produto.id, amount: produto.amount + 1 });
    }

    function handleDecrementQtd(produto: Produto){
        atualizaQtdProduto({ id: produto.id, amount: produto.amount - 1 });
    }

    function handleDeleteProduto(id: number){
        deleteProduto(id);
    }

    return(
        <Modal 
        ariaHideApp={false} 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="reactModalOverlay" 
        className="reactModalContent" >

            <button 
            type="button" 
            onClick={onRequestClose} 
            className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> </button>

            {carrinho.length ?
                <>
                <h1> Seu carrinho </h1>
                <CartProducts 
                    incrementaProduto={handleIncrementQtd} 
                    decrementaProduto={handleDecrementQtd} 
                    deletaProduto={handleDeleteProduto} />
                </>
            :   
                <Content>
                    <h1> Seu carrinho está vazio </h1>
                    <h2> Adicione um novo produto ao carrinho </h2>
                </Content>
            }          
        </Modal>
    );
}