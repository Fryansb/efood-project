# efood-project

O **efood-project** é uma aplicação web desenvolvida em React para simular um sistema de pedidos online de restaurantes, inspirado em plataformas de delivery. O objetivo é proporcionar uma experiência completa de navegação, escolha de restaurantes, visualização de cardápios, adição de produtos ao carrinho e finalização de pedidos.

## Funcionalidades

- Listagem de restaurantes disponíveis com informações detalhadas
- Visualização do cardápio de cada restaurante
- Adição e remoção de itens no carrinho de compras
- Cálculo automático do valor total do pedido
- Formulário para finalização do pedido com validação de dados
- Layout responsivo e moderno, adaptado para dispositivos móveis e desktop

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/) para estilização
- [Vite](https://vitejs.dev/) para build e desenvolvimento
- [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) para padronização de código

## Estrutura do Projeto

```
efood-project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── Routes.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

- **components/**: Componentes reutilizáveis da interface
- **pages/**: Páginas principais da aplicação (Home, Restaurante, Checkout, etc)
- **store/**: Gerenciamento de estado global (Redux ou Context API)
- **assets/**: Imagens e outros arquivos estáticos
- **styles/**: Estilos globais e temas

## Como Executar

1. Clone o repositório:
   ```
   git clone https://github.com/Fryansb/efood-project.git
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
4. Acesse em [http://localhost:5173](http://localhost:5173)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.

---

Desenvolvido por Fryansb.