# hackathon-frontend
Treinando para o hackathon Hub de TIC da Cocen

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project skeleton

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in hackathon-frontend
npx sv create hackathon-frontend
```

## Integrações 

Este projeto foi criado com as seguintes integrações:
```
┌  Welcome to the Svelte CLI! (v0.9.14)
│
◇  Which template would you like?
│  SvelteKit minimal
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◆  Project created
│
◇  What would you like to add to your project? (use arrow keys / space bar)
│  prettier, eslint, vitest, tailwindcss, sveltekit-adapter
│
◇  vitest: What do you want to use vitest for?
│  unit testing, component testing
│
◇  tailwindcss: Which plugins would you like to add?
│  typography, forms
│
◆  sveltekit-adapter: Which SvelteKit adapter would you like to use?
│  ○ auto (@sveltejs/adapter-auto)
│  ● node
│  ○ static
│  ○ vercel
│  ○ cloudflare
│  ○ netlify
│
◆  Successfully setup add-ons
│
◇  Which package manager do you want to install dependencies with?
│  npm
│
◆  Successfully installed dependencies
│
◇  Successfully formatted modified files
│
◇  What's next? ───────────────────────────────╮
│                                              │
│  📁 Project steps                            │
│                                              │
│    1: cd hackathon-frontend                  │
│    2: npm run dev -- --open                  │
│                                              │
│  To close the dev server, hit Ctrl-C         │
│                                              │
│  Stuck? Visit us at https://svelte.dev/chat  │
│                                              │
├──────────────────────────────────────────────╯
│
└  You're all set!
```

Posteriormente, ainda podem ser incluídas as seguintes integrações:

* lucia (auth)
* paraglide (i18n)

Vide [add-on](https://svelte.dev/docs/kit/integrations) na documentação do Sveltekit.

## Vinculando o código do projeto ao repositório

Após gerar o skeleton com os arquivos iniciais do projeto, o próximo passo é criar oum repositório vazio no GitHub/GitLab (includive sem o REAME.md para não dar comflito) para vincular a pasta local do projeto ao repositório.

Antes de iniciar os comandos do `git`, se não existir, crie o arquivo `.gitignore` e liste as pastas/arquivos que não deverão ser enviados para o repositório.

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
