# Desafio Técnico BeTalent

Este projeto foi desenvolvido utilizando React e Vite, com TypeScript e Styled Components, além de outras tecnologias para gerenciamento de estado e testes.

## 🚀 Tecnologias Utilizadas

- React
- Vite
- TypeScript
- React Hooks
- Context API
- Vitest
- Styled Components

## 📦 Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

### ▶️ Executando o Projeto

Para iniciar o projeto localmente, primeiro crie a seguinte variável em um arquivo `.env` na raiz do projeto para consumir os dados da API:

```
VITE_APP_API_URL=https://betalent-jsonserver.vercel.app/employees
```

Logo após utilize o comando:

```
npm run dev
```

## 🧪 Testes

Para iniciar os testes, utilize o seguinte comando:

```
npm run test
```

Para iniciar os testes com relatório de cobertura de código, utilize:

```
npm run coverage
```

## 🌐 Deploy (Bônus)

Realizei um deploy da aplicação na Vercel para simular a aplicação funcionando em produção e poder ser visível através de um link. Você pode acessar através do seguinte link:

🔗 https://betalent-technical-test-deploy.vercel.app/

## 📝 Observações de Desenvolvimento

- O tamanho do ícone Chevron utilizado no botão da versão mobile do Figma estava desproporcional ao layout na página, então ajustei para 16px para manter a harmonia visual da interface.

- Adotei um padrão de importação de arquivos organizado por pastas, cada uma contendo um `index.ts` para facilitar a importação e manutenção do código.

- Desenvolvi um componente de `Loading` reutilizável, garantindo uma melhor experiência para o usuário ao carregar dados de forma assíncrona.

- Implementei um mecanismo de debounce no input de filtro da tabela, reduzindo chamadas desnecessárias à API e melhorando a performance do aplicativo, garantindo uma experiência mais fluida ao usuário.
