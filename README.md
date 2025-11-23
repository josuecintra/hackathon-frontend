# hackathon-frontend
Treinando para o hackathon Hub de TIC da Cocen

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Vinculando o projeto ao repositório

Crie o repositório vazio (includive sem o REAME.md para não dar comflito) e siga os passos a abaixo para vincular o projeto ao repositório.

Antes de iniciar os comandos do `git`, se não não houver, crie o arquivo `.gitignore` e liste as pastas/arquivos que não deverão ser enviados para o repositório, incluindo os env e .env.

```sh
git init   # inicialize o git no repositório
git add .  # adicionar todos os arquivos no commit
git commit -m 'First commit'
git branch -M main
git remote add origin copiar-SSH-do-repositório
git push -u origin main
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
