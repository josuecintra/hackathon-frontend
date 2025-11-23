import { readable } from 'svelte/store';

/**
 * Store de internacionalização (i18n) para o aplicativo.
 * 
 * Este arquivo tem 2 objetivos:
 * 
 * 1. fornecer textos traduzidos para a interface do usuário. 
 * 2. servir como referência dos termos usados na aplicação como uma forma de aplicar uma consistência terminológica.
 * 
 * Consequentemente, ele facilita a manutenção e a expansão para outros idiomas no futuro.
 * 
 * As traduções são armazenadas em um objeto e acessadas via store Svelte (componente pode se inscrever para atualizações automáticas).
 * 
 * Atualmente, suporta apenas pt-BR, mas pode ser expandido para outros idiomas. Para isso, basta criar objetos semelhantes para en, es, etc., e adicionar lógica para alternar entre eles passando o idioma desejado.
 */

// 1. Definindo os tipos de objetos das traduções. 
export type Translations = {
  nav: {
    title: string;
    dashboard: string;
    reports: string;
  };
  common: {
    all: string;
    apiError: string;
  };
  dashboard: {
    filterTitle: string;
    filterKeywordLabel: string;
    filterStatusLabel: string;
    filterSourceLabel: string;
    filterButton: string;
    emptyTitle: string;
    emptySubtitle: string;
    cardPublishedAt: string;
    cardSourceLink: string;
    cardNoAbstract: string;
    cardIgnoreButton: string;
    cardPublishButton: string;
  };
  report: {
    pageTitle: string;
    filterDaysLabel: string;
    filterStatusLabel: string;
    filterButton: string;
    tableHeaderSource: string;
    tableHeaderTitle: string;
    tableHeaderStatus: string;
    tableHeaderDate: string;
    emptyTitle: string;
  };
  status: {
    new: string;
    // altered: string;
    modified: string;
    ignored: string;
    published: string;
  };
};

// 2. Criando o objeto de textos (vamos usar o pt-BR como padrão)
const ptBR: Translations = {
  nav: {
    title: 'Sist Notícias',
    dashboard: 'Dashboard',
    reports: 'Relatórios'
  },
  common: {
    all: 'Todos',
    apiError: 'Erro da API.'
  },
  dashboard: {
    filterTitle: 'Filtros',
    filterKeywordLabel: 'Palavra-chave',
    filterStatusLabel: 'Status',
    filterSourceLabel: 'Centro/Núcleo',
    filterButton: 'Filtrar',
    emptyTitle: 'Nenhuma notícia encontrada',
    emptySubtitle: 'Tente ajustar seus filtros.',
    cardPublishedAt: 'Publicado pelo C/N em:',
    cardSourceLink: 'Ver no Centro/Núcleo',
    cardNoAbstract: 'Sem resumo disponível.',
    cardIgnoreButton: 'Ignorar',
    cardPublishButton: 'Publicar'
  },
  report: {
    pageTitle: 'Relatório de Notícias',
    filterDaysLabel: 'Período (últimos X dias)',
    filterStatusLabel: 'Status',
    filterButton: 'Gerar Relatório',
    tableHeaderSource: 'Centro/Núcleo',
    tableHeaderTitle: 'Título',
    tableHeaderStatus: 'Status',
    tableHeaderDate: 'Data Pub. pelo C/N',
    emptyTitle: 'Nenhum registro encontrado.'
  },
  status: {
    new: "Nova",
    modified: "Alterada",
    ignored: "Ignorada",
    published: "Publicada",
  }
};

// 3. Exportando a store

// criando uma lista dos idiomas suportados e os textos correspondentes
const languages = {
  'pt-BR': ptBR,
  // 'en': en,
  // 'es': es,
};

// No futuro, é aqui pode tornar isso dinâmico para carregar en, es, etc, bastando passar o idioma desejado através de uma função ou store com a escolha do cliente.
const languageSelected = 'pt-BR';

export const t = readable<Translations>(languages[languageSelected] || ptBR);