import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ProdutosProps } from "../components/Home";
import { api } from "../services/api";

export interface Carrinho {
    id: number,
    titulo: string,
    valor: number,
    link: string,
    amount: number
}

type CartInput = Omit<Carrinho, 'id'>

interface CarrinhoProviderProps {
    children: ReactNode;
}

interface CarrinhoContextData {
    carrinho: Carrinho[],
    addCart: (id: number) => Promise<void>;
}

const CarrinhoContext = createContext<CarrinhoContextData>({} as CarrinhoContextData);

export function CartProvider({ children }: CarrinhoProviderProps){
    const [carrinho, setCarrinho] = useState<Carrinho[]>([]);
    const [dados, setDados] = useState<Carrinho[]>([]);

    useEffect(() => {
        api.get('products/carts')
        .then(response => setCarrinho(response.data.carts))
    }, [])

    useEffect(() => {
        api.get(`products/catalogs/`)
        .then(response => setDados(response.data.catalogs))
    }, [])

    async function addCart(id: number){
        const atualizaCarrinho = [...carrinho]
        const carrinhoExists = carrinho.find(produto => produto.id === id);

        const catalogData = [...dados];
        const produtoExists = catalogData.find(produto => produto.id === id)

        const currentAmount = carrinhoExists ? carrinhoExists.amount : 0;
        const amount = currentAmount + 1;
        
        if (carrinhoExists) {
            carrinhoExists.amount = amount;
            
        } else {
            const response = await api.post('products/carts', {
              ...produtoExists, amount: 1, amountProdutos: 1,
            });
            const { cart } = response.data;
            atualizaCarrinho.push(cart);
        }

        setCarrinho(atualizaCarrinho);
        console.log(carrinho)
    }

    return(
        <CarrinhoContext.Provider value = {{ carrinho, addCart }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCart(){
    const context = useContext(CarrinhoContext);

    return context;
}