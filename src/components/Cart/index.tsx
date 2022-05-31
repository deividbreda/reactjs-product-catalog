import Modal from "react-modal";

import closeImg from '../../assets/close.svg'
import { Coluna } from "../../styles/global-styles";
import { Content } from "./styles";

interface ModalCarrinhoProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function Cart({isOpen, onRequestClose }: ModalCarrinhoProps) {
    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}
        overlayClassName="reactModalOverlay" className="reactModalContent" >

            <button type="button" onClick={onRequestClose} 
            className="reactModalClose"> <img src={closeImg} alt="Fechar modal"/> </button>

            <h1> Seu carrinho </h1>

            <Content>
                <Coluna>
                    <div className="produtosCarrinho">
                        <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-infantil-CD6864-019-5-51649775560.jpg" alt="" />
                    
                        <div className="itemCarrinho">
                            <h3> Tênis Air Max 90 </h3>
                            <div className="quantidade">
                                <button> - </button>
                                <input type="text" value="2" />
                                <button> + </button>
                            </div>
                            <h1> R$ 1.199,00 </h1>
                        </div>
                    </div> 

                    <div className="produtosCarrinho">
                        <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-infantil-CD6864-019-5-51649775560.jpg" alt="" />
                    
                        <div className="itemCarrinho">
                            <h3> Tênis Air Max 90 </h3>
                            <div className="quantidade">
                                <button> - </button>
                                <input type="text" value="1" />
                                <button> + </button>
                            </div>
                            <h1> R$ 1.199,00 </h1>
                        </div>
                    </div> 


                    <div className="finalizarCompra">
                        <h1> Total: R$ 1.199,00</h1>
                        <input type="submit" value="Finalizar Compra" />
                    </div>
                    
                </Coluna>   
            </Content>
        </Modal>
    );
}