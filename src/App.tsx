import { useState } from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { CartProvider } from "./hooks/useCart";
import { GlobalStyles } from "./styles/global-styles";

export function App() {
  const [modalCarrinho, setModalCarrinho] = useState(false);

  function handleAbrirCarrinho(){
    setModalCarrinho(true);
  }

  function handleFecharCarrinho(){
    setModalCarrinho(false);
  }

  return (
    <CartProvider>
      <Header abrirCarrinho={handleAbrirCarrinho}/>
      <Home />
      <Cart isOpen={modalCarrinho} onRequestClose={handleFecharCarrinho}/>
      <GlobalStyles />
    </CartProvider>
  );
}