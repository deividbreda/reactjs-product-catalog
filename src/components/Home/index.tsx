import { Coluna, ContainerWidth } from "../../styles/global-styles";
import { Content } from "./styles";

export function Home(){
    return(
        <ContainerWidth>
            <Content>
                <div className="divTitulo">
                    <h2>NOSSOS</h2>
                    <h1>PRODUTOS</h1>
                </div>

                <Coluna>
                    <div className="col col-4">
                        <div className="itemColuna">
                            <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-infantil-CD6864-019-5-51649775560.jpg" alt="" />
                            <h5> Tênis Nike Air Max </h5>
                            <h3> R$ 699,99 </h3>
                            <button> Adicionar ao Carrinho</button>
                        </div>
                    </div>

                    <div className="col col-4">
                        <div className="itemColuna">
                            <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-infantil-CD6864-019-5-51649775560.jpg" alt="" />
                            <h5> Tênis Nike Air Max </h5>
                            <h3> R$ 699,99 </h3>
                            <button> Adicionar ao Carrinho</button>
                        </div>
                    </div>

                    <div className="col col-4">
                        <div className="itemColuna">
                            <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-infantil-CD6864-019-5-51649775560.jpg" alt="" />
                            <h5> Tênis Nike Air Max </h5>
                            <h3> R$ 699,99 </h3>
                            <button> Adicionar ao Carrinho</button>
                        </div>
                    </div>

                    <div className="col col-4">
                        <div className="itemColuna">
                            <img src="https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-infantil-CD6864-019-5-51649775560.jpg" alt="" />
                            <h5> Tênis Nike Air Max </h5>
                            <h3> R$ 699,99 </h3>
                            <button> Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </Coluna>
            </Content>
        </ContainerWidth>
    );
}