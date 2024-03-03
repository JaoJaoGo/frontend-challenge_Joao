# Desafio Frontend - Imobilead
* Feito por: João Víctor Guedes Carrijo.

## Desafio
1. Desenvolva um formulário com os campos abaixo incluindo todas as validações seguindo as melhores práticas:
    - Nome (string|max:150)
    - Email
    - Senha (min:8|max:35|be:alphanumeric)
    - Confirme Senha
    - Endereço:
    - Cidade:
    - Estado:
    - País:
    - CEP:
    - Mensagem:

2. Aplique o máximo possível de recursos para melhorar a experiência do usuário durante o preenchimento e erros.

3. A mensagem de sucesso deve conter:
    - Uma tela informando que o registro foi efetuado com sucesso;
    - Resumo dos dados submetidos mas que não mostre a senha, é claro.
    - E a previsão do tempo do dia seguinte vinda de qualquer API grátis que preferir na internet. Não deve ser um embed, esperamos ver o mínimo chamada de uma api RESTful apartir do client neste caso.

## Getting Started

Primeiro, instale as dependências:

```bash
npm install
```

Então, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

## Project Architecture:

`app` Roteador para páginas

`pages` Componentes UI

`services` Serviços externos/internos
