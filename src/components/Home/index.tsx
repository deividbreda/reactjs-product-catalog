import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { api } from "../../services/api";
import { Coluna, ContainerWidth } from "../../styles/global-styles";
import { Content } from "./styles";

export interface ProdutosProps {
    id: number,
    titulo: string,
    valor: number,
    link: string,
}

export function Home(){
    const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
    const { addCart } = useCart();

    useEffect(() => {
        api.get('products/catalogs')
        .then(response => setProdutos(response.data.catalogs));
    }, [])

    function handleAddCarrinho(id: number){
        addCart(id)
    }

    return(
        <ContainerWidth>
            <Content>
                <div className="divTitulo">
                    <h2> <i> NOSSOS </i> </h2>
                    <h1>PRODUTOS</h1>
                </div>

                <Coluna>
                    {produtos.map(produto => (
                        <div key={produto.id} className="col col-4">
                            <div className="itemColuna">
                                <img src={produto.link} alt="" />
                                <h5> {produto.titulo }</h5>
                                <h3> { new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(produto.valor)} </h3>
                                <button onClick={() => handleAddCarrinho(produto.id)}> Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    ))}
                </Coluna>
            </Content>
        </ContainerWidth>
    );
}