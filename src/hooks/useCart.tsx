import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { api } from "../services/api";

export interface Carrinho {
    id: number,
    titulo: string,
    valor: number,
    link: string,
    amount: number
}

interface AtualizaProdutoProps {
    id: number,
    amount: number,
}

interface CarrinhoProviderProps {
    children: ReactNode;
}

interface CarrinhoContextData {
    carrinho: Carrinho[],
    addCart: (id: number) => Promise<void>;
    atualizaQtdProduto: ({id, amount}: AtualizaProdutoProps) => void;
    deleteProduto: (id: number) => void;
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
              ...produtoExists, amount: 1,
            });
            const { cart } = response.data;
            atualizaCarrinho.push(cart);
        }

        setCarrinho(atualizaCarrinho);
        toast.success('Produto adicionado ao carrinho!')
    }

    function deleteProduto(id: number){
        const atualizaCarrinho = carrinho.filter(carrinho => carrinho.id !== id)
        setCarrinho(atualizaCarrinho);
    }

    function atualizaQtdProduto({id, amount}: AtualizaProdutoProps){
        if(amount <= 0) {
            const atualizaCarrinho = carrinho.filter(carrinho => carrinho.id !== id)
            setCarrinho(atualizaCarrinho);
            return;
        }

        const atualizaCarrinho = [...carrinho];
        const produtoExiste = atualizaCarrinho.find(carrinho => carrinho.id === id);

        if(produtoExiste){
            produtoExiste.amount = amount;
            setCarrinho(atualizaCarrinho);
        }
    }

    return(
        <CarrinhoContext.Provider value = {{ carrinho, addCart, atualizaQtdProduto, deleteProduto }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCart(){
    const context = useContext(CarrinhoContext);

    return context;
}