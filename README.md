# E-commerce

Este é um projeto de e-commerce completo desenvolvido para permitir a compra e venda de produtos online. O sistema inclui funcionalidades para gestão de usuários, produtos, pedidos e pagamentos.

## Funcionalidades

- **Cadastro e Login de Usuários**: Permite que os usuários criem contas, façam login e atualizem suas informações pessoais.
- **Catálogo de Produtos**: Exibição de produtos com detalhes, preços e imagens.
- **Carrinho de Compras**: Adicione produtos ao carrinho e visualize o resumo da compra.
- **Finalização de Compra**: Processo de checkout para finalizar a compra com opções de pagamento.
- **Administração**: Painel administrativo para gerenciar produtos, categorias, usuários e pedidos.

## Tecnologias Utilizadas

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Biblioteca de UI: Bootstrap

- **Backend**:
  - Linguagem: Node.js
  - Banco de Dados: MySQL

- **Outras Ferramentas**:
  - Git para controle de versão
  - Docker para containerização
  - API de Pagamento Mercado Pago
  - Fake Store API

## Requisitos

- Node.js
- Conta na API de Pagamento

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/IRuanzzI/E-comerce-project
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd E-comerce-project
    ```

3. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```

4. Instale as dependências do frontend:
    ```bash
    cd ../frontend
    npm install
    ```

5. Configure as variáveis de ambiente (exemplo para backend/.env):
    ```env
    PORT=5000
    MONGO_URI=sua-string-de-conexao-mongodb
    JWT_SECRET=sua-chave-secreta-jwt
    STRIPE_SECRET_KEY=sua-chave-secreta-stripe
    ```

6. Inicie o servidor backend:
    ```bash
    cd backend
    npm start
    ```

7. Inicie o servidor frontend:
    ```bash
    cd ../frontend
    npm start
    ```

## Uso

1. Acesse o frontend em `http://localhost:3000`.
2. Crie uma conta ou faça login.
3. Navegue pelo catálogo de produtos.
4. Adicione produtos ao carrinho.
5. Finalize a compra utilizando uma das opções de pagamento disponíveis.

## Contribuição

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Fork este repositório.
2. Crie uma nova branch:
    ```bash
    git checkout -b minha-nova-feature
    ```
3. Faça suas modificações.
4. Commit suas mudanças:
    ```bash
    git commit -m 'Adiciona nova feature'
    ```
5. Envie para o repositório remoto:
    ```bash
    git push origin minha-nova-feature
    ```
6. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para qualquer dúvida ou sugestão, entre em contato:

- Email: felipelcidreira@gmail.com
- Ruan Pablo https://www.linkedin.com/in/ruan-pablo-cdo/ 
- Felipe Leão https://www.linkedin.com/in/felipelk/

