// import { API_BASE_URL } from '$lib/tipos'; // descomentar quando for usar a API real
import type { PageServerLoad } from './$types';
import { allMockScraps } from '$lib/mockData'; // Importar o MOCK

export const load: PageServerLoad = async ({ url }) => {
  const days = parseInt(url.searchParams.get('days') || '365');
  const source = url.searchParams.get('source');
  const status = url.searchParams.get('status');

  // ****** Início da Simulação da API ******
  let scraps = allMockScraps;
  const now = new Date();

  // 1. Simulando filtros de Período (days)
  scraps = scraps.filter(scrap => {
    const pubDate = new Date(scrap.published_at);
    const diffTime = Math.abs(now.getTime() - pubDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= days;
  });

  // 2. Simulando filtro de fonte da notícia
  if (source) {
    scraps = scraps.filter(scrap => scrap.source === source);
  }

  // 3. Simulando filtro de Status de uso da notícia pela Comunicação da Cocen
  if (status) {
    scraps = scraps.filter(scrap => scrap.status === status);
  }
  // ****** Fim da Simulação da API ******
  
  /* // O CÓDIGO REAL DA API (agora comentado)
  try {
    const res = await fetch(`${API_BASE_URL}/report?${apiQuery.toString()}`);
    ...
  } catch (error) { ... }
  */
  
  return {
    scraps: scraps,
    filters: {
      days: days.toString(),
      source: source || '',
      status: status || ''
    }
  };
};
