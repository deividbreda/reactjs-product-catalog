import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { Coluna } from "../../styles/global-styles";
import { Produto } from "../Cart";
import { Content } from "./styles";

interface FunctionsCartProps {
    incrementaProduto: (produto: Produto) => void;
    decrementaProduto: (produto: Produto) => void;
    deletaProduto: (id: number) => void;
}

export function CartProducts({incrementaProduto, decrementaProduto, deletaProduto}: FunctionsCartProps){
    const { carrinho } = useCart();

    const total = carrinho.reduce((somaTotal, produto) => {
        return somaTotal + produto.valor * produto.amount;
    }, 0)

    const subtotalItemCart = carrinho.map(carrinho => ({
        ...carrinho, qtdSubtotal: carrinho.valor * carrinho.amount
    }))

    return(
        <Content>
                <Coluna>
                    {subtotalItemCart.map(produto => (
                        <div key={produto.id} className="produtosCarrinho">

                            <img src={produto.link} alt={produto.titulo} />
                    
                            <div className="itemCarrinho">
                                <h3> {produto.titulo} </h3>

                                <div className="quantidade">
                                    <button onClick={() => decrementaProduto(produto)}> - </button>
                                    <input type="text" readOnly value={produto.amount}/>
                                    <button onClick={() => incrementaProduto(produto)}> + </button>
                                    <button className="trash" onClick={() => deletaProduto(produto.id)}> {<FaTrashAlt/>} </button>
                                </div>

                                <h1> { new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(produto.qtdSubtotal)} </h1>
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
    );
}