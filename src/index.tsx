import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({
  models: {
    catalog: Model,
    cart: Model,
  },

  seeds(server) {
    server.db.loadData({
      catalogs: [
        {
          id: 1,
          titulo: 'Tênis Nike Air Max',
          valor: 1199,
          link: 'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-90-infantil-CD6864-019-5-51649775560.jpg',         
        },  

        {
          id: 2,
          titulo: 'Tênis Air Jordan 1',
          valor: 1299,
          link: 'https://images.lojanike.com.br/515x515/produto/air-jordan-1-retro-high-og-555088-108-5-51653087273.jpg',        
        },

        {
          id: 3,
          titulo: 'Tênis Nike SB Dunk Low PRO',
          valor: 849.99,
          link: 'https://images.lojanike.com.br/515x515/produto/tenis-nike-sb-dunk-low-pro-DM0807-600-5-51647548520.jpg',         
        },

        {
          id: 4,
          titulo: 'Tênis Air Jodan 5 Retro',
          valor: 1499.99,
          link: 'https://images.lojanike.com.br/515x515/produto/tenis-jordan-5-retro-masculino-DM9014-003-5-51653088796.jpg',          
        },
      ],
    })
  },

  routes(){
    this.namespace = '/api/products';

    this.get('catalogs', () => {
      return this.schema.all('catalog');
    })

    this.post('catalogs', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('catalog', data);
    })

    this.get('carts', () => {
      return this.schema.all('cart');
    })

    this.post('carts', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('cart', data);
    })
  }
})
  

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
